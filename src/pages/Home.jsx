import React from 'react';
import Header from '../components/Header';
import {
  IconUpload, IconSparkles, IconCalendar, IconCloset,
  IconChevronRight, IconHistory, IconShirt, IconPants,
  IconShoe, IconDress, IconJacket, IconBag, IconHanger
} from '../components/Icons';

const Home = ({ onNavigate }) => {
  const weekDays = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];
  const currentDay = new Date().getDay();

  const scheduledLooks = [
    { day: 0, Icon: IconShirt, name: 'Office' },
    { day: 1, Icon: IconDress, name: 'Casual' },
    { day: 2, Icon: IconJacket, name: 'Chic' },
    null,
    null,
    null,
    null
  ];

  const pastLooks = [
    {
      id: 1,
      date: '15 Set',
      icons: [IconShirt, IconPants, IconShoe],
      name: 'Business Casual',
      uses: 5
    },
    {
      id: 2,
      date: '10 Set',
      icons: [IconDress, IconShoe, IconBag],
      name: 'Summer Dress',
      uses: 3
    },
    {
      id: 3,
      date: '05 Set',
      icons: [IconJacket, IconPants, IconShoe],
      name: 'Street Style',
      uses: 7
    }
  ];

  const quickActions = [
    {
      id: 'upload',
      label: 'Upload',
      sublabel: 'Adicionar roupas',
      Icon: IconUpload,
      gradient: 'linear-gradient(135deg, #C2DC80, #A8C96A)',
      color: '#1E3309'
    },
    {
      id: 'ai-looks',
      label: 'Criar Look IA',
      sublabel: 'Combinações inteligentes',
      Icon: IconSparkles,
      gradient: 'linear-gradient(135deg, #EA9CAF, #D56989)',
      color: '#FFFFFF'
    },
    {
      id: 'planner',
      label: 'Planejar',
      sublabel: 'Organizar semana',
      Icon: IconCalendar,
      gradient: 'linear-gradient(135deg, #D56989, #B84A6B)',
      color: '#FFFFFF'
    },
    {
      id: 'closet',
      label: 'Meu Closet',
      sublabel: 'Ver todas as peças',
      Icon: IconCloset,
      gradient: 'linear-gradient(135deg, #C2DC80, #EA9CAF)',
      color: '#1E3309'
    }
  ];

  const handleActionClick = (actionId) => {
    if (actionId === 'ai-looks') {
      onNavigate && onNavigate('ai-looks');
    } else if (actionId === 'closet') {
      onNavigate && onNavigate('closet');
    }
  };

  return (
    <div style={{ paddingBottom: '0' }}>
      <Header />

      <div className="page fade-in" style={{ paddingTop: '0' }}>
        {/* Quick Actions Grid */}
        <section style={{ marginTop: '24px', marginBottom: '32px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            {quickActions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleActionClick(action.id)}
                style={{
                  background: action.gradient,
                  border: 'none',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: action.color,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  minHeight: '120px'
                }}
                className="quick-action-btn"
              >
                <action.Icon size={28} color={action.color} />
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
                    {action.label}
                  </div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>
                    {action.sublabel}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Mini Agenda Semanal */}
        <section style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>
              Agenda da Semana
            </h3>
            <button style={{
              background: 'none',
              border: 'none',
              color: '#C2DC80',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              Ver tudo
              <IconChevronRight size={16} color="#C2DC80" />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '8px'
          }}>
            {weekDays.map((day, index) => {
              const isToday = index === (currentDay === 0 ? 6 : currentDay - 1);
              const look = scheduledLooks[index];

              return (
                <div
                  key={day}
                  style={{
                    background: isToday
                      ? 'linear-gradient(135deg, #C2DC80, #A8C96A)'
                      : look
                        ? 'rgba(194, 220, 128, 0.15)'
                        : 'rgba(243, 238, 241, 0.5)',
                    borderRadius: '10px',
                    padding: '12px 8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: isToday ? '2px solid #C2DC80' : '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    fontSize: '10px',
                    fontWeight: '700',
                    marginBottom: '8px',
                    color: isToday ? '#1E3309' : 'var(--color-text-secondary)',
                    letterSpacing: '0.5px'
                  }}>
                    {day}
                  </div>
                  <div style={{
                    marginBottom: '4px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: look ? 1 : 0.3
                  }}>
                    {look ? (
                      <look.Icon size={28} color={isToday ? '#1E3309' : '#C2DC80'} />
                    ) : (
                      <IconHanger size={28} color="var(--color-text-secondary)" />
                    )}
                  </div>
                  <div style={{
                    fontSize: '9px',
                    fontWeight: '600',
                    color: isToday ? '#1E3309' : 'var(--color-text-secondary)'
                  }}>
                    {look ? look.name : '-'}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Looks Usados no Passado */}
        <section style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>
              Usar Novamente
            </h3>
            <button style={{
              background: 'none',
              border: 'none',
              color: '#EA9CAF',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              Histórico
              <IconHistory size={16} color="#EA9CAF" />
            </button>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            {pastLooks.map((look) => (
              <div
                key={look.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
                className="past-look-card"
              >
                {/* Look Preview */}
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  flexShrink: 0
                }}>
                  {look.icons.map((ItemIcon, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, rgba(194, 220, 128, 0.1), rgba(234, 156, 175, 0.1))',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ItemIcon size={24} color="#C2DC80" />
                    </div>
                  ))}
                </div>

                {/* Look Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px' }}>
                    {look.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                    Último uso: {look.date} · Usado {look.uses}x
                  </div>
                </div>

                {/* Action */}
                <button style={{
                  padding: '8px 16px',
                  background: 'linear-gradient(135deg, #EA9CAF, #D56989)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  flexShrink: 0
                }}>
                  Reusar
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .quick-action-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .past-look-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-color: rgba(194, 220, 128, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Home;
