import React, { useState } from 'react';
import { X, Save, User, DollarSign, Plane, Target, Calendar } from 'lucide-react';

export default function ProfileModal({ isOpen, onClose, profile, onSave }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({ ...profile });

  const handleChange = (field, value) => {
    setForm(prev => ({
      ...prev,
      [field]: typeof prev[field] === 'number' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(9, 13, 22, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '20px'
    }}>
      <div className="glass-card animate-slide-up" style={{
        width: '100%',
        maxWidth: '520px',
        padding: '28px',
        position: 'relative',
        background: 'rgba(30, 41, 59, 0.92)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Ajustar Perfil & Renda CLT</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              A Inteligência Artificial adapta todas as caixinhas ao seu salário atual.
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '8px',
              borderRadius: '50%',
              color: 'var(--text-secondary)',
              background: 'rgba(255, 255, 255, 0.06)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Seu Nome / Apelido
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 40px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif'
                }}
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Renda Líquida CLT (R$)
              </label>
              <div style={{ position: 'relative' }}>
                <DollarSign size={18} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--accent-emerald)' }} />
                <input
                  type="number"
                  value={form.netIncome}
                  onChange={(e) => handleChange('netIncome', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    borderRadius: '10px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  min="1000"
                  step="100"
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Sua Idade (anos)
              </label>
              <div style={{ position: 'relative' }}>
                <Calendar size={18} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-muted)' }} />
                <input
                  type="number"
                  value={form.age}
                  onChange={(e) => handleChange('age', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    borderRadius: '10px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  min="16"
                  max="90"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Destino da Viagem dos Sonhos
            </label>
            <div style={{ position: 'relative' }}>
              <Plane size={18} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--accent-blue)' }} />
              <input
                type="text"
                value={form.tripDestination}
                onChange={(e) => handleChange('tripDestination', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 40px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif'
                }}
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Custo da Viagem (R$)
              </label>
              <div style={{ position: 'relative' }}>
                <Target size={18} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--accent-amber)' }} />
                <input
                  type="number"
                  value={form.tripCost}
                  onChange={(e) => handleChange('tripCost', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    borderRadius: '10px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  min="500"
                  step="100"
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Meta Mensal (R$)
              </label>
              <div style={{ position: 'relative' }}>
                <DollarSign size={18} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--accent-emerald)' }} />
                <input
                  type="number"
                  value={form.monthlySavingsTarget}
                  onChange={(e) => handleChange('monthlySavingsTarget', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    borderRadius: '10px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  min="50"
                  step="50"
                  required
                />
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px'
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 18px',
                borderRadius: '10px',
                color: 'var(--text-secondary)',
                background: 'rgba(255, 255, 255, 0.05)',
                fontWeight: 600
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '10px',
                background: 'var(--gradient-emerald)',
                color: '#fff',
                fontWeight: 600,
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.35)'
              }}
            >
              <Save size={16} />
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
