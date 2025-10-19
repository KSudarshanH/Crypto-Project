import { ArrowRight, Shield, Lock, Key } from 'lucide-react';

type PageType = 'home' | 'aim' | 'theory' | 'objective' | 'procedure' | 'simulation';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed bottom-20 right-10"></div>
        <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-slow top-1/2 left-1/2"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8 space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center animate-bounce-slow shadow-lg shadow-cyan-500/50">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center animate-bounce-slow-delayed shadow-lg shadow-blue-500/50">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center animate-bounce-slow shadow-lg shadow-purple-500/50">
            <Key className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Key Exchange Protocol
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 animate-fade-in-delayed">
          with Trusted Third Party (KDC)
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-more-delayed leading-relaxed">
          Explore the fundamental concepts of secure key distribution and cryptographic protocols
          through an interactive virtual laboratory experience
        </p>

        <button
          onClick={() => onNavigate('aim')}
          className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 animate-fade-in-last"
        >
          <span className="relative z-10">Start Exploring</span>
          <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
            <p className="text-gray-400 text-sm">
              Military-grade encryption protocols
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Trusted</h3>
            <p className="text-gray-400 text-sm">
              Certified key distribution center
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Key className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Interactive</h3>
            <p className="text-gray-400 text-sm">
              Hands-on simulation experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
