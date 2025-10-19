import { Target, CheckCircle, Code, Shield,Key, Lightbulb, BookOpen,} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ObjectivePage = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const objectives = [
    {
      icon: BookOpen,
      title: 'Understand Key Distribution Fundamentals',
      description: 'Gain comprehensive knowledge of symmetric key cryptography, the challenges of secure key distribution, and the role of trusted third parties in establishing secure communications.',
      color: 'from-cyan-400 to-blue-500',
      borderColor: 'border-cyan-500/20',
      hoverBorder: 'hover:border-cyan-500/50',
    },
    {
      icon: Code,
      title: 'Implement KDC Protocol',
      description: 'Develop a working implementation of a Key Distribution Center protocol, including authentication mechanisms, session key generation, and secure key distribution to communicating parties.',
      color: 'from-blue-400 to-purple-500',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/50',
    },
    {
      icon: Key,
      title: 'Secure Key Exchange Between Communicating Parties',
      description: 'To implement a secure mechanism for key exchange between two entities (users) through the KDC without directly transmitting the secret key between them.',
      color: 'from-purple-400 to-pink-500',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/50',
    },
    {
      icon: Shield,
      title: 'Authentication and Session Key Generation',
      description: 'To simulate the authentication process where users authenticate themselves with the KDC, and a secure session key is generated for their communication.',
      color: 'from-pink-400 to-red-500',
      borderColor: 'border-pink-500/20',
      hoverBorder: 'hover:border-pink-500/50',
    },
    {
      icon: Lightbulb,
      title: 'Evaluate System Vulnerabilities',
      description: 'Identify potential security weaknesses in KDC-based systems, understand attack vectors like replay attacks and man-in-the-middle attacks, and explore mitigation strategies.',
      color: 'from-orange-400 to-yellow-500',
      borderColor: 'border-orange-500/20',
      hoverBorder: 'hover:border-orange-500/50',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-lg shadow-cyan-500/50">
            <Target className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Project Objectives
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Comprehensive goals designed to provide deep understanding of key distribution protocols
            and hands-on experience with cryptographic systems
          </p>
        </div>

        <div className="space-y-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`bg-slate-800/50 backdrop-blur-sm border ${objective.borderColor} rounded-2xl p-8 md:p-10 ${objective.hoverBorder} transition-all duration-500 shadow-xl transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${objective.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                    <Icon className="w-9 h-9 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className={`w-12 h-1 bg-gradient-to-r ${objective.color} rounded-full`}></div>
                      </div>
                      <CheckCircle
                        className={`w-6 h-6 transition-all duration-500 ${
                          isVisible ? 'text-green-400 opacity-100 scale-100' : 'text-gray-600 opacity-0 scale-0'
                        }`}
                      />
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {objective.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-lg">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ObjectivePage;
