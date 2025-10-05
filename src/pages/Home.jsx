import React from 'react';

const Home = () => {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  const outfitOfTheDay = {
    image: '👔',
    description: 'Casual Chic'
  };

  return (
    <div className="page fade-in">
      {/* Header */}
      <header className="mb-xl">
        <h1 className="mb-sm">Oi, Ana! 👋</h1>
        <div className="flex items-center gap-md text-secondary">
          <span>📅 {today}</span>
          <span>🌤️ 24°C</span>
        </div>
      </header>

      {/* Look Sugerido */}
      <section className="mb-xl">
        <h2 className="mb-md">Look sugerido para hoje</h2>
        <div className="card card-soft">
          <div className="flex items-center gap-lg">
            <div style={{
              fontSize: '80px',
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {outfitOfTheDay.image}
            </div>
            <div className="flex-1">
              <h3 className="mb-sm">{outfitOfTheDay.description}</h3>
              <p className="text-secondary mb-md">
                Perfeito para um dia tranquilo no escritório
              </p>
              <button className="btn btn-primary">
                Usar esse look
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sua Semana */}
      <section className="mb-xl">
        <h2 className="mb-md">Sua semana</h2>
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-md)',
          overflowX: 'auto',
          paddingBottom: 'var(--spacing-sm)'
        }}>
          {weekDays.map((day, index) => (
            <div
              key={day}
              className="card"
              style={{
                minWidth: '80px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: index === 0 ? 'var(--color-primary)' : 'white'
              }}
            >
              <div className="text-sm font-medium mb-sm">{day}</div>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                {index === 0 ? '👔' : index === 1 ? '👗' : ''}
              </div>
              <div className="text-xs text-secondary">
                {index === 0 ? 'Planejado' : index === 1 ? 'Planejado' : 'Vazio'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="mb-xl">
        <div className="card" style={{
          backgroundColor: 'var(--color-blush)',
          color: 'white'
        }}>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold mb-sm">💡 Insight da semana</div>
              <p style={{ opacity: 0.9 }}>
                3 peças sem uso há 2 meses
              </p>
            </div>
            <button className="btn" style={{
              backgroundColor: 'white',
              color: 'var(--color-blush)'
            }}>
              Ver mais
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <button className="btn btn-accent" style={{ width: '100%' }}>
          ✨ Criar novo look com IA
        </button>
      </section>
    </div>
  );
};

export default Home;
