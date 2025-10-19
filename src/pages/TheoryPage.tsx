import { BookOpen, Server, Key, Lock, Users, ArrowRight } from 'lucide-react';

const TheoryPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-lg shadow-cyan-500/50">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Theoretical Concepts
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 animate-slide-up">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Key className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white mb-3">Key Exchange Problem</h2>
                <div className="w-16 h-1 bg-cyan-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              In cryptography, the key exchange problem addresses how two or more parties can securely
              establish a shared secret key over an insecure communication channel. This shared key is
              then used for encrypting and decrypting messages using symmetric encryption algorithms.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The challenge lies in ensuring that the key remains confidential even if an adversary
              intercepts the communication. Without proper protocols, attackers could perform
              man-in-the-middle attacks or eavesdrop on key exchanges.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-10 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Server className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white mb-3">Key Distribution Center (KDC)</h2>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              A Key Distribution Center is a trusted third-party entity that facilitates secure key
              exchange between communicating parties in a network. The KDC maintains long-term secret
              keys with each registered user and generates session keys for secure communication.
            </p>

            <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Key Responsibilities of KDC
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Authenticate users requesting secure communication</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Generate random session keys for each communication session</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Encrypt and distribute session keys securely to authorized parties</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Maintain the confidentiality of all master keys in the system</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">Trust Model:</span> All parties in the
                network trust the KDC implicitly. The security of the entire system relies on the
                KDC's ability to keep master keys confidential and to generate unpredictable session keys.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-10 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white mb-3">The Protocol Flow</h2>
                <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Request Phase</h4>
                  <p className="text-gray-400">
                    User A contacts the KDC requesting a session key to communicate with User B.
                    This request includes identities of both parties and is encrypted with A's master key.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Generation</h4>
                  <p className="text-gray-400">
                    The KDC generates a random session key and creates two encrypted packages: one
                    for User A (encrypted with A's master key) and one for User B (encrypted with B's master key).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Distribution Phase</h4>
                  <p className="text-gray-400">
                    The KDC sends both packages to User A. User A decrypts their package to obtain
                    the session key and forwards the second package to User B.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Secure Communication</h4>
                  <p className="text-gray-400">
                    User B decrypts their package to obtain the same session key. Both users now
                    share a secret key and can communicate securely using symmetric encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white mb-3">Security Considerations</h2>
                <div className="w-16 h-1 bg-cyan-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-green-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Advantages</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Centralized key management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Scalable for large networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Fresh session keys for each session</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>No need for public key infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border border-red-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Challenges</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Single point of failure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Replay attack vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Requires absolute trust in KDC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Performance bottleneck in large systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryPage;
