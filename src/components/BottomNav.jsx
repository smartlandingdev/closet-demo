import React from 'react';
import { IconHome, IconCommunity, IconShop, IconSparkles, IconUser } from './Icons';

const BottomNav = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', Icon: IconHome },
    { id: 'marketplace', label: 'Brechó', Icon: IconShop },
    { id: 'ai-looks', label: 'IA Looks', Icon: IconSparkles },
    { id: 'profile', label: 'Perfil', Icon: IconUser }
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-items">
        {navItems.map(item => {
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <item.Icon
                size={22}
                color={isActive ? '#C2DC80' : 'var(--color-text-secondary)'}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
