import React from 'react';

const Statistics = () => {
  const topItems = [
    { emoji: '👔', name: 'Camisa Branca', uses: 24 },
    { emoji: '👖', name: 'Calça Jeans', uses: 18 },
    { emoji: '👟', name: 'Tênis Branco', uses: 15 },
    { emoji: '🧥', name: 'Blazer Preto', uses: 12 },
    { emoji: '👜', name: 'Bolsa Couro', uses: 10 }
  ];

  const idleItems = [
    { emoji: '👗', name: 'Vestido Festa', days: 127 },
    { emoji: '🥿', name: 'Sapatilha Rosa', days: 98 },
    { emoji: '🧣', name: 'Cachecol', days: 86 }
  ];

  const colorDistribution = [
    { color: 'Preto', percentage: 35, bgColor: '#1E3309' },
    { color: 'Branco', percentage: 25, bgColor: '#F3EEF1' },
    { color: 'Azul', percentage: 20, bgColor: '#6B9BD1' },
    { color: 'Verde', percentage: 12, bgColor: '#C2DC80' },
    { color: 'Rosa', percentage: 8, bgColor: '#EA9CAF' }
  ];

  return (
    <div className="page fade-in">
      {/* Header */}
      <header className="mb-xl">
        <h1 className="mb-sm">Estatísticas</h1>
        <p className="text-secondary">
          Entenda melhor seu guarda-roupa e seus hábitos
        </p>
      </header>

      {/* KPIs */}
      <section className="mb-xl">
        <div className="grid grid-3">
          <div className="card card-soft text-center">
            <div className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
              48
            </div>
            <div className="text-sm text-secondary">Total de peças</div>
          </div>

          <div className="card card-soft text-center">
            <div className="text-xl font-bold" style={{ color: 'var(--color-blush)' }}>
              R$ 8,50
            </div>
            <div className="text-sm text-secondary">Custo por uso</div>
          </div>

          <div className="card card-soft text-center">
            <div className="text-xl font-bold" style={{ color: 'var(--color-accent)' }}>
              72%
            </div>
            <div className="text-sm text-secondary">Taxa de uso</div>
          </div>
        </div>
      </section>

      {/* Insight Card */}
      <section className="mb-xl">
        <div className="card" style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          color: 'white'
        }}>
          <div className="flex items-center gap-md">
            <div style={{ fontSize: '48px' }}>💰</div>
            <div>
              <h3 className="mb-sm">Economia do mês</h3>
              <p style={{ opacity: 0.9 }}>
                Você economizou <strong>R$ 450</strong> reutilizando peças que já tinha!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 Most Used */}
      <section className="mb-xl">
        <h2 className="mb-md">🏆 Peças mais usadas</h2>
        <div className="card">
          {topItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
              style={{
                padding: 'var(--spacing-md) 0',
                borderBottom: index < topItems.length - 1 ? '1px solid var(--color-magnolia)' : 'none'
              }}
            >
              <div className="flex items-center gap-md">
                <div className="font-bold text-secondary" style={{ width: '24px' }}>
                  #{index + 1}
                </div>
                <div style={{ fontSize: '32px' }}>{item.emoji}</div>
                <div>{item.name}</div>
              </div>
              <div className="badge badge-primary">
                {item.uses}x
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Distribution */}
      <section className="mb-xl">
        <h2 className="mb-md">🎨 Cores no seu closet</h2>
        <div className="card">
          {colorDistribution.map((item, index) => (
            <div key={index} className="mb-md">
              <div className="flex justify-between mb-sm text-sm">
                <span className="font-medium">{item.color}</span>
                <span className="text-secondary">{item.percentage}%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'var(--color-magnolia)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${item.percentage}%`,
                  height: '100%',
                  backgroundColor: item.bgColor,
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Idle Items */}
      <section className="mb-xl">
        <h2 className="mb-md">😴 Peças ociosas (+ de 90 dias)</h2>
        <div className="card card-soft">
          {idleItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
              style={{
                padding: 'var(--spacing-md) 0',
                borderBottom: index < idleItems.length - 1 ? '1px solid #ffffff' : 'none'
              }}
            >
              <div className="flex items-center gap-md">
                <div style={{ fontSize: '32px' }}>{item.emoji}</div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-secondary">{item.days} dias sem uso</div>
                </div>
              </div>
              <button className="btn btn-sm btn-secondary">
                Vender
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <button className="btn btn-accent" style={{ width: '100%' }}>
          ♻️ Doe ou venda peças ociosas
        </button>
      </section>
    </div>
  );
};

export default Statistics;
