import { Users, Heart, Lightbulb } from 'lucide-react';

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
          Our Team
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">Passionate experts fighting financial crime.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all">
            <Users className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Leadership</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Former investigators</li>
              <li>• PhDs in AI</li>
              <li>• Compliance experts</li>
            </ul>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all">
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Our Values</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Integrity first</li>
              <li>• Evidence-based</li>
              <li>• Human-centered AI</li>
            </ul>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all">
            <Lightbulb className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Innovation</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Cutting-edge tech</li>
              <li>• Continuous learning</li>
              <li>• User-driven design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
