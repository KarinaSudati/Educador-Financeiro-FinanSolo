import React from 'react';
import { BookOpen, CheckCircle, HelpCircle, Lightbulb, ShieldAlert, PieChart } from 'lucide-react';

export default function FinancePills({ pills }) {
  const getIcon = (id) => {
    switch (id) {
      case 'pill-1':
        return <Lightbulb size={22} color="#FBBF24" />;
      case 'pill-2':
        return <CheckCircle size={22} color="#10B981" />;
      case 'pill-3':
        return <ShieldAlert size={22} color="#F43F5E" />;
      default:
        return <PieChart size={22} color="#60A5FA" />;
    }
  };

  return (
    <section style={{ marginBottom: '48px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Pílulas de Finanças em 30 Segundos</span>
          <span className="badge badge-indigo">Zero Economiquês</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Conceitos fundamentais traduzidos para o português do dia a dia com exemplos reais.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {pills.map((pill) => (
          <div key={pill.id} className="glass-card" style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getIcon(pill.id)}
                </div>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {pill.tagline}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '8px' }}>
                {pill.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {pill.content}
              </p>
            </div>

            {/* Example Box */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '12px 14px',
              borderRadius: '12px',
              marginTop: '4px'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', display: 'block', marginBottom: '4px' }}>
                EXEMPLO PRÁTICO:
              </span>
              <p style={{ fontSize: '0.83rem', color: '#fff', fontWeight: 500 }}>
                {pill.example}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
