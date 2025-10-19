import { List, User, Server, Key, Lock, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

const ProcedurePage = () => {
  const steps = [
    {
      number: 1,
      title: 'System Initialization',
      icon: Server,
      color: 'from-cyan-400 to-blue-500',
      description: 'Set up the Key Distribution Center (KDC) and register users',
      substeps: [
        'Initialize the KDC server with secure storage for master keys',
        'Generate unique master keys for each user in the system',
        'Store user credentials and master keys securely in the KDC database',
        'Establish secure communication channels between users and KDC',
      ],
    },
    {
      number: 2,
      title: 'Session Key Request',
      icon: User,
      color: 'from-blue-400 to-purple-500',
      description: 'User A initiates communication with User B',
      substeps: [
        'User A decides to communicate securely with User B',
        'User A generates a request message containing identities of both parties',
        'Request includes a timestamp or nonce to prevent replay attacks',
        'User A sends the request to the KDC over a secure channel',
      ],
    },
    {
      number: 3,
      title: 'KDC Authentication',
      icon: Lock,
      color: 'from-purple-400 to-pink-500',
      description: 'KDC verifies the request and authenticates User A',
      substeps: [
        'KDC receives the request and validates the timestamp/nonce',
        'KDC verifies User A\'s identity using their master key',
        'KDC checks if User B is a registered user in the system',
        'KDC authenticates the legitimacy of the communication request',
      ],
    },
    {
      number: 4,
      title: 'Session Key Generation',
      icon: Key,
      color: 'from-pink-400 to-red-500',
      description: 'KDC creates a fresh session key for the communication',
      substeps: [
        'KDC generates a random symmetric session key (Ks)',
        'Session key is created using a cryptographically secure random generator',
        'Ks is unique and will be used only for this particular session',
        'KDC prepares to distribute the session key to both parties',
      ],
    },
    {
      number: 5,
      title: 'Key Packaging',
      icon: Lock,
      color: 'from-red-400 to-orange-500',
      description: 'KDC encrypts session key for both users',
      substeps: [
        'KDC creates Package 1: Encrypts {Ks, ID_B} using User A\'s master key',
        'KDC creates Package 2 (ticket): Encrypts {Ks, ID_A} using User B\'s master key',
        'Both packages contain the same session key but different metadata',
        'Packages ensure that only intended recipients can decrypt them',
      ],
    },
    {
      number: 6,
      title: 'Key Distribution',
      icon: Send,
      color: 'from-orange-400 to-yellow-500',
      description: 'KDC sends encrypted packages to User A',
      substeps: [
        'KDC sends both Package 1 and Package 2 to User A',
        'User A receives the encrypted packages from KDC',
        'User A decrypts Package 1 using their own master key',
        'User A extracts the session key (Ks) from Package 1',
      ],
    },
    {
      number: 7,
      title: 'Ticket Forwarding',
      icon: ArrowRight,
      color: 'from-yellow-400 to-green-500',
      description: 'User A forwards the encrypted ticket to User B',
      substeps: [
        'User A sends Package 2 (ticket) to User B without decrypting it',
        'User B receives the encrypted package from User A',
        'User B decrypts Package 2 using their own master key',
        'User B extracts the session key (Ks) from the decrypted package',
      ],
    },
    {
      number: 8,
      title: 'Secure Communication',
      icon: CheckCircle2,
      color: 'from-green-400 to-cyan-500',
      description: 'Both users communicate using the shared session key',
      substeps: [
        'Both User A and User B now possess the same session key (Ks)',
        'Users encrypt messages using Ks before sending',
        'Users decrypt received messages using Ks',
        'Communication continues securely until the session expires',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-lg shadow-cyan-500/50">
            <List className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Step-by-Step Procedure
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Follow this comprehensive guide to understand the complete key exchange process with KDC
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="md:ml-20 group">
                    <div className="absolute -left-20 top-8 hidden md:flex items-center justify-center w-16 h-16 bg-slate-800 border-4 border-slate-900 rounded-full shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                        {step.number}
                      </span>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:transform hover:scale-[1.02]">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:rotate-6 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2 md:hidden">
                            <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                              Step {step.number}
                            </span>
                          </div>
                          <h3 className="text-2xl font-semibold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-900/50 border border-cyan-500/10 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          Detailed Steps
                        </h4>
                        <div className="space-y-3">
                          {step.substeps.map((substep, subIndex) => (
                            <div
                              key={subIndex}
                              className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform duration-200"
                            >
                              <div className="w-6 h-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-cyan-400 text-xs font-bold">
                                  {subIndex + 1}
                                </span>
                              </div>
                              <p className="text-gray-300 leading-relaxed">
                                {substep}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedurePage;
