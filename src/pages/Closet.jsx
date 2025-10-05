import React, { useState } from 'react';

const Closet = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas', icon: '👕' },
    { id: 'tops', label: 'Tops', icon: '👔' },
    { id: 'bottoms', label: 'Bottoms', icon: '👖' },
    { id: 'dresses', label: 'Vestidos', icon: '👗' },
    { id: 'shoes', label: 'Calçados', icon: '👟' },
    { id: 'accessories', label: 'Acessórios', icon: '👜' }
  ];

  const items = [
    { id: 1, emoji: '👔', name: 'Camisa Branca', category: 'tops', color: 'Branco', season: 'Todas' },
    { id: 2, emoji: '👗', name: 'Vestido Floral', category: 'dresses', color: 'Rosa', season: 'Verão' },
    { id: 3, emoji: '👖', name: 'Calça Jeans', category: 'bottoms', color: 'Azul', season: 'Todas' },
    { id: 4, emoji: '👟', name: 'Tênis Branco', category: 'shoes', color: 'Branco', season: 'Todas' },
    { id: 5, emoji: '🧥', name: 'Blazer', category: 'tops', color: 'Preto', season: 'Inverno' },
    { id: 6, emoji: '👜', name: 'Bolsa Couro', category: 'accessories', color: 'Marrom', season: 'Todas' },
    { id: 7, emoji: '👚', name: 'Blusa Verde', category: 'tops', color: 'Verde', season: 'Primavera' },
    { id: 8, emoji: '🩳', name: 'Short Jeans', category: 'bottoms', color: 'Azul', season: 'Verão' }
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="page fade-in">
      {/* Header */}
      <header className="mb-lg">
        <h1>Meu Closet</h1>
        <p className="text-secondary">{items.length} peças cadastradas</p>
      </header>

      {/* Category Filters */}
      <div style={{
        display: 'flex',
        gap: 'var(--spacing-sm)',
        overflowX: 'auto',
        marginBottom: 'var(--spacing-xl)',
        paddingBottom: 'var(--spacing-sm)'
      }}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`btn btn-sm ${activeCategory === category.id ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveCategory(category.id)}
            style={{ whiteSpace: 'nowrap' }}
          >
            {category.icon} {category.label}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-3">
          {filteredItems.map(item => (
            <div key={item.id} className="card" style={{ textAlign: 'center', padding: 'var(--spacing-md)' }}>
              <div style={{
                fontSize: '48px',
                marginBottom: 'var(--spacing-sm)'
              }}>
                {item.emoji}
              </div>
              <h3 className="text-sm font-medium mb-sm">{item.name}</h3>
              <div className="flex gap-sm" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                <span className="badge" style={{ fontSize: '10px' }}>{item.color}</span>
                <span className="badge" style={{ fontSize: '10px' }}>{item.season}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">👗</div>
          <h3 className="mb-sm">Nenhuma peça nesta categoria</h3>
          <p className="text-secondary">Adicione novas peças ao seu closet</p>
        </div>
      )}

      {/* Floating Action Button */}
      <button className="fab" title="Adicionar nova peça">
        <span style={{ fontSize: '24px' }}>+</span>
      </button>
    </div>
  );
};

export default Closet;
