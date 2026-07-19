import { createFileRoute, Link as RouterLink } from '@tanstack/react-router'
import {
  ArrowRight,
  Link as LinkIcon,
  FileText,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const FEATURES = [
  {
    icon: LinkIcon,
    color: 'cyan',
    title: 'Entity Connection Engine',
    description:
      'Automatically discover relationships between people, companies, and transactions across millions of data points.',
  },
  {
    icon: FileText,
    color: 'blue',
    title: 'Evidence Trail Management',
    description:
      'Immutable audit logs, source citations, and chain-of-custody documentation built into your workflow.',
  },
  {
    icon: Search,
    color: 'indigo',
    title: 'AI-Assisted Research',
    description:
      'Summarize documents, extract key facts, and generate hypotheses while maintaining investigator control.',
  },
  {
    icon: ShieldCheck,
    color: 'purple',
    title: 'Verifiable by Design',
    description:
      'Every finding links back to its source material, so conclusions hold up under scrutiny.',
  },
] as const

const STATS = [
  { icon: TrendingUp, color: 'green', value: '500+', label: 'Investigations supported' },
  { icon: Users, color: 'emerald', value: '50+', label: 'Enterprise clients' },
  { icon: Award, color: 'teal', value: '99.9%', label: 'Data accuracy rate' },
] as const

const ICON_BG: Record<string, string> = {
  cyan: 'bg-cyan-100 text-cyan-600',
  blue: 'bg-blue-100 text-blue-600',
  indigo: 'bg-indigo-100 text-indigo-600',
  purple: 'bg-purple-100 text-purple-600',
}

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/40 shadow-sm px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            AI-powered financial investigations
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Follow the money. Find what matters.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Finvestigative AI is a rigorous research workspace for financial investigators —
            connect entities, trace evidence, and build a case with every conclusion
            traceable to its source.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <RouterLink
              to="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </RouterLink>
            <RouterLink
              to="/product"
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-800 px-8 py-3.5 rounded-xl font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              Explore the Product
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-white" aria-labelledby="features-heading">
        <div className="container mx-auto max-w-6xl">
          <h2
            id="features-heading"
            className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
          >
            Built for the way investigators work
          </h2>
          <p className="text-center text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
            Powerful tools that keep every insight grounded in verifiable evidence.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, color, title, description }) => (
              <div
                key={title}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center ${ICON_BG[color]}`}>
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction / Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50" aria-labelledby="traction-heading">
        <div className="container mx-auto max-w-5xl">
          <h2
            id="traction-heading"
            className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
          >
            Trusted, and it shows in the numbers
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Making an impact in financial investigations worldwide.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <Icon className="w-12 h-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                <div className="text-5xl font-bold text-green-700">{value}</div>
                <p className="text-gray-600 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Trust */}
      <section className="py-16 px-4 bg-white" aria-labelledby="trust-heading">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/40 p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl transition-all duration-300">
            <div className="p-4 bg-rose-100 rounded-full flex-shrink-0">
              <Users className="w-10 h-10 text-rose-600" aria-hidden="true" />
            </div>
            <div className="text-center md:text-left">
              <h2 id="trust-heading" className="text-2xl font-bold text-gray-800 mb-2">
                Built by investigators, PhDs, and compliance experts
              </h2>
              <p className="text-gray-600">
                Our team pairs former financial investigators with AI researchers and
                compliance specialists, so every feature is grounded in how real
                investigations actually get done.
              </p>
            </div>
            <RouterLink
              to="/team"
              className="flex-shrink-0 inline-flex items-center gap-2 text-rose-600 font-semibold hover:gap-3 transition-all duration-200"
            >
              Meet the team
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to see it on your own cases?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Talk to us about a trial and bring evidence-backed research to your next
            investigation.
          </p>
          <RouterLink
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Start a Trial
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </RouterLink>
        </div>
      </section>
    </main>
  )
}

export default HomePage
