import React, { useState } from 'react';
import { Plane, Zap, Calendar, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TripSimulator({ profile, onUpdateProfile }) {
  const [savingsValue, setSavingsValue] = useState(profile.monthlySavingsTarget || 450);
  const [isTurbo, setIsTurbo] = useState(false);

  const turboBonus = 179; // Cortando 2 deliveries + 1 streaming sem uso
  const currentMonthly = isTurbo ? savingsValue + turboBonus : savingsValue;
  const remaining = Math.max(profile.tripCost - (profile.savedAmount || 0), 0);

  const calculateMonths = (monthly) => {
    if (monthly <= 0) return 99;
    return Math.ceil(remaining / monthly);
  };

  const monthsLeft = calculateMonths(currentMonthly);
  const percentSaved = Math.min(Math.round(((profile.savedAmount || 0) / profile.tripCost) * 100), 100);

  // Formatar a data prevista para a viagem
  const getProjectedDate = (months) => {
    const d = new Date();
    d.setMonth(d.getMonth() + months);
    return d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  };

  return (
    <section className="glass-card" style={{
      padding: '32px',
      marginBottom: '40px',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 10% 10%, rgba(99, 102, 241, 0.12) 0%, rgba(30, 41, 59, 0.75) 70%)',
      border: '1px solid rgba(99, 102, 241, 0.25)'
    }}>
      {/* Top Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '28px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#fff' }}>
              Simulador da Viagem dos Sonhos
            </h2>
            <span className="badge badge-indigo">
              <Sparkles size={13} /> IA Interativa
            </span>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Ajuste quanto pode guardar por mês e veja a data do seu embarque para <strong>{profile.tripDestination}</strong>.
          </p>
        </div>

        {/* Turbo Switch */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: isTurbo ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.6)',
          border: `1px solid ${isTurbo ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
          padding: '8px 16px',
          borderRadius: '9999px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => setIsTurbo(!isTurbo)}
        >
          <Zap size={18} color={isTurbo ? '#10B981' : '#64748B'} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isTurbo ? '#10B981' : 'var(--text-secondary)' }}>
            {isTurbo ? 'Modo Turbo ATIVADO (+ R$ 179/mês)' : 'Ativar Modo Turbo (+ R$ 179/mês)'}
          </span>
        </div>
      </div>

      {/* Main Simulator Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', alignItems: 'center' }}>
        {/* Left column: Slider & Progress */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Slider control */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.5)',
            padding: '22px 24px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Quanto pretendo guardar por mês:
              </span>
              <span style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: 'var(--accent-emerald)',
                textShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
              }}>
                R$ {currentMonthly.toLocaleString('pt-BR')} / mês
              </span>
            </div>

            <input
              type="range"
              min="100"
              max="1500"
              step="25"
              value={savingsValue}
              onChange={(e) => setSavingsValue(Number(e.target.value))}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>R$ 100 (Ritmo Leve)</span>
              <span>R$ 750 (Equilibrado)</span>
              <span>R$ 1.500 (Acelerado)</span>
            </div>
          </div>

          {/* Goal progress Bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Já acumulado: </span>
                <strong style={{ color: '#fff' }}>R$ {(profile.savedAmount || 0).toLocaleString('pt-BR')}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}> de R$ {profile.tripCost.toLocaleString('pt-BR')}</span>
              </div>
              <span className="badge badge-emerald">{percentSaved}% concluído</span>
            </div>

            <div style={{
              width: '100%',
              height: '14px',
              borderRadius: '9999px',
              background: 'rgba(15, 23, 42, 0.8)',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{
                width: `${percentSaved}%`,
                height: '100%',
                background: 'var(--gradient-travel)',
                borderRadius: '9999px',
                transition: 'width 0.5s ease'
              }} />
            </div>
          </div>
        </div>

        {/* Right Column: Time to trip card */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.85)',
          padding: '26px',
          borderRadius: '20px',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'var(--gradient-travel)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)'
          }}>
            <Plane size={26} />
          </div>

          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>
              Sua viagem estará garantida em:
            </span>
            <span style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.1,
              marginTop: '4px',
              display: 'block'
            }}>
              {monthsLeft} meses
            </span>
          </div>

          <div style={{
            padding: '8px 14px',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            color: '#A5B4FC',
            fontSize: '0.85rem',
            fontWeight: 600
          }}>
            📅 Data de Embarque: <strong>{getProjectedDate(monthsLeft)}</strong>
          </div>

          {isTurbo && (
            <p style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
              ✨ Você economizou tempo cortando 2 deliveries e 1 streaming!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
