import React, { useState } from 'react';

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('explore');

  const products = [
    {
      id: 1,
      emoji: '👗',
      name: 'Vestido Floral Vintage',
      price: 'R$ 89',
      location: 'São Paulo, SP',
      distance: '2km',
      sustainability: '3.2 kg CO₂ economizado'
    },
    {
      id: 2,
      emoji: '🧥',
      name: 'Blazer Oversized',
      price: 'R$ 120',
      location: 'São Paulo, SP',
      distance: '5km',
      sustainability: '4.5 kg CO₂ economizado'
    },
    {
      id: 3,
      emoji: '👟',
      name: 'Tênis Retrô',
      price: 'R$ 150',
      location: 'São Paulo, SP',
      distance: '8km',
      sustainability: '5.8 kg CO₂ economizado'
    },
    {
      id: 4,
      emoji: '👜',
      name: 'Bolsa de Couro',
      price: 'R$ 200',
      location: 'São Paulo, SP',
      distance: '3km',
      sustainability: '6.2 kg CO₂ economizado'
    }
  ];

  const tabs = [
    { id: 'explore', label: 'Explorar', icon: '🔍' },
    { id: 'selling', label: 'Vendendo', icon: '💰' },
    { id: 'favorites', label: 'Favoritos', icon: '♡' }
  ];

  return (
    <div className="page fade-in">
      {/* Header */}
      <header className="mb-lg">
        <h1 className="mb-sm">Brechó Sustentável</h1>
        <p className="text-secondary">
          Compre, venda ou doe peças com consciência
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-sm mb-xl">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab(tab.id)}
            style={{ flex: 1 }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="mb-xl">
        <input
          type="text"
          placeholder="🔍 Buscar por peça, marca ou categoria..."
          style={{ marginBottom: 'var(--spacing-md)' }}
        />
        <div className="flex gap-sm" style={{ overflowX: 'auto' }}>
          <button className="btn btn-sm btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            📍 Próximo de mim
          </button>
          <button className="btn btn-sm btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            💵 Preço
          </button>
          <button className="btn btn-sm btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            📏 Tamanho
          </button>
          <button className="btn btn-sm btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            🎨 Categoria
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {activeTab === 'explore' && (
        <div className="grid grid-2">
          {products.map(product => (
            <div key={product.id} className="card">
              <div style={{
                fontSize: '64px',
                textAlign: 'center',
                marginBottom: 'var(--spacing-md)',
                background: 'var(--color-magnolia)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-lg)'
              }}>
                {product.emoji}
              </div>

              <h3 className="text-sm font-semibold mb-sm">{product.name}</h3>

              <div className="flex justify-between items-center mb-sm">
                <span className="font-bold" style={{ color: 'var(--color-blush)' }}>
                  {product.price}
                </span>
                <span className="text-xs text-secondary">
                  📍 {product.distance}
                </span>
              </div>

              <div className="badge badge-primary" style={{ fontSize: '10px', width: '100%', justifyContent: 'center' }}>
                ♻️ {product.sustainability}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'selling' && (
        <div className="empty-state">
          <div className="empty-state-icon">💰</div>
          <h3 className="mb-sm">Nenhuma venda ativa</h3>
          <p className="text-secondary mb-lg">
            Comece a vender peças que você não usa mais
          </p>
          <button className="btn btn-primary">
            Anunciar peça
          </button>
        </div>
      )}

      {activeTab === 'favorites' && (
        <div className="empty-state">
          <div className="empty-state-icon">♡</div>
          <h3 className="mb-sm">Nenhum favorito ainda</h3>
          <p className="text-secondary">
            Salve peças que você gostou para ver depois
          </p>
        </div>
      )}

      {/* Impact Banner */}
      {activeTab === 'explore' && (
        <div className="card mt-xl" style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 className="mb-sm">🌍 Seu Impacto</h3>
          <p style={{ opacity: 0.9 }}>
            Ao comprar no brechó, você já economizou <strong>24.5 kg de CO₂</strong> este mês!
          </p>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
