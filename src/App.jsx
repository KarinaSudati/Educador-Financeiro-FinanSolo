import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardCards from './components/DashboardCards';
import TripSimulator from './components/TripSimulator';
import SmartAlerts from './components/SmartAlerts';
import AiRecommendations from './components/AiRecommendations';
import FinancePills from './components/FinancePills';
import ProfileModal from './components/ProfileModal';
import ExpenseModal from './components/ExpenseModal';
import Footer from './components/Footer';

import {
  defaultProfile,
  defaultExpenses,
  smartAlertsList,
  aiRecommendationsList,
  financePillsList
} from './data/defaultData';
import { Sparkles, Plus, Wallet, ShieldCheck, PlaneTakeoff, TrendingUp } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState(defaultProfile);
  const [expenses, setExpenses] = useState(defaultExpenses);
  const [alerts, setAlerts] = useState(smartAlertsList);
  const [recommendations, setRecommendations] = useState(aiRecommendationsList);
  const [pills] = useState(financePillsList);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  // Atualiza perfil CLT (salário, idade, meta de viagem)
  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    showToast(`Perfil CLT e Renda atualizados para R$ ${updatedProfile.netIncome.toLocaleString('pt-BR')}!`);
  };

  // Adiciona nova despesa
  const handleAddExpense = (newExpense) => {
    setExpenses(prev => [newExpense, ...prev]);
    showToast(`Despesa "${newExpense.name}" de R$ ${newExpense.amount} registrada com sucesso!`);
  };

  // Remove despesa
  const handleDeleteExpense = (id) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
    showToast('Gasto removido da lista.', 'info');
  };

  // Aplica economia sugerida por um alerta
  const handleApplySaving = (alertId, savingBoost) => {
    setAlerts(prev => prev.map(a => 
      a.id === alertId ? { ...a, applied: true } : a
    ));

    if (savingBoost > 0) {
      setProfile(prev => ({
        ...prev,
        savedAmount: (prev.savedAmount || 0) + savingBoost
      }));
      showToast(`🎉 R$ ${savingBoost} foram adicionados diretamente para a sua viagem para ${profile.tripDestination.split(' - ')[0]}!`);
    } else {
      showToast('Dica marcada como visualizada!');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <Navbar
        profile={profile}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Floating Notification Toast */}
      {notification && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 200,
          background: notification.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(59, 130, 246, 0.95)',
          color: '#fff',
          padding: '14px 24px',
          borderRadius: '14px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: 600,
          fontSize: '0.92rem',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Sparkles size={18} />
          <span>{notification.message}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main style={{
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto',
        padding: '32px 24px',
        flex: 1
      }}>
        {/* Welcome Banner / Hero */}
        <section className="glass-card" style={{
          padding: '32px',
          marginBottom: '36px',
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-emerald">
                <ShieldCheck size={14} /> Solo CLT • {profile.age} anos
              </span>
              <span className="badge badge-indigo">
                <PlaneTakeoff size={14} /> Foco: {profile.tripDestination.split(' - ')[0]}
              </span>
            </div>

            <h1 style={{
              fontSize: '2rem',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '8px'
            }}>
              Olá, {profile.name.split(' ')[0]}! Seu dinheiro sob controle, sua viagem garantida.
            </h1>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', maxWidth: '640px', lineHeight: 1.6 }}>
              O <strong>FinanSolo</strong> traduz finanças para o português do dia a dia. Aqui você organiza seu salário de <strong>R$ {profile.netIncome.toLocaleString('pt-BR')}</strong> sem culpa e sem planilhas chatas.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsExpenseModalOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '14px',
                background: 'var(--gradient-emerald)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.92rem',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)'
              }}
            >
              <Plus size={18} />
              Registrar Gasto
            </button>

            <button
              onClick={() => setIsProfileModalOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <Wallet size={18} />
              Simular Renda CLT
            </button>
          </div>
        </section>

        {/* 1. Semáforo do Mês - Regra 50/30/20 */}
        <DashboardCards
          profile={profile}
          expenses={expenses}
          onOpenExpenseModal={() => setIsExpenseModalOpen(true)}
          onDeleteExpense={handleDeleteExpense}
        />

        {/* 2. Simulador Interativo de Metas de Economia (Viagem) */}
        <TripSimulator
          profile={profile}
          onUpdateProfile={handleSaveProfile}
        />

        {/* 3. Alertas Amigáveis de Despesas Exageradas */}
        <SmartAlerts
          alerts={alerts}
          onApplySaving={handleApplySaving}
        />

        {/* 4. Recomendações Personalizadas da Inteligência Artificial */}
        <AiRecommendations
          recommendations={recommendations}
          profile={profile}
        />

        {/* 5. Pílulas de Aprendizado de Finanças em 30 Segundos */}
        <FinancePills
          pills={pills}
        />
      </main>

      {/* Profile & Expense Modals */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />

      <ExpenseModal
        isOpen={isExpenseModalOpen}
        onClose={() => setIsExpenseModalOpen(false)}
        onAddExpense={handleAddExpense}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
