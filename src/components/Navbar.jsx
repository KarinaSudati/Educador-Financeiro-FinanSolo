import React from 'react';
import { Sparkles, User, Plane, Wallet, Settings } from 'lucide-react';

export default function Navbar({ profile, onOpenProfileModal }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(9, 13, 22, 0.82)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '16px 0',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--gradient-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.35)',
            color: '#fff',
            fontWeight: 'bold'
          }}>
            <Sparkles size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                Finan<span style={{ color: 'var(--accent-emerald)' }}>Solo</span>
              </span>
              <span className="badge badge-emerald">CLT Solo</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Educador Financeiro Inteligente
            </p>
          </div>
        </div>

        {/* User Profile Quick Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '8px 16px',
            borderRadius: '9999px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Wallet size={16} color="var(--accent-emerald)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Renda CLT:</span>
              <strong style={{ fontSize: '0.9rem', color: '#fff' }}>
                R$ {profile.netIncome.toLocaleString('pt-BR')}
              </strong>
            </div>

            <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.15)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Plane size={16} color="var(--accent-blue)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Meta:</span>
              <strong style={{ fontSize: '0.9rem', color: '#fff' }}>
                {profile.tripDestination.split(' - ')[0]}
              </strong>
            </div>
          </div>

          <button
            onClick={onOpenProfileModal}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2))',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            <Settings size={16} />
            Ajustar Perfil
          </button>
        </div>
      </div>
    </header>
  );
}
