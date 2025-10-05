import React, { useState } from 'react';

const AILooks = () => {
  const [filters, setFilters] = useState({
    occasion: 'casual',
    weather: 'sunny'
  });

  const occasions = [
    { value: 'casual', label: 'Casual', icon: '👕', gradient: 'linear-gradient(135deg, #C2DC80, #A8C96A)' },
    { value: 'work', label: 'Trabalho', icon: '💼', gradient: 'linear-gradient(135deg, #EA9CAF, #D56989)' },
    { value: 'party', label: 'Festa', icon: '🎉', gradient: 'linear-gradient(135deg, #D56989, #B84A6B)' },
    { value: 'sport', label: 'Esporte', icon: '⚽', gradient: 'linear-gradient(135deg, #C2DC80, #EA9CAF)' }
  ];

  const weather = [
    { value: 'sunny', label: 'Ensolarado', icon: '☀️' },
    { value: 'rainy', label: 'Chuvoso', icon: '🌧️' },
    { value: 'cold', label: 'Frio', icon: '❄️' }
  ];

  const currentOccasion = occasions.find(o => o.value === filters.occasion);

  return (
    <div className="page fade-in">
      {/* Header */}
      <header className="mb-xl" style={{ paddingTop: '20px' }}>
        <h1 className="gradient-text" style={{ fontSize: '36px', marginBottom: '12px' }}>
          IA Looks
        </h1>
        <p className="text-secondary" style={{ fontSize: '15px' }}>
          Deixe a IA criar combinações perfeitas para você ✨
        </p>
      </header>

      {/* Filters */}
      <section className="mb-xl">
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          🎯 Ocasião
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '12px',
          marginBottom: '28px'
        }}>
          {occasions.map(occ => {
            const isActive = filters.occasion === occ.value;

            return (
              <button
                key={occ.value}
                onClick={() => setFilters({ ...filters, occasion: occ.value })}
                className="card"
                style={{
                  background: isActive ? occ.gradient : 'rgba(255, 255, 255, 0.6)',
                  border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '20px 12px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  color: isActive ? 'white' : 'var(--color-text-primary)',
                  fontWeight: isActive ? '700' : '600',
                  boxShadow: isActive ? '0 12px 32px rgba(194, 220, 128, 0.4)' : '0 4px 12px rgba(30, 51, 9, 0.08)',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{occ.icon}</div>
                <div style={{ fontSize: '13px' }}>{occ.label}</div>
              </button>
            );
          })}
        </div>

        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          🌤️ Clima
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {weather.map(w => (
            <button
              key={w.value}
              className={`btn btn-sm ${filters.weather === w.value ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilters({ ...filters, weather: w.value })}
              style={{ padding: '12px 20px', fontSize: '14px', fontWeight: '600' }}
            >
              {w.icon} {w.label}
            </button>
          ))}
        </div>
      </section>

      {/* Look Preview - Hero Card */}
      <section className="mb-xl">
        <div
          className="card glow-on-hover"
          style={{
            background: currentOccasion?.gradient,
            border: 'none',
            padding: '40px 32px',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Background Pattern */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }} />

          <h2 style={{ fontSize: '28px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            Casual Chic
          </h2>

          {/* Look Items Display */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '32px',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1
          }}>
            {['👔', '👖', '👟'].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '24px',
                  padding: '24px',
                  fontSize: '64px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)',
                  animation: `scaleIn 0.5s ${index * 0.1}s backwards`,
                  border: '2px solid rgba(255, 255, 255, 0.5)'
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <p style={{
            opacity: 0.95,
            marginBottom: '32px',
            fontSize: '15px',
            position: 'relative',
            zIndex: 1
          }}>
            Perfeito para o dia a dia
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1
          }}>
            <button
              className="btn"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: currentOccasion?.value === 'casual' ? '#C2DC80' : '#EA9CAF',
                fontWeight: '700',
                padding: '14px 28px',
                border: 'none'
              }}
            >
              ♡ Salvar
            </button>
            <button
              className="btn"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                fontWeight: '700',
                padding: '14px 28px'
              }}
            >
              🔄 Gerar outro
            </button>
            <button
              className="btn"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                fontWeight: '700',
                padding: '14px 28px'
              }}
            >
              📅 Agendar
            </button>
          </div>
        </div>
      </section>

      {/* Try-On Section */}
      <section className="mb-xl">
        <div className="card card-soft" style={{
          padding: '32px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🪞</div>
          <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>
            Experimentar Virtualmente
          </h3>
          <p className="text-secondary" style={{ marginBottom: '24px', fontSize: '14px' }}>
            Veja como ficaria esse look em você usando AR
          </p>
          <button className="btn btn-accent btn-lg" style={{ padding: '16px 32px' }}>
            ✨ Abrir Try-On Virtual
          </button>
        </div>
      </section>

      {/* Swipe Indicator */}
      <div style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.1), rgba(234, 156, 175, 0.1))',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          fontWeight: '600',
          margin: 0
        }}>
          👈 Deslize para ver mais combinações 👉
        </p>
      </div>
    </div>
  );
};

export default AILooks;
