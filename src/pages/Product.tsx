import { Link, Search, FileText } from 'lucide-react';

export default function Product() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Our Product
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">Powerful tools for financial investigations.</p>
        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex items-start gap-6 hover:shadow-2xl transition-all">
            <div className="p-4 bg-cyan-100 rounded-full flex-shrink-0">
              <Link className="w-8 h-8 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Entity Connection Engine</h3>
              <p className="text-gray-700 mt-2">Automatically discover relationships between people, companies, and transactions across millions of data points.</p>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex items-start gap-6 hover:shadow-2xl transition-all">
            <div className="p-4 bg-blue-100 rounded-full flex-shrink-0">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Evidence Trail Management</h3>
              <p className="text-gray-700 mt-2">Immutable audit logs, source citations, and chain-of-custody documentation built into your workflow.</p>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex items-start gap-6 hover:shadow-2xl transition-all">
            <div className="p-4 bg-indigo-100 rounded-full flex-shrink-0">
              <Search className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">AI-Assisted Research</h3>
              <p className="text-gray-700 mt-2">Summarize documents, extract key facts, and generate hypotheses while maintaining investigator control.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
