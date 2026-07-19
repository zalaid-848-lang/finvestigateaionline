import { ShieldCheck, Lock, Eye } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-12">Last updated: July 2026</p>
        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Data Collection</h3>
            </div>
            <p className="text-gray-700">We collect only necessary data: account info, case data you upload, and usage patterns to improve our platform.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800">Data Protection</h3>
            </div>
            <p className="text-gray-700">All data is encrypted at rest and in transit. We comply with SOC 2 standards and conduct regular audits.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Your Rights</h3>
            </div>
            <p className="text-gray-700">You can access, correct, or delete your data anytime. Contact privacy@finvestigative.ai.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
