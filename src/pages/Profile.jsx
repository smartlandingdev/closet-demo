import React from 'react';

const Profile = () => {
  const stylePreferences = [
    'Minimalista',
    'Casual',
    'Colorido',
    'Vintage',
    'Sustentável'
  ];

  const settings = [
    { label: 'Localização', value: 'São Paulo, SP' },
    { label: 'Unidade de temperatura', value: 'Celsius (°C)' },
    { label: 'Notificações', value: 'Ativadas' },
    { label: 'Integrações', value: 'Google Calendar' }
  ];

  return (
    <div className="page fade-in">
      {/* Profile Header */}
      <section className="mb-xl text-center" style={{ paddingTop: '20px' }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #C2DC80, #EA9CAF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          margin: '0 auto var(--spacing-lg)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
        }}>
          👤
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Ana Silva</h1>
        <p className="text-secondary" style={{ marginBottom: '20px', fontSize: '14px' }}>
          Membro desde Janeiro 2025
        </p>
        <button style={{
          padding: '12px 28px',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          color: 'var(--color-text)',
          transition: 'all 0.2s ease'
        }}>
          Editar perfil
        </button>
      </section>

      {/* Style Preferences */}
      <section className="mb-xl">
        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
          Preferências de estilo
        </h2>
        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div className="flex gap-sm" style={{ flexWrap: 'wrap', marginBottom: '16px' }}>
            {stylePreferences.map((style, index) => (
              <span key={index} style={{
                padding: '8px 16px',
                background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.15), rgba(234, 156, 175, 0.1))',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: '600',
                color: 'var(--color-text)'
              }}>
                {style}
              </span>
            ))}
          </div>
          <button style={{
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #C2DC80, #A8C96A)',
            color: '#1E3309',
            border: 'none',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Atualizar preferências
          </button>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-xl">
        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
          Conquistas
        </h2>
        <div className="grid grid-3">
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.3), rgba(168, 201, 106, 0.3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 10px',
              fontSize: '24px'
            }}>
              🌱
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600' }}>Eco Warrior</div>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(234, 156, 175, 0.3), rgba(213, 105, 137, 0.3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 10px',
              fontSize: '24px'
            }}>
              👗
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600' }}>Style Master</div>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.3), rgba(234, 156, 175, 0.3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 10px',
              fontSize: '24px'
            }}>
              ♻️
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600' }}>Circular Hero</div>
          </div>
        </div>
      </section>

      {/* Settings */}
      <section className="mb-xl">
        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
          Configurações
        </h2>
        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          padding: '16px'
        }}>
          {settings.map((setting, index) => (
            <div
              key={index}
              className="flex justify-between items-center"
              style={{
                padding: '14px 0',
                borderBottom: index < settings.length - 1 ? '1px solid rgba(243, 238, 241, 0.5)' : 'none'
              }}
            >
              <div>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>{setting.label}</span>
              </div>
              <div className="flex items-center gap-sm">
                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  {setting.value}
                </span>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '18px' }}>›</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="mb-xl">
        <div style={{
          background: 'linear-gradient(135deg, #C2DC80, #EA9CAF)',
          borderRadius: '12px',
          padding: '28px',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>
            Seu Impacto Ambiental
          </h3>
          <div className="grid grid-2 gap-md">
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>24.5 kg</div>
              <div style={{ fontSize: '14px', opacity: 0.95 }}>CO₂ economizado</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>12</div>
              <div style={{ fontSize: '14px', opacity: 0.95 }}>Peças reutilizadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Options */}
      <section className="mb-xl">
        <div className="flex flex-col gap-sm">
          <button style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--color-text)',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all 0.2s ease'
          }}>
            Sobre o UCloset
          </button>
          <button style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--color-text)',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all 0.2s ease'
          }}>
            Suporte e Ajuda
          </button>
          <button style={{
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--color-text)',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all 0.2s ease'
          }}>
            Termos e Privacidade
          </button>
        </div>
      </section>

      {/* Logout */}
      <section>
        <button style={{
          width: '100%',
          padding: '14px',
          backgroundColor: 'transparent',
          color: '#D56989',
          border: '2px solid #D56989',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}>
          Sair da conta
        </button>
      </section>
    </div>
  );
};

export default Profile;
