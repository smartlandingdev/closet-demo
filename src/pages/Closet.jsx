import React, { useState } from 'react';

const Closet = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas', gradient: 'linear-gradient(135deg, #C2DC80, #EA9CAF)' },
    { id: 'tops', label: 'Tops', gradient: 'linear-gradient(135deg, #C2DC80, #A8C96A)' },
    { id: 'bottoms', label: 'Bottoms', gradient: 'linear-gradient(135deg, #EA9CAF, #D56989)' },
    { id: 'dresses', label: 'Vestidos', gradient: 'linear-gradient(135deg, #D56989, #B84A6B)' },
    { id: 'shoes', label: 'Calçados', gradient: 'linear-gradient(135deg, #C2DC80, #EA9CAF)' },
    { id: 'accessories', label: 'Acessórios', gradient: 'linear-gradient(135deg, #EA9CAF, #C2DC80)' }
  ];

  const items = [
    { id: 1, bgColor: '#C2DC80', name: 'Camisa Branca', category: 'tops', color: 'Branco', season: 'Todas', uses: 24 },
    { id: 2, bgColor: '#FFB5C5', name: 'Vestido Floral', category: 'dresses', color: 'Rosa', season: 'Verão', uses: 12 },
    { id: 3, bgColor: '#B4A8D3', name: 'Calça Jeans', category: 'bottoms', color: 'Azul', season: 'Todas', uses: 18 },
    { id: 4, bgColor: '#FFDAB9', name: 'Tênis Branco', category: 'shoes', color: 'Branco', season: 'Todas', uses: 30 },
    { id: 5, bgColor: '#A8C96A', name: 'Blazer', category: 'tops', color: 'Preto', season: 'Inverno', uses: 15 },
    { id: 6, bgColor: '#D56989', name: 'Bolsa Couro', category: 'accessories', color: 'Marrom', season: 'Todas', uses: 20 },
    { id: 7, bgColor: '#C2DC80', name: 'Blusa Verde', category: 'tops', color: 'Verde', season: 'Primavera', uses: 8 },
    { id: 8, bgColor: '#EA9CAF', name: 'Short Jeans', category: 'bottoms', color: 'Azul', season: 'Verão', uses: 10 }
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

        <div style={{
          background: activeC?.gradient || 'linear-gradient(135deg, #C2DC80, #EA9CAF)',
          border: 'none',
          borderRadius: '12px',
          padding: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
        }}>
          <div>
            <div style={{ fontSize: '48px', fontWeight: '800', marginBottom: '4px' }}>
              {filteredItems.length}
            </div>
            <div style={{ fontSize: '14px', opacity: 0.95, fontWeight: '600' }}>
              {activeCategory === 'all' ? 'peças no total' : 'peças nesta categoria'}
            </div>
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
              style={{
                whiteSpace: 'nowrap',
                background: isActive
                  ? category.gradient
                  : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                color: isActive ? 'white' : 'var(--color-text)',
                border: isActive ? '2px solid rgba(255, 255, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 8px 20px rgba(0, 0, 0, 0.15)' : 'none'
              }}
            >
              {category.label}
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
              style={{
                textAlign: 'center',
                padding: '16px',
                cursor: 'pointer',
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                transition: 'all 0.2s ease'
              }}
              className="closet-item-card"
            >
              {/* Uses Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'linear-gradient(135deg, #C2DC80, #A8C96A)',
                color: '#1E3309',
                borderRadius: '20px',
                padding: '5px 12px',
                fontSize: '11px',
                fontWeight: '700',
                boxShadow: '0 2px 8px rgba(194, 220, 128, 0.3)',
                zIndex: 2
              }}>
                {item.uses}x
              </div>

              {/* Item Placeholder */}
              <div style={{
                height: '140px',
                marginBottom: '16px',
                background: item.bgColor,
                borderRadius: '10px',
                opacity: 0.4
              }} />

              {/* Item Info */}
              <h3 style={{
                fontSize: '15px',
                fontWeight: '700',
                marginBottom: '12px',
                color: 'var(--color-text)'
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
                <span style={{
                  fontSize: '10px',
                  padding: '5px 10px',
                  background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.15), rgba(234, 156, 175, 0.1))',
                  borderRadius: '8px',
                  fontWeight: '600',
                  color: 'var(--color-text-secondary)'
                }}>
                  {item.color}
                </span>
                <span style={{
                  fontSize: '10px',
                  padding: '5px 10px',
                  background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.15), rgba(234, 156, 175, 0.1))',
                  borderRadius: '8px',
                  fontWeight: '600',
                  color: 'var(--color-text-secondary)'
                }}>
                  {item.season}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-xl) 0',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
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
            📦
          </div>
          <h3 style={{ marginBottom: '12px', fontSize: '20px', fontWeight: '700' }}>
            Nenhuma peça nesta categoria
          </h3>
          <p className="text-secondary" style={{ marginBottom: '24px', fontSize: '14px' }}>
            Adicione novas peças ao seu closet digital
          </p>
          <button style={{
            padding: '14px 28px',
            background: 'linear-gradient(135deg, #C2DC80, #A8C96A)',
            color: '#1E3309',
            border: 'none',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(194, 220, 128, 0.3)',
            transition: 'all 0.2s ease'
          }}>
            Adicionar primeira peça
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button className="fab" title="Adicionar nova peça">
        +
      </button>

      <style jsx>{`
        .closet-item-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-color: rgba(194, 220, 128, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Closet;
