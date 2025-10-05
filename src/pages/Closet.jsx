import React, { useState } from 'react';

const Closet = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas', icon: '✨', gradient: 'linear-gradient(135deg, #C2DC80, #EA9CAF)' },
    { id: 'tops', label: 'Tops', icon: '👔', gradient: 'linear-gradient(135deg, #C2DC80, #A8C96A)' },
    { id: 'bottoms', label: 'Bottoms', icon: '👖', gradient: 'linear-gradient(135deg, #EA9CAF, #D56989)' },
    { id: 'dresses', label: 'Vestidos', icon: '👗', gradient: 'linear-gradient(135deg, #D56989, #B84A6B)' },
    { id: 'shoes', label: 'Calçados', icon: '👟', gradient: 'linear-gradient(135deg, #C2DC80, #EA9CAF)' },
    { id: 'accessories', label: 'Acessórios', icon: '👜', gradient: 'linear-gradient(135deg, #EA9CAF, #C2DC80)' }
  ];

  const items = [
    { id: 1, emoji: '👔', name: 'Camisa Branca', category: 'tops', color: 'Branco', season: 'Todas', uses: 24 },
    { id: 2, emoji: '👗', name: 'Vestido Floral', category: 'dresses', color: 'Rosa', season: 'Verão', uses: 12 },
    { id: 3, emoji: '👖', name: 'Calça Jeans', category: 'bottoms', color: 'Azul', season: 'Todas', uses: 18 },
    { id: 4, emoji: '👟', name: 'Tênis Branco', category: 'shoes', color: 'Branco', season: 'Todas', uses: 30 },
    { id: 5, emoji: '🧥', name: 'Blazer', category: 'tops', color: 'Preto', season: 'Inverno', uses: 15 },
    { id: 6, emoji: '👜', name: 'Bolsa Couro', category: 'accessories', color: 'Marrom', season: 'Todas', uses: 20 },
    { id: 7, emoji: '👚', name: 'Blusa Verde', category: 'tops', color: 'Verde', season: 'Primavera', uses: 8 },
    { id: 8, emoji: '🩳', name: 'Short Jeans', category: 'bottoms', color: 'Azul', season: 'Verão', uses: 10 }
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  const activeC = categories.find(c => c.id === activeCategory);

  return (
    <div className="page fade-in">
      {/* Header com Stats */}
      <header className="mb-lg" style={{ paddingTop: '20px' }}>
        <h1 className="gradient-text" style={{ fontSize: '36px', marginBottom: '16px' }}>
          Meu Closet Digital
        </h1>

        <div className="card" style={{
          background: activeC?.gradient || 'linear-gradient(135deg, #C2DC80, #EA9CAF)',
          border: 'none',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white'
        }}>
          <div>
            <div style={{ fontSize: '40px', fontWeight: '800', marginBottom: '4px' }}>
              {filteredItems.length}
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              {activeCategory === 'all' ? 'peças no total' : 'peças nesta categoria'}
            </div>
          </div>
          <div style={{
            fontSize: '64px',
            opacity: 0.3
          }}>
            {activeC?.icon || '✨'}
          </div>
        </div>
      </header>

      {/* Category Filters - Horizontal Scroll */}
      <div style={{
        display: 'flex',
        gap: '10px',
        overflowX: 'auto',
        marginBottom: '32px',
        paddingBottom: '8px',
        scrollbarWidth: 'thin'
      }}>
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`btn btn-sm ${isActive ? '' : 'btn-secondary'}`}
              style={{
                whiteSpace: 'nowrap',
                background: isActive ? category.gradient : 'transparent',
                color: isActive ? 'white' : 'var(--color-secondary)',
                border: isActive ? 'none' : '2px solid var(--color-secondary)',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: '600',
                boxShadow: isActive ? '0 8px 24px rgba(194, 220, 128, 0.3)' : 'none'
              }}
            >
              {category.icon} {category.label}
            </button>
          );
        })}
      </div>

      {/* Items Grid with Animations */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-2" style={{ paddingBottom: '40px' }}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="card glow-on-hover"
              style={{
                textAlign: 'center',
                padding: '24px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'visible'
              }}
            >
              {/* Uses Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'linear-gradient(135deg, #C2DC80, #A8C96A)',
                color: '#1E3309',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '11px',
                fontWeight: '700',
                boxShadow: '0 4px 12px rgba(194, 220, 128, 0.3)'
              }}>
                {item.uses}x
              </div>

              {/* Item Emoji */}
              <div style={{
                fontSize: '80px',
                marginBottom: '16px',
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))',
                transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
              }}>
                {item.emoji}
              </div>

              {/* Item Info */}
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '12px',
                color: 'var(--color-text-primary)'
              }}>
                {item.name}
              </h3>

              {/* Tags */}
              <div style={{
                display: 'flex',
                gap: '6px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <span className="badge" style={{
                  fontSize: '10px',
                  padding: '4px 10px'
                }}>
                  {item.color}
                </span>
                <span className="badge" style={{
                  fontSize: '10px',
                  padding: '4px 10px'
                }}>
                  {item.season}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>
            Nenhuma peça nesta categoria
          </h3>
          <p className="text-secondary" style={{ marginBottom: '24px' }}>
            Adicione novas peças ao seu closet digital
          </p>
          <button className="btn btn-primary">
            + Adicionar primeira peça
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button className="fab" title="Adicionar nova peça">
        +
      </button>

      <style jsx>{`
        .card:hover div:nth-child(2) {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </div>
  );
};

export default Closet;
