import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  FileSearch,
  Fingerprint,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const investigations = [
  {
    label: 'Entity resolution',
    title: 'Connect the names behind the numbers.',
    description:
      'Match companies, directors, subsidiaries, and counterparties across filings—even when the records disagree.',
    icon: Fingerprint,
    index: '01',
  },
  {
    label: 'Evidence search',
    title: 'Ask the archive. Verify every answer.',
    description:
      'Search filings, transcripts, and source documents in plain language with citations attached to every claim.',
    icon: FileSearch,
    index: '02',
  },
  {
    label: 'Relationship mapping',
    title: 'See the structure others miss.',
    description:
      'Turn scattered disclosures into an explorable map of ownership, control, transactions, and risk.',
    icon: Network,
    index: '03',
  },
]

const proofPoints = [
  'Source-linked answers, not unsupported summaries',
  'Entity matching across inconsistent disclosures',
  'Exportable evidence trails for every investigation',
  'Private workspaces built for sensitive research',
]

function EvidenceGraph() {
  return (
    <div className="evidence-visual" aria-label="Example entity relationship analysis">
      <div className="visual-toolbar">
        <div className="visual-status">
          <span className="status-dot" /> LIVE ANALYSIS
        </div>
        <div className="visual-id">CASE 7A–019</div>
      </div>

      <div className="visual-query">
        <Search size={16} aria-hidden="true" />
        <span>Trace related-party payments from Aster Vale PLC</span>
        <span className="query-key">↵</span>
      </div>

      <div className="graph-stage">
        <svg className="graph-lines" viewBox="0 0 600 350" aria-hidden="true">
          <path d="M302 174 L130 90" />
          <path d="M302 174 L468 70" />
          <path d="M302 174 L490 270" />
          <path d="M302 174 L130 275" />
          <path className="graph-line-dashed" d="M130 90 L468 70" />
        </svg>
        <div className="graph-node graph-node-main">
          <span>AV</span>
          <strong>Aster Vale PLC</strong>
          <small>SUBJECT</small>
        </div>
        <div className="graph-node graph-node-a">
          <span>MH</span>
          <strong>Meridian House</strong>
          <small>SHARED DIRECTOR</small>
        </div>
        <div className="graph-node graph-node-b alert-node">
          <span>03</span>
          <strong>Northline Holdings</strong>
          <small>UNDISCLOSED OWNER</small>
        </div>
        <div className="graph-node graph-node-c">
          <span>SV</span>
          <strong>Stone & Vale</strong>
          <small>$4.28M TRANSFER</small>
        </div>
        <div className="graph-node graph-node-d">
          <span>12</span>
          <strong>Related filings</strong>
          <small>6 JURISDICTIONS</small>
        </div>
      </div>

      <div className="finding-card">
        <div className="finding-icon"><Sparkles size={15} /></div>
        <div>
          <span>FLAGGED RELATIONSHIP</span>
          <p>Beneficial owner appears in 3 previously unlinked disclosures.</p>
        </div>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow reveal reveal-1">
            <span className="eyebrow-rule" /> Intelligence for financial investigations
          </div>
          <h1 id="hero-title" className="reveal reveal-2">
            Follow the money.<br />
            <em>Find what matters.</em>
          </h1>
          <p className="hero-lede reveal reveal-3">
            An AI research workspace that turns fragmented financial records into
            traceable evidence, connected entities, and defensible findings.
          </p>
          <div className="hero-actions reveal reveal-4">
            <a className="button button-dark" href="#access">
              Start an investigation <ArrowDownRight size={18} />
            </a>
            <a className="text-link" href="#platform">
              Explore the platform <ChevronRight size={16} />
            </a>
          </div>
          <div className="trust-note reveal reveal-4">
            <ShieldCheck size={17} />
            <span>Built for analysts, journalists, counsel, and compliance teams.</span>
          </div>
        </div>

        <div className="hero-visual reveal reveal-3">
          <div className="case-label">EVIDENCE MAP / 04</div>
          <EvidenceGraph />
          <div className="visual-caption">
            <span>01</span>
            <p>From question to cited finding—in one connected workspace.</p>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Platform capabilities">
        <span>SEC filings</span>
        <span>Corporate registries</span>
        <span>Sanctions data</span>
        <span>Court records</span>
        <span>News archives</span>
      </section>

      <section className="intro-section" id="platform">
        <div className="section-index">01 / THE PLATFORM</div>
        <div className="intro-heading">
          <p>Financial truth is rarely in one document.</p>
          <h2>We help you connect the fragments.</h2>
        </div>
        <p className="intro-copy">
          Finvestigative AI combines investigative search, entity intelligence,
          and source-grounded analysis. Move from suspicion to evidence without
          losing the chain of reasoning along the way.
        </p>
      </section>

      <section className="capability-grid">
        {investigations.map((item) => {
          const Icon = item.icon
          return (
            <article className="capability-card" key={item.index}>
              <div className="card-topline">
                <span>{item.index}</span>
                <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="card-content">
                <p className="card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <a href="#access" aria-label={`Learn about ${item.label}`}>
                Examine capability <ArrowUpRight size={17} />
              </a>
            </article>
          )
        })}
      </section>

      <section className="method-section" id="method">
        <div className="method-panel">
          <div className="section-index section-index-light">02 / THE METHOD</div>
          <h2>AI that shows its work.</h2>
          <p>
            Every answer is grounded in the underlying record. Inspect the source,
            challenge the conclusion, and preserve an audit-ready trail.
          </p>
          <div className="method-list">
            {proofPoints.map((point) => (
              <div className="method-item" key={point}>
                <span><Check size={14} /></span>
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="source-panel">
          <div className="source-document">
            <div className="document-head">
              <span>EXHIBIT 10.4</span>
              <span>PAGE 17 / 42</span>
            </div>
            <div className="document-title">RELATED PARTY TRANSACTIONS</div>
            <div className="document-lines">
              <span className="line w-92" />
              <span className="line w-78" />
              <span className="line highlighted w-88" />
              <span className="line highlighted w-64" />
              <span className="line w-82" />
              <span className="line w-70" />
            </div>
            <div className="document-note">
              <span>AI</span>
              <p>Payment recipient is controlled by a director's family trust.</p>
            </div>
          </div>
          <div className="citation-chip">CITATION VERIFIED · 2 SOURCES</div>
        </div>
      </section>

      <section className="security-section" id="security">
        <div>
          <div className="section-index">03 / CONTROL</div>
          <h2>Your investigation stays yours.</h2>
        </div>
        <div className="security-copy">
          <p>
            Sensitive work requires more than smart answers. Finvestigative AI is
            designed around private workspaces, granular access, and a clear record
            of every source and action.
          </p>
          <div className="security-tags">
            <span>Encrypted at rest</span>
            <span>Workspace controls</span>
            <span>Audit history</span>
            <span>Source provenance</span>
          </div>
        </div>
      </section>

      <section className="closing-section" id="access">
        <div className="closing-code">F/AI — PRIVATE BETA</div>
        <div className="closing-content">
          <h2>Investigate with<br /><em>more certainty.</em></h2>
          <p>
            Join the private beta for research teams that need faster answers
            without compromising evidentiary rigor.
          </p>
          <a className="button button-light" href="mailto:access@finvestigative.ai">
            Request private access <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="closing-mark" aria-hidden="true">F/</div>
      </section>
    </main>
  )
}

export default HomePage