import { useState } from 'react';
import HomePage from './pages/HomePage';
import AimPage from './pages/AimPage';
import TheoryPage from './pages/TheoryPage';
import ObjectivePage from './pages/ObjectivePage';
import ProcedurePage from './pages/ProcedurePage';
import SimulationPage from './pages/SimulationPage';
import Navbar from './components/Navbar';

type PageType = 'home' | 'aim' | 'theory' | 'objective' | 'procedure' | 'simulation';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'aim':
        return <AimPage />;
      case 'theory':
        return <TheoryPage />;
      case 'objective':
        return <ObjectivePage />;
      case 'procedure':
        return <ProcedurePage />;
      case 'simulation':
        return <SimulationPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {currentPage !== 'home' && <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />}
      <div className="page-transition">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
