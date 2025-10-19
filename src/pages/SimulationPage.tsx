import {
  Play,
  RefreshCw,
  User,
  Server,
  Key,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

type SimulationStep = {
  id: number;
  title: string;
  description: string;
  actor: "userA" | "kdc" | "userB";
  icon: typeof User;
  completed: boolean;
};

const SimulationPage = () => {
  const [userAId, setUserAId] = useState("Alice");
  const [userBId, setUserBId] = useState("Bob");
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [sessionKey, setSessionKey] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [simulationComplete, setSimulationComplete] = useState(false);

  const [steps, setSteps] = useState<SimulationStep[]>([
    {
      id: 1,
      title: "Request Initiated",
      description: "User A requests session key from KDC",
      actor: "userA",
      icon: User,
      completed: false,
    },
    {
      id: 2,
      title: "Authentication",
      description: "KDC authenticates User A",
      actor: "kdc",
      icon: Lock,
      completed: false,
    },
    {
      id: 3,
      title: "Key Generation",
      description: "KDC generates random session key",
      actor: "kdc",
      icon: Key,
      completed: false,
    },
    {
      id: 4,
      title: "Key Encryption",
      description: "KDC encrypts packages for both users",
      actor: "kdc",
      icon: Lock,
      completed: false,
    },
    {
      id: 5,
      title: "Distribution to A",
      description: "KDC sends packages to User A",
      actor: "kdc",
      icon: ArrowRight,
      completed: false,
    },
    {
      id: 6,
      title: "A Decrypts",
      description: "User A decrypts their package",
      actor: "userA",
      icon: Key,
      completed: false,
    },
    {
      id: 7,
      title: "Ticket Forward",
      description: "User A forwards ticket to User B",
      actor: "userA",
      icon: ArrowRight,
      completed: false,
    },
    {
      id: 8,
      title: "B Decrypts",
      description: "User B decrypts the ticket",
      actor: "userB",
      icon: Key,
      completed: false,
    },
    {
      id: 9,
      title: "Secure Channel",
      description: "Both users share the session key",
      actor: "userB",
      icon: CheckCircle2,
      completed: false,
    },
  ]);

  const [nonce, setNonce] = useState('');
  const generateRandomKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "";
    for (let i = 0; i < 16; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
  };

  const addLog = (message: string) => {
    setLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] ${message}`,
    ]);
  };

  const simulateStep = async (stepIndex: number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const step = steps[stepIndex];
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[stepIndex].completed = true;
      return newSteps;
    });

    switch (step.id) {
      case 1:
        addLog(`${userAId} → KDC: Request session key for communication with ${userBId}`);
        break;
      case 2:
        addLog(`KDC: Authenticating ${userAId}...`);
        addLog(`KDC: Authentication successful for ${userAId}`);
        break;
      case 3:
        const key = generateRandomKey();
        setSessionKey(key);
        addLog(`KDC: Generated session key: ${key}`);
        break;
      case 4:
        addLog(`KDC: Encrypting {Ks, ${userBId}} with ${userAId}'s master key`);
        addLog(`KDC: Encrypting {Ks, ${userAId}} with ${userBId}'s master key`);
        break;
      case 5:
        addLog(`KDC → ${userAId}: Sending encrypted packages`);
        break;
      case 6:
        addLog(`${userAId}: Decrypting package with master key`);
        addLog(`${userAId}: Successfully extracted session key`);
        break;
      case 7:
        addLog(`${userAId} → ${userBId}: Forwarding encrypted ticket`);
        break;
      case 8:
        addLog(`${userBId}: Decrypting ticket with master key`);
        addLog(`${userBId}: Successfully extracted session key`);
        break;
      case 9:
        addLog(`✓ Secure communication channel established!`);
        addLog(`Both ${userAId} and ${userBId} can now communicate securely`);
        setSimulationComplete(true);
        break;
    }

    setCurrentStep(stepIndex + 1);
  };

  const startSimulation = async () => {
    if (!userAId.trim() || !userBId.trim()) {
      addLog("⚠ Error: Please enter both user IDs");
      return;
    }

    if (userAId === userBId) {
      addLog("⚠ Error: Users must have different IDs");
      return;
    }

    setIsSimulating(true);
    setCurrentStep(0);
    setSessionKey("");
    setLogs([]);
    setSimulationComplete(false);
    setSteps((prevSteps) =>
      prevSteps.map((step) => ({ ...step, completed: false }))
    );

    addLog(`Starting KDC key exchange simulation...`);
    addLog(`Participants: ${userAId} and ${userBId}`);

    for (let i = 0; i < steps.length; i++) {
      await simulateStep(i);
    }

    setIsSimulating(false);
  };

  const resetSimulation = () => {
    setCurrentStep(0);
    setSessionKey("");
    setLogs([]);
    setIsSimulating(false);
    setSimulationComplete(false);
    setSteps((prevSteps) =>
      prevSteps.map((step) => ({ ...step, completed: false }))
    );
  };

  const getActorColor = (actor: string) => {
    switch (actor) {
      case "userA":
        return "from-cyan-400 to-blue-500";
      case "kdc":
        return "from-purple-400 to-pink-500";
      case "userB":
        return "from-green-400 to-cyan-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-lg shadow-cyan-500/50">
            <Play className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Interactive Simulation
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Experience the key exchange protocol in action with real-time
            visualization
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Configuration Panel */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Server className="w-7 h-7 text-cyan-400 mr-3" />
                Configuration
              </h2>

              <div className="space-y-6">
                {/* User Inputs */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    User A ID
                  </label>
                  <input
                    type="text"
                    value={userAId}
                    onChange={(e) => setUserAId(e.target.value)}
                    disabled={isSimulating}
                    className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    placeholder="Enter User A identifier"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    User B ID
                  </label>
                  <input
                    type="text"
                    value={userBId}
                    onChange={(e) => setUserBId(e.target.value)}
                    disabled={isSimulating}
                    className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    placeholder="Enter User B identifier"
                  />
                </div>

                {/* Session Key Display */}
                {sessionKey && (
                  <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-xl p-4">
                    <label className="block text-green-400 mb-2 font-medium text-sm">
                      Generated Session Key
                    </label>
                    <div className="font-mono text-white text-lg tracking-wider break-all bg-slate-900/50 rounded-lg px-4 py-3">
                      {sessionKey}
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={startSimulation}
                    disabled={isSimulating}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>
                      {isSimulating ? "Running..." : "Start Simulation"}
                    </span>
                  </button>

                  <button
                    onClick={resetSimulation}
                    disabled={isSimulating}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-cyan-400 mr-3" />
                Progress Steps
              </h2>

              <div className="space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === index;
                  const isCompleted = step.completed;

                  return (
                    <div
                      key={step.id}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-500/20 border border-cyan-500/50 scale-105"
                          : isCompleted
                          ? "bg-green-500/10 border border-green-500/30"
                          : "bg-slate-900/30 border border-slate-700/30"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${getActorColor(
                          step.actor
                        )} ${!isCompleted && !isActive ? "opacity-30" : ""}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span
                            className={`font-bold ${
                              isCompleted
                                ? "text-green-400"
                                : isActive
                                ? "text-cyan-400"
                                : "text-gray-500"
                            }`}
                          >
                            Step {step.id}
                          </span>
                          {isCompleted && (
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        <h3
                          className={`font-semibold ${
                            isActive || isCompleted
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            isActive || isCompleted
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Completion Message */}
              {simulationComplete && (
                <div className="mt-6 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-xl p-6 animate-pulse-slow">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Simulation Complete!
                      </h3>
                      <p className="text-gray-300">
                        Key exchange successful. Secure channel established.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section: Logs */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 shadow-xl sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                Simulation Logs
              </h2>

              <div className="bg-slate-900/70 rounded-lg p-4 h-[600px] overflow-y-auto font-mono text-sm">
                {logs.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    No logs yet. Start simulation to see activity.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {logs.map((log, index) => (
                      <div
                        key={index}
                        className="text-gray-300 hover:bg-slate-800/50 p-2 rounded transition-colors animate-fade-in"
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            About This Simulation
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            This interactive simulation demonstrates the complete key exchange
            protocol using a Key Distribution Center. The visualization shows
            each step of the process, from the initial request to the
            establishment of a secure communication channel.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Future enhancements will include backend integration for actual
            cryptographic operations, real encryption algorithms, and advanced
            features like replay attack simulation and timing analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimulationPage;
