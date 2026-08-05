import React from 'react';
import { Home, Utensils, Plane, Trash2, Plus, AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function DashboardCards({ profile, expenses, onOpenExpenseModal, onDeleteExpense }) {
  // Calculando limites 50 / 30 / 20 com base no salário líquido CLT do perfil
  const limitFixas = profile.netIncome * 0.5;
  const limitLivre = profile.netIncome * 0.3;
  const limitMeta = profile.netIncome * 0.2;

  const totalFixas = expenses.filter(e => e.category === 'fixas').reduce((acc, e) => acc + e.amount, 0);
  const totalLivre = expenses.filter(e => e.category === 'livre').reduce((acc, e) => acc + e.amount, 0);
  const totalMeta = expenses.filter(e => e.category === 'meta').reduce((acc, e) => acc + e.amount, 0);

  const getStatusColor = (total, limit, isMeta = false) => {
    if (isMeta) {
      return total >= limit ? '#10B981' : '#3B82F6';
    }
    const ratio = total / limit;
    if (ratio > 1) return '#F43F5E'; // vermelho / rose
    if (ratio > 0.85) return '#F59E0B'; // âmbar / amarelo
    return '#10B981'; // verde
  };

  const getPercent = (total, limit) => Math.min(Math.round((total / limit) * 100), 100);

  const cardsData = [
    {
      id: 'fixas',
      title: '🏠 Contas Fixas (50%)',
      subtitle: 'Aluguel, Luz, Internet & Supermercado Básico',
      total: totalFixas,
      limit: limitFixas,
      color: getStatusColor(totalFixas, limitFixas),
      badgeText: totalFixas > limitFixas ? 'Acima do Limite' : 'No Limite Seguro',
      badgeClass: totalFixas > limitFixas ? 'badge-rose' : 'badge-emerald',
      icon: <Home size={20} color="#60A5FA" />
    },
    {
      id: 'livre',
      title: '🍕 Vida Livre (30%)',
      subtitle: 'Ifood, Streaming, Saídas & Lazer Solo',
      total: totalLivre,
      limit: limitLivre,
      color: getStatusColor(totalLivre, limitLivre),
      badgeText: totalLivre > limitLivre * 0.85 ? 'Atenção aos Delivery!' : 'Dentro do Planejado',
      badgeClass: totalLivre > limitLivre * 0.85 ? 'badge-amber' : 'badge-emerald',
      icon: <Utensils size={20} color="#FBBF24" />
    },
    {
      id: 'meta',
      title: '✈️ Viagem & Reserva (20%)',
      subtitle: 'Pagar-se Primeiro no 5º Dia Útil CLT',
      total: totalMeta,
      limit: limitMeta,
      color: '#10B981',
      badgeText: 'Em Progresso',
      badgeClass: 'badge-emerald',
      icon: <Plane size={20} color="#34D399" />,
      isMeta: true
    }
  ];

  return (
    <section style={{ marginBottom: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '20px'
      }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>O Semáforo do Mês</span>
            <span className="badge badge-indigo">Regra 50/30/20 CLT</span>
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Como seu salário de <strong>R$ {profile.netIncome.toLocaleString('pt-BR')}</strong> está distribuído este mês.
          </p>
        </div>

        <button
          onClick={onOpenExpenseModal}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            borderRadius: '14px',
            background: 'var(--gradient-emerald)',
            color: '#fff',
            fontWeight: 700,
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)',
            fontSize: '0.9rem'
          }}
        >
          <Plus size={18} />
          + Adicionar Despesa
        </button>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {cardsData.map((card) => {
          const percent = getPercent(card.total, card.limit);
          const cardExpenses = expenses.filter(e => e.category === card.id);

          return (
            <div key={card.id} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Top Bar */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>{card.title}</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{card.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Amount & Progress */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div>
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: card.color }}>
                      R$ {card.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {' '} / R$ {card.limit.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <span className={`badge ${card.badgeClass}`}>
                    {card.badgeText}
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '10px',
                  borderRadius: '9999px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{
                    width: `${percent}%`,
                    height: '100%',
                    borderRadius: '9999px',
                    background: card.color,
                    transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} />
                </div>
              </div>

              {/* Items list in this bucket */}
              <div style={{
                marginTop: '4px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxHeight: '180px',
                overflowY: 'auto'
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Despesas e Aportes Registrados
                </span>

                {cardExpenses.length === 0 && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    Nenhum gasto registrado nesta caixinha.
                  </p>
                )}

                {cardExpenses.map((exp) => (
                  <div key={exp.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(15, 23, 42, 0.5)',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.85rem', color: '#fff', display: 'block', fontWeight: 500 }}>
                        {exp.name}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        {exp.date}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
                        R$ {exp.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                      <button
                        onClick={() => onDeleteExpense(exp.id)}
                        title="Excluir Gasto"
                        style={{
                          color: 'var(--text-muted)',
                          padding: '4px',
                          borderRadius: '6px'
                        }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
