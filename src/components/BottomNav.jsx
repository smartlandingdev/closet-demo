import React from 'react';

const BottomNav = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'closet', label: 'Closet', icon: '👗' },
    { id: 'ai-looks', label: 'IA Looks', icon: '✨' },
    { id: 'marketplace', label: 'Brechó', icon: '🛍️' },
    { id: 'profile', label: 'Perfil', icon: '👤' }
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-items">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`bottom-nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
