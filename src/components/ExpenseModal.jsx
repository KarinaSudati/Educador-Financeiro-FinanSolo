import React, { useState } from 'react';
import { X, Plus, DollarSign, Tag, Calendar, AlertCircle } from 'lucide-react';

export default function ExpenseModal({ isOpen, onClose, onAddExpense }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('livre');
  const [date, setDate] = useState('Dia Hoje');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;

    onAddExpense({
      id: Date.now(),
      name,
      amount: Number(amount),
      category,
      date
    });

    setName('');
    setAmount('');
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
        maxWidth: '480px',
        padding: '28px',
        background: 'rgba(30, 41, 59, 0.95)'
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
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>+ Adicionar Novo Gasto</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Teste como essa despesa afeta sua caixinha e a viagem.
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
              Descrição do Gasto (Ex: Ifood, Uber, Mercado)
            </label>
            <input
              type="text"
              placeholder="Ex: Hambúrguer Artesanal ou Internet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Valor (R$)
              </label>
              <div style={{ position: 'relative' }}>
                <DollarSign size={18} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--accent-emerald)' }} />
                <input
                  type="number"
                  placeholder="0,00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 36px',
                    borderRadius: '10px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  min="1"
                  step="0.5"
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Dia do Mês
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Caixinha (Regra 50 / 30 / 20 CLT)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setCategory('fixas')}
                style={{
                  padding: '10px 8px',
                  borderRadius: '10px',
                  border: `2px solid ${category === 'fixas' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.08)'}`,
                  background: category === 'fixas' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(15, 23, 42, 0.5)',
                  color: category === 'fixas' ? '#fff' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                🏠 Contas Fixas (50%)
              </button>

              <button
                type="button"
                onClick={() => setCategory('livre')}
                style={{
                  padding: '10px 8px',
                  borderRadius: '10px',
                  border: `2px solid ${category === 'livre' ? 'var(--accent-amber)' : 'rgba(255,255,255,0.08)'}`,
                  background: category === 'livre' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(15, 23, 42, 0.5)',
                  color: category === 'livre' ? '#fff' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                🍕 Vida Livre (30%)
              </button>

              <button
                type="button"
                onClick={() => setCategory('meta')}
                style={{
                  padding: '10px 8px',
                  borderRadius: '10px',
                  border: `2px solid ${category === 'meta' ? 'var(--accent-emerald)' : 'rgba(255,255,255,0.08)'}`,
                  background: category === 'meta' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.5)',
                  color: category === 'meta' ? '#fff' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                ✈️ Viagem (20%)
              </button>
            </div>
          </div>

          {category === 'livre' && (
            <div style={{
              padding: '12px',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <AlertCircle size={18} color="var(--accent-amber)" />
              <span style={{ fontSize: '0.8rem', color: '#FCD34D' }}>
                Lembre-se: Gastos na caixinha <strong>Vida Livre</strong> competem diretamente com pequenas facilidades da sua rotina solo.
              </span>
            </div>
          )}

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
              <Plus size={16} />
              Registrar Despesa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
