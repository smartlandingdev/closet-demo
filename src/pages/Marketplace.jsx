import React, { useState } from 'react';

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('explore');

  const products = [
    {
      id: 1,
      color: '#FFB5C5',
      name: 'Vestido Floral Vintage',
      price: 'R$ 89',
      location: 'São Paulo, SP',
      distance: '2km',
      sustainability: '3.2 kg CO₂ economizado'
    },
    {
      id: 2,
      color: '#C2DC80',
      name: 'Blazer Oversized',
      price: 'R$ 120',
      location: 'São Paulo, SP',
      distance: '5km',
      sustainability: '4.5 kg CO₂ economizado'
    },
    {
      id: 3,
      color: '#B4A8D3',
      name: 'Tênis Retrô',
      price: 'R$ 150',
      location: 'São Paulo, SP',
      distance: '8km',
      sustainability: '5.8 kg CO₂ economizado'
    },
    {
      id: 4,
      color: '#FFDAB9',
      name: 'Bolsa de Couro',
      price: 'R$ 200',
      location: 'São Paulo, SP',
      distance: '3km',
      sustainability: '6.2 kg CO₂ economizado'
    }
  ];

  const tabs = [
    { id: 'explore', label: 'Explorar' },
    { id: 'selling', label: 'Vendendo' },
    { id: 'trading', label: 'Trocar' },
    { id: 'favorites', label: 'Favoritos' }
  ];

  return (
    <div className="page fade-in">
      {/* Header */}
      <header className="mb-lg">
        <h1 className="mb-sm">Brechó Sustentável</h1>
        <p className="text-secondary">
          Compre, venda, troque ou doe peças com consciência
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-sm mb-xl">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: activeTab === tab.id ? '2px solid #C2DC80' : '1px solid rgba(255, 255, 255, 0.3)',
              background: activeTab === tab.id
                ? 'linear-gradient(135deg, rgba(194, 220, 128, 0.15), rgba(234, 156, 175, 0.1))'
                : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              color: activeTab === tab.id ? 'var(--color-text)' : 'var(--color-text-secondary)',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: activeTab === tab.id ? '700' : '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="mb-xl">
        <input
          type="text"
          placeholder="Buscar por peça, marca ou categoria..."
          style={{
            marginBottom: 'var(--spacing-md)',
            padding: '14px 16px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            width: '100%',
            fontSize: '14px',
            fontWeight: '500'
          }}
        />
        <div className="flex gap-sm" style={{ overflowX: 'auto', paddingBottom: 'var(--spacing-xs)' }}>
          <button style={{
            padding: '10px 18px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            color: 'var(--color-text)',
            transition: 'all 0.2s ease'
          }}>
            Próximo de mim
          </button>
          <button style={{
            padding: '10px 18px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            color: 'var(--color-text)',
            transition: 'all 0.2s ease'
          }}>
            Preço
          </button>
          <button style={{
            padding: '10px 18px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            color: 'var(--color-text)',
            transition: 'all 0.2s ease'
          }}>
            Tamanho
          </button>
          <button style={{
            padding: '10px 18px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            color: 'var(--color-text)',
            transition: 'all 0.2s ease'
          }}>
            Categoria
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {activeTab === 'explore' && (
        <div className="grid grid-2">
          {products.map(product => (
            <div key={product.id} style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }} className="product-card">
              <div style={{
                height: '140px',
                marginBottom: '12px',
                background: product.color,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.4
              }}>
              </div>

              <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>
                {product.name}
              </h3>

              <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#EA9CAF' }}>
                  {product.price}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                  {product.distance}
                </span>
              </div>

              <div style={{
                fontSize: '10px',
                padding: '6px 10px',
                background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.15), rgba(234, 156, 175, 0.1))',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--color-text-secondary)'
              }}>
                {product.sustainability}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'selling' && (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--color-magnolia)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--spacing-lg)',
            fontSize: '32px'
          }}>
            💰
          </div>
          <h3 className="mb-sm">Comece a vender</h3>
          <p className="text-secondary mb-xl">
            Transforme peças que você não usa mais em dinheiro e ajude o meio ambiente
          </p>
          <button className="btn btn-primary" style={{ width: '100%', padding: 'var(--spacing-md)' }}>
            Anunciar primeira peça
          </button>
        </div>
      )}

      {activeTab === 'trading' && (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--color-magnolia)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--spacing-lg)',
            fontSize: '32px'
          }}>
            🔄
          </div>
          <h3 className="mb-sm">Comece a trocar</h3>
          <p className="text-secondary mb-xl">
            Troque peças que você não usa mais por outras que você ama sem gastar nada
          </p>
          <button className="btn btn-primary" style={{ width: '100%', padding: 'var(--spacing-md)' }}>
            Oferecer primeira peça
          </button>
        </div>
      )}

      {activeTab === 'favorites' && (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--color-magnolia)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--spacing-lg)',
            fontSize: '32px'
          }}>
            ♡
          </div>
          <h3 className="mb-sm">Nenhum favorito ainda</h3>
          <p className="text-secondary">
            Salve peças que você gostou para revisar depois
          </p>
        </div>
      )}

      {/* Impact Banner */}
      {activeTab === 'explore' && (
        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: '24px',
          background: 'linear-gradient(135deg, #C2DC80, #EA9CAF)',
          borderRadius: '12px',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
            Seu Impacto
          </h3>
          <p style={{ fontSize: '14px', opacity: 0.95 }}>
            Ao comprar no brechó, você já economizou <strong>24.5 kg de CO₂</strong> este mês!
          </p>
        </div>
      )}

      <style jsx>{`
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-color: rgba(194, 220, 128, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Marketplace;
