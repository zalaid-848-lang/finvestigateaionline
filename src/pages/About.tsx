import { Target, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Finvestigative AI
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          A rigorous research workspace for financial investigators, powered by AI.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="p-3 bg-indigo-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Precision</h3>
            <p className="text-gray-600">Connect entities with unmatched accuracy.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Integrity</h3>
            <p className="text-gray-600">Preserve evidence trails with full audit logs.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="p-3 bg-pink-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Speed</h3>
            <p className="text-gray-600">AI-assisted research at lightning speed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
