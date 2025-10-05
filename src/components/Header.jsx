import React from 'react';
import { IconSettings, IconBell } from './Icons';

const Header = ({ userName = "Ana Silva", hasNotifications = true }) => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(194, 220, 128, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* User Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #C2DC80, #EA9CAF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: '700',
          color: 'white',
          boxShadow: '0 4px 12px rgba(194, 220, 128, 0.3)',
          border: '2px solid white'
        }}>
          A
        </div>
        <div>
          <div style={{
            fontSize: '16px',
            fontWeight: '700',
            color: 'var(--color-text-primary)',
            marginBottom: '2px'
          }}>
            Olá, {userName.split(' ')[0]}!
          </div>
          <div style={{
            fontSize: '13px',
            color: 'var(--color-text-secondary)'
          }}>
            Bem-vinda de volta
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Notifications Button */}
        <button style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          border: 'none',
          background: 'rgba(234, 156, 175, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.2s ease'
        }}>
          <IconBell size={20} color="#EA9CAF" />
          {hasNotifications && (
            <div style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#D56989',
              border: '2px solid white'
            }} />
          )}
        </button>

        {/* Settings Button */}
        <button style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          border: 'none',
          background: 'rgba(194, 220, 128, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}>
          <IconSettings size={20} color="#C2DC80" />
        </button>
      </div>
    </header>
  );
};

export default Header;
