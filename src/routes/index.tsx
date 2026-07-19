import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Target, Shield, Zap, TrendingUp, Users, Award } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Follow the money.
            <br />
            Find what matters.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            An AI research workspace for financial investigators. Connect entities, 
            search source material, map relationships, and preserve evidence trails.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-200 shadow-xl flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold hover:shadow-xl transition-all duration-200 border border-gray-200">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Finvestigative AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-indigo-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Entity Connection</h3>
              <p className="text-gray-600">Discover relationships between people, companies, and transactions across millions of data points.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Evidence Trail</h3>
              <p className="text-gray-600">Immutable audit logs, source citations, and chain-of-custody documentation built into your workflow.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-pink-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Assisted Research</h3>
              <p className="text-gray-600">Summarize documents, extract key facts, and generate hypotheses while maintaining investigator control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-indigo-700">500+</div>
              <p className="text-gray-600 mt-2">Investigations supported</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-purple-700">50+</div>
              <p className="text-gray-600 mt-2">Enterprise clients</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-pink-700">99.9%</div>
              <p className="text-gray-600 mt-2">Data accuracy rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to investigate?</h2>
            <p className="text-lg text-gray-700 mb-8">Join leading financial institutions using Finvestigative AI.</p>
            <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-200 shadow-xl">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
