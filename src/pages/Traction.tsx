import { TrendingUp, Users, Award } from 'lucide-react';

export default function Traction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Our Traction
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">Making an impact in financial investigations worldwide.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-5xl font-bold text-green-700">500+</div>
            <p className="text-gray-600 mt-2">Investigations supported</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-5xl font-bold text-emerald-700">50+</div>
            <p className="text-gray-600 mt-2">Enterprise clients</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <div className="text-5xl font-bold text-teal-700">99.9%</div>
            <p className="text-gray-600 mt-2">Data accuracy rate</p>
          </div>
        </div>
        <p className="text-center text-gray-700 mt-12 text-lg">Deployed at leading financial institutions, regulatory bodies, and investigative agencies.</p>
      </div>
    </div>
  );
}
