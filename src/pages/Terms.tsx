import { FileCheck, Scale, AlertCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-100 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-gray-700 to-stone-700 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-center text-gray-600 mb-12">Last updated: July 2026</p>
        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <FileCheck className="w-8 h-8 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-800">Acceptance</h3>
            </div>
            <p className="text-gray-700">By using Finvestigative AI, you agree to these terms. Please don't use the platform if you disagree.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <Scale className="w-8 h-8 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-800">Professional Use</h3>
            </div>
            <p className="text-gray-700">Our platform is for legitimate investigative purposes only. Users must comply with all laws and regulations.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-800">Limitation of Liability</h3>
            </div>
            <p className="text-gray-700">Our tools assist investigations but do not replace professional judgment. We are not liable for outcomes or decisions made using our platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
