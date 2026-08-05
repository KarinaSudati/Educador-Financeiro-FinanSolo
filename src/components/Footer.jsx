import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '36px 0',
      marginTop: '40px',
      textAlign: 'center',
      background: 'rgba(9, 13, 22, 0.6)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={18} color="var(--accent-emerald)" />
          <strong style={{ fontSize: '1rem', color: '#fff' }}>
            FinanSolo
          </strong>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            • Educador Financeiro Inteligente para CLT Solo
          </span>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.5 }}>
          Desenvolvido como solução interativa de educação financeira digital. Zero economiquês, foco em metas reais de economia e na conquista de viagens.
        </p>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
          © {new Date().getFullYear()} FinanSolo • Feito com <Heart size={12} color="#F43F5E" style={{ display: 'inline', verticalAlign: 'middle' }} /> para quem mora sozinho e quer conquistar sua independência.
        </p>
      </div>
    </footer>
  );
}
