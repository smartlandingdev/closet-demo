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
    { icon: '📍', label: 'Localização', value: 'São Paulo, SP' },
    { icon: '🌡️', label: 'Unidade de temperatura', value: 'Celsius (°C)' },
    { icon: '🔔', label: 'Notificações', value: 'Ativadas' },
    { icon: '🔗', label: 'Integrações', value: 'Google Calendar' }
  ];

  return (
    <div className="page fade-in">
      {/* Profile Header */}
      <section className="mb-xl text-center">
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          margin: '0 auto var(--spacing-lg)'
        }}>
          👤
        </div>
        <h1 className="mb-sm">Ana Silva</h1>
        <p className="text-secondary mb-md">
          Membro desde Janeiro 2025
        </p>
        <button className="btn btn-secondary btn-sm">
          Editar perfil
        </button>
      </section>

      {/* Style Preferences */}
      <section className="mb-xl">
        <h2 className="mb-md">🎨 Preferências de estilo</h2>
        <div className="card card-soft">
          <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
            {stylePreferences.map((style, index) => (
              <span key={index} className="badge badge-primary">
                {style}
              </span>
            ))}
          </div>
          <button className="btn btn-secondary btn-sm mt-md" style={{ width: '100%' }}>
            Atualizar preferências
          </button>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-xl">
        <h2 className="mb-md">🏆 Conquistas</h2>
        <div className="grid grid-3">
          <div className="card text-center">
            <div style={{ fontSize: '32px', marginBottom: 'var(--spacing-sm)' }}>🌱</div>
            <div className="text-xs font-medium">Eco Warrior</div>
          </div>
          <div className="card text-center">
            <div style={{ fontSize: '32px', marginBottom: 'var(--spacing-sm)' }}>👗</div>
            <div className="text-xs font-medium">Style Master</div>
          </div>
          <div className="card text-center">
            <div style={{ fontSize: '32px', marginBottom: 'var(--spacing-sm)' }}>♻️</div>
            <div className="text-xs font-medium">Circular Hero</div>
          </div>
        </div>
      </section>

      {/* Settings */}
      <section className="mb-xl">
        <h2 className="mb-md">⚙️ Configurações</h2>
        <div className="card">
          {settings.map((setting, index) => (
            <div
              key={index}
              className="flex justify-between items-center"
              style={{
                padding: 'var(--spacing-md) 0',
                borderBottom: index < settings.length - 1 ? '1px solid var(--color-magnolia)' : 'none'
              }}
            >
              <div className="flex items-center gap-md">
                <span style={{ fontSize: '24px' }}>{setting.icon}</span>
                <span className="font-medium">{setting.label}</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="text-sm text-secondary">{setting.value}</span>
                <span style={{ color: 'var(--color-text-secondary)' }}>›</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="mb-xl">
        <div className="card" style={{
          background: 'linear-gradient(135deg, var(--color-spring-bud), var(--color-charm-pink))',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 className="mb-md">🌍 Seu Impacto Ambiental</h3>
          <div className="grid grid-2 gap-md">
            <div>
              <div className="text-xl font-bold mb-sm">24.5 kg</div>
              <div className="text-sm" style={{ opacity: 0.9 }}>CO₂ economizado</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-sm">12</div>
              <div className="text-sm" style={{ opacity: 0.9 }}>Peças reutilizadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Options */}
      <section className="mb-xl">
        <div className="flex flex-col gap-sm">
          <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
            ℹ️ Sobre o Closetly
          </button>
          <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
            💬 Suporte e Ajuda
          </button>
          <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
            📄 Termos e Privacidade
          </button>
        </div>
      </section>

      {/* Logout */}
      <section>
        <button className="btn" style={{
          width: '100%',
          backgroundColor: 'transparent',
          color: 'var(--color-secondary)',
          border: '2px solid var(--color-secondary)'
        }}>
          Sair da conta
        </button>
      </section>
    </div>
  );
};

export default Profile;
