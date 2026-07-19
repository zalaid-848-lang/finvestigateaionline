import { Cpu, Database } from 'lucide-react';

export default function Technology() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
          Technology Stack
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">Built for security, performance, and scale.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <Cpu className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Frontend</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• React 19 + TypeScript</li>
              <li>• TanStack Router</li>
              <li>• Tailwind CSS 4</li>
              <li>• Vite build tool</li>
            </ul>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <Database className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">AI & Data</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Large Language Models</li>
              <li>• Graph Database</li>
              <li>• Vector Search</li>
              <li>• Natural Language Processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
