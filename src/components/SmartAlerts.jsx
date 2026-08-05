import React from 'react';
import { AlertTriangle, AlertCircle, Info, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function SmartAlerts({ alerts, onApplySaving }) {
  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle size={22} color="var(--accent-amber)" />;
      case 'info':
        return <Info size={22} color="var(--accent-blue)" />;
      default:
        return <AlertCircle size={22} color="#F43F5E" />;
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case 'warning':
        return 'rgba(245, 158, 11, 0.35)';
      case 'info':
        return 'rgba(59, 130, 246, 0.35)';
      default:
        return 'rgba(244, 63, 94, 0.35)';
    }
  };

  return (
    <section style={{ marginBottom: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Alertas Inteligentes do Seu Dia a Dia</span>
          <span className="badge badge-amber">Sem Culpa • Práticos</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Em vez de cobranças genéricas, veja quanto valem seus pequenos excessos em <strong>dias de viagem</strong>!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {alerts.map((alert) => (
          <div key={alert.id} className="glass-card" style={{
            padding: '24px',
            borderLeft: `4px solid ${alert.applied ? '#10B981' : getBorderColor(alert.type)}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px',
            opacity: alert.applied ? 0.8 : 1
          }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {getAlertIcon(alert.type)}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700 }}>{alert.title}</h3>
                  {alert.applied && (
                    <span className="badge badge-emerald">Dica Aplicada!</span>
                  )}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {alert.message}
                </p>
              </div>
            </div>

            {/* Action button */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '14px', display: 'flex', justifyContent: 'flex-end' }}>
              {!alert.applied ? (
                <button
                  onClick={() => onApplySaving(alert.id, alert.savingBoost)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    background: alert.savingBoost > 0 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${alert.savingBoost > 0 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                    color: alert.savingBoost > 0 ? 'var(--accent-emerald)' : '#fff',
                    fontSize: '0.82rem',
                    fontWeight: 600
                  }}
                >
                  <Sparkles size={15} />
                  <span>{alert.actionText}</span>
                  <ArrowUpRight size={15} />
                </button>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.85rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} />
                  <span>Valor adicionado à sua caixinha de viagem!</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
