import React, { useState } from 'react';
import { Sparkles, CheckSquare, Square, ShoppingBag, PiggyBank, Award, ArrowRight } from 'lucide-react';

export default function AiRecommendations({ recommendations, profile }) {
  const [completedSteps, setCompletedSteps] = useState({});

  const toggleStep = (id) => {
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Supermercado')) return <ShoppingBag size={20} color="var(--accent-emerald)" />;
    if (category.includes('13º')) return <Award size={20} color="var(--accent-amber)" />;
    return <PiggyBank size={20} color="var(--accent-blue)" />;
  };

  return (
    <section style={{ marginBottom: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Dicas Personalizadas para {profile.name.split(' ')[0]}</span>
          <span className="badge badge-emerald">IA • CLT Solo ({profile.age} anos)</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Recomendações pensadas para a sua realidade de <strong>R$ {profile.netIncome.toLocaleString('pt-BR')}</strong> morando sozinho.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '20px'
      }}>
        {recommendations.map((rec) => {
          const isChecked = completedSteps[rec.id];

          return (
            <div key={rec.id} className="glass-card" style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '16px',
              borderTop: '3px solid var(--accent-indigo)'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {getCategoryIcon(rec.category)}
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--accent-indigo)'
                    }}>
                      {rec.category}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '8px' }}>
                  {rec.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {rec.description}
                </p>
              </div>

              <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <button
                  onClick={() => toggleStep(rec.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: isChecked ? '#10B981' : 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  {isChecked ? (
                    <CheckSquare size={18} color="#10B981" />
                  ) : (
                    <Square size={18} color="var(--text-muted)" />
                  )}
                  <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
                    {isChecked ? 'Dica colocada em prática!' : 'Marcar como praticada'}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
