import { Target, Shield, Users, CheckCircle } from 'lucide-react';

const AimPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-lg shadow-cyan-500/50">
            <Target className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Project Aim
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12 mb-12 animate-slide-up shadow-xl">
          <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
            <CheckCircle className="w-8 h-8 text-cyan-400 mr-3" />
            Main Objective
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            To understand, implement, and demonstrate a secure key exchange mechanism using a
            <span className="text-cyan-400 font-semibold"> Key Distribution Center (KDC)</span> as a
            trusted third party, ensuring confidential communication between multiple entities in a
            networked environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-slide-up-delayed">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Security</h3>
            <p className="text-gray-400 leading-relaxed">
              Implement robust cryptographic protocols that ensure the confidentiality and
              integrity of symmetric keys distributed across the network.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Trust Model</h3>
            <p className="text-gray-400 leading-relaxed">
              Establish a centralized Key Distribution Center that acts as a trusted authority
              for generating and distributing session keys between communicating parties.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Simulation</h3>
            <p className="text-gray-400 leading-relaxed">
              Create an interactive demonstration platform to visualize the key exchange process
              and understand the flow of encrypted communications.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 animate-fade-in-delayed">
          <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
          <Target className="w-7 h-7 text-cyan-400 mr-3" />
           About the Experiment
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span>In this experiment, we simulate a secure communication scenario between two users (say, User A and User B) over an insecure network. A Key Distribution Center (KDC) acts as a trusted third party that generates and distributes a session key to both users. The session key is used to encrypt and decrypt messages, ensuring confidentiality and integrity.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AimPage;
