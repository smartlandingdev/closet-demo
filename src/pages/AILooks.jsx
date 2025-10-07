import React, { useState } from 'react';

const AILooks = () => {
  const [filters, setFilters] = useState({
    occasion: 'casual',
    weather: 'sunny'
  });

  const occasions = [
    { value: 'casual', label: 'Casual', gradient: 'linear-gradient(135deg, #C2DC80, #A8C96A)' },
    { value: 'work', label: 'Trabalho', gradient: 'linear-gradient(135deg, #EA9CAF, #D56989)' },
    { value: 'party', label: 'Festa', gradient: 'linear-gradient(135deg, #D56989, #B84A6B)' },
    { value: 'sport', label: 'Esporte', gradient: 'linear-gradient(135deg, #C2DC80, #EA9CAF)' }
  ];

  const weather = [
    { value: 'sunny', label: 'Ensolarado' },
    { value: 'rainy', label: 'Chuvoso' },
    { value: 'cold', label: 'Frio' }
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
          Deixe a IA criar combinações perfeitas para você
        </p>
      </header>

      {/* Filters */}
      <section className="mb-xl">
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '700' }}>
          Ocasião
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          marginBottom: '28px'
        }}>
          {occasions.map(occ => {
            const isActive = filters.occasion === occ.value;

            return (
              <button
                key={occ.value}
                onClick={() => setFilters({ ...filters, occasion: occ.value })}
                style={{
                  background: isActive
                    ? occ.gradient
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: isActive ? '2px solid rgba(255, 255, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '12px',
                  padding: '20px 16px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  color: isActive ? 'white' : 'var(--color-text)',
                  fontWeight: '700',
                  fontSize: '14px',
                  boxShadow: isActive ? '0 8px 20px rgba(0, 0, 0, 0.15)' : 'none',
                  transition: 'all 0.2s ease'
                }}
                className="occasion-btn"
              >
                {occ.label}
              </button>
            );
          })}
        </div>

        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '700' }}>
          Clima
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {weather.map(w => {
            const isActive = filters.weather === w.value;

            return (
              <button
                key={w.value}
                onClick={() => setFilters({ ...filters, weather: w.value })}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: isActive ? '2px solid #C2DC80' : '1px solid rgba(255, 255, 255, 0.3)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(194, 220, 128, 0.15), rgba(234, 156, 175, 0.1))'
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  color: 'var(--color-text)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {w.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Look Preview - Hero Card */}
      <section className="mb-xl">
        <div
          style={{
            background: currentOccasion?.gradient,
            border: 'none',
            borderRadius: '12px',
            padding: '40px 32px',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
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

          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            Casual Chic
          </h2>

          {/* Look Items Display */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '32px',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1
          }}>
            {[
              { color: '#FFB5C5', label: 'Blusa' },
              { color: '#C2DC80', label: 'Calça' },
              { color: '#B4A8D3', label: 'Sapato' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '16px',
                  padding: '20px',
                  width: '90px',
                  height: '90px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: item.color,
                  borderRadius: '12px',
                  opacity: 0.5
                }} />
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
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: currentOccasion?.value === 'casual' ? '#1E3309' : '#EA9CAF',
                fontWeight: '700',
                padding: '14px 28px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Salvar
            </button>
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                fontWeight: '700',
                padding: '14px 28px',
                borderRadius: '12px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Gerar outro
            </button>
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                fontWeight: '700',
                padding: '14px 28px',
                borderRadius: '12px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Agendar
            </button>
          </div>
        </div>
      </section>

      {/* Try-On Section */}
      <section className="mb-xl">
        <div style={{
          padding: '32px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.2), rgba(234, 156, 175, 0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '40px'
          }}>
            👤
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>
            Experimentar Virtualmente
          </h3>
          <p className="text-secondary" style={{ marginBottom: '24px', fontSize: '14px' }}>
            Veja como ficaria esse look em você usando AR
          </p>
          <button style={{
            padding: '16px 32px',
            background: 'linear-gradient(135deg, #EA9CAF, #D56989)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(234, 156, 175, 0.3)',
            transition: 'all 0.2s ease'
          }}>
            Abrir Try-On Virtual
          </button>
        </div>
      </section>

      {/* Swipe Indicator */}
      <div style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.15), rgba(234, 156, 175, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          fontWeight: '600',
          margin: 0
        }}>
          Deslize para ver mais combinações
        </p>
      </div>

      <style jsx>{`
        .occasion-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default AILooks;
