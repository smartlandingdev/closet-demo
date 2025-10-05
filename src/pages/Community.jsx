import React from 'react';
import Header from '../components/Header';
import { IconHeart, IconHistory } from '../components/Icons';

const Community = () => {
  const posts = [
    { id: 1, user: 'Maria Costa', avatar: 'M', look: 'Casual Chic', likes: 42, time: '2h' },
    { id: 2, user: 'Julia Santos', avatar: 'J', look: 'Office Style', likes: 38, time: '4h' },
    { id: 3, user: 'Carla Lima', avatar: 'C', look: 'Weekend Vibes', likes: 51, time: '1d' }
  ];

  return (
    <div style={{ paddingBottom: '0' }}>
      <Header />
      <div className="page fade-in" style={{ paddingTop: '0' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '24px', marginTop: '24px' }}>
          Feed da Comunidade
        </h2>

        <div style={{ display: 'grid', gap: '16px' }}>
          {posts.map(post => (
            <div key={post.id} className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #D56989, #EA9CAF)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700'
                }}>
                  {post.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>{post.user}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{post.time} atrás</div>
                </div>
              </div>

              <div style={{
                height: '280px',
                background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.1), rgba(234, 156, 175, 0.1))',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                fontSize: '64px'
              }}>
                👗
              </div>

              <div style={{ fontWeight: '600', marginBottom: '12px' }}>{post.look}</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#D56989'
                }}>
                  <IconHeart size={20} color="#D56989" />
                  {post.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
