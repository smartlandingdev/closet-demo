import { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Closet from './pages/Closet';
import AILooks from './pages/AILooks';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2500);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'closet':
        return <Closet />;
      case 'ai-looks':
        return <AILooks />;
      case 'marketplace':
        return <Marketplace />;
      case 'profile':
        return <Profile />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {showSplash && (
        <div className="splash-screen">
          <div className="splash-logo" style={{ fontFamily: 'Pacifico, cursive' }}>UCloset</div>
          <div className="splash-tagline">Seu guarda-roupa digital</div>
        </div>
      )}

      <div className="app-container">
        {renderPage()}
        <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>
    </>
  );
}

export default App;
