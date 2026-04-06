import './App.css'

const contactEmail = 'hello@qodoxo.com'
const bookingLink = `mailto:${contactEmail}?subject=Book%20a%20discovery%20call`
const platformEngrLink = 'https://www.platformengr.com/'
const gogetcvLink = 'https://gogetcv.com/'

const serviceCards = [
  {
    icon: <PlatformIcon />,
    title: 'Platform Engineering Consulting',
    summary:
      'Design and improve internal engineering platforms, workflows, and developer experience.',
    points: [
      'Platform foundations and architecture',
      'Internal developer platforms and self-service workflows',
      'Delivery acceleration with guardrails',
      'Reliability, scalability, and operational clarity',
    ],
    linkLabel: 'Learn more about Platform Engineering',
    href: platformEngrLink,
  },
  {
    icon: <AiCodingIcon />,
    title: 'AI Coding Platform Advisory & Enablement',
    summary:
      'Adopt AI-assisted software development with the right balance of speed, correctness, governance, and developer trust.',
    points: [
      'Evaluation of AI coding tools and workflows',
      'Team rollout strategy and usage guidelines',
      'Governance, risk, and quality controls',
      'Developer enablement and best practices',
    ],
  },
  {
    icon: <ShieldIcon />,
    title: 'Code Quality, Security & Architecture Audits',
    summary:
      'Find issues early, improve maintainability, and reduce risk in critical systems and delivery pipelines.',
    points: [
      'Code quality reviews',
      'Secure coding and risk assessment',
      'Architecture and maintainability analysis',
      'Improvement roadmaps and advisory support',
    ],
  },
  {
    icon: <AgentsIcon />,
    title: 'AI Assistants & Autonomous Agent Systems',
    summary:
      'Design and implement advanced AI assistants and agent-based workflows tailored to real business use cases.',
    points: [
      'AI assistant design',
      'Retrieval, orchestration, and workflow automation',
      'Agent-based task execution',
      'Integration with internal tools and knowledge sources',
    ],
  },
  {
    icon: <ProductIcon />,
    title: 'SaaS Products',
    summary:
      'We build and operate focused SaaS products where AI and workflow design create practical user value.',
    points: [
      'Focused, useful product design',
      'Thoughtful AI integration',
      'Practical workflow improvements',
      'Strong technical foundations',
    ],
    linkLabel: 'Visit GoGetCV',
    href: gogetcvLink,
  },
]

const valuePoints = [
  'Senior technical perspective grounded in real engineering work',
  'Pragmatic AI adoption focused on correctness, usability, and measurable value',
  'Quality built in through maintainability, security, and sustainable delivery',
  'Cross-domain capability from internal platforms to external AI products',
  'Implementation-aware consulting focused on practical execution',
]

const beliefs = [
  'Good engineering systems reduce friction without losing control',
  'AI should improve delivery, not introduce chaos',
  'Quality and security should be part of the workflow, not an afterthought',
  'The best technical decisions are both principled and practical',
]

const audiences = [
  'CTOs and engineering leaders',
  'Product and platform teams',
  'Companies modernizing delivery workflows',
  'Organizations exploring AI in software engineering or operations',
]

const ctaBlocks = [
  {
    title: 'Ready to improve your engineering platform?',
    text: 'Let’s discuss where your teams are losing time and how to create stronger delivery foundations.',
  },
  {
    title: 'Planning AI adoption in software delivery?',
    text: 'We help teams adopt AI coding tools with the right guardrails, workflows, and technical clarity.',
  },
  {
    title: 'Need a second opinion on code quality or security?',
    text: 'Get a focused assessment with actionable recommendations.',
  },
  {
    title: 'Want to design an AI assistant that solves real work?',
    text: 'Let’s define the use case, architecture, and implementation path.',
  },
]

const heroStats = [
  { label: 'Focus', value: 'Platform engineering' },
  { label: 'Delivery', value: 'AI enablement' },
  { label: 'Assurance', value: 'Quality and security' },
  { label: 'Systems', value: 'Advanced AI assistants' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Qodoxo AB home">
          <span className="brand-mark">Q</span>
          <span className="brand-text">
            <strong>Qodoxo AB</strong>
            <span>Platform engineering and AI consulting</span>
          </span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#products">SaaS Products</a>
          <a href="#about">About</a>
          <a className="nav-cta" href={bookingLink}>
            Book a discovery call
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Engineering better platforms, code, and AI systems.</p>
            <h1>
              Platform engineering, AI enablement, and software quality delivered
              with precision.
            </h1>
            <p className="hero-text">
              Qodoxo AB helps organizations build scalable engineering
              platforms, improve code quality and security, adopt AI coding
              tools responsibly, and design advanced AI assistants and
              agent-based systems.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href={bookingLink}>
                Book a discovery call
              </a>
              <a className="secondary-button" href="#services">
                Explore services
              </a>
            </div>

            <div className="signal-row" aria-label="Key value propositions">
              <div>
                <SignalIcon />
                <span>Strong platform engineering mindset</span>
              </div>
              <div>
                <SignalIcon />
                <span>Pragmatic AI adoption</span>
              </div>
              <div>
                <SignalIcon />
                <span>Quality and security built into delivery</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-glow visual-glow-a"></div>
            <div className="visual-glow visual-glow-b"></div>

            <div className="hero-surface hero-surface-primary">
              <div className="surface-label">Operating model</div>
              <strong>
                Build faster. Govern better. Ship with confidence.
              </strong>
              <p>
                Clear foundations, scalable workflows, built-in quality, and AI
                capabilities that support real delivery.
              </p>
            </div>

            <div className="hero-stats-grid">
              {heroStats.map((item) => (
                <div className="hero-stat" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="hero-surface hero-surface-secondary">
              <div className="surface-label">What Qodoxo improves</div>
              <ul>
                <li>Engineering leverage</li>
                <li>Delivery guardrails</li>
                <li>Developer trust in AI workflows</li>
                <li>Production-ready assistant systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="intro-section section">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Foundation</p>
            <h2>
              Engineering foundations for teams that want to move faster, the
              right way.
            </h2>
          </div>

          <div className="intro-layout">
            <div className="intro-copy">
              <p>
                Modern software teams need more than tools. They need clear
                engineering foundations, scalable workflows, built-in quality,
                and AI capabilities that actually support delivery. Qodoxo works
                with companies that want to reduce friction for developers,
                strengthen quality and security, and turn AI from a trend into a
                reliable capability.
              </p>
              <p>
                We combine platform thinking, software craftsmanship, and AI
                system design to help you make better technical decisions and
                implement them effectively.
              </p>
            </div>

            <aside className="intro-aside">
              <div>
                <span>Audience</span>
                <strong>CTOs, engineering leaders, product and platform teams</strong>
              </div>
              <div>
                <span>Approach</span>
                <strong>Clear, technical, confident, and delivery-focused</strong>
              </div>
              <div>
                <span>Outcome</span>
                <strong>Better engineering leverage with stronger governance</strong>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Practical consulting for modern engineering teams.</h2>
            <p className="section-copy">
              Qodoxo AB provides consulting and implementation support across
              platform engineering, AI enablement, software quality, security,
              and advanced AI systems.
            </p>
          </div>

          <div className="service-grid premium-grid">
            {serviceCards.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul className="feature-list">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {service.href ? (
                  <a
                    className="text-link"
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {service.linkLabel} <ArrowUpRightIcon />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-ribbon-section">
          <div className="cta-ribbon">
            <div>
              <p className="eyebrow">Advisory and execution</p>
              <h2>Not just strategy decks. Practical implementation support.</h2>
            </div>
            <a className="primary-button" href={bookingLink}>
              Book a discovery call
            </a>
          </div>
        </section>

        <section className="section why-section">
          <div className="section-heading compact">
            <p className="eyebrow">Why Qodoxo</p>
            <h2>Why work with Qodoxo</h2>
          </div>

          <div className="value-grid">
            {valuePoints.map((point) => (
              <article className="value-card" key={point}>
                <span className="value-icon">
                  <DiamondIcon />
                </span>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section product-section" id="products">
          <div className="product-panel">
            <div className="product-copy">
              <p className="eyebrow">SaaS Products</p>
              <h2>Create better, more tailored CVs with AI assistance.</h2>
              <p>
                GoGetCV is an AI-agentic CV generator and assistant designed to
                help users create stronger, more relevant CVs with less friction.
              </p>
              <ul className="feature-list feature-list-compact">
                <li>Tailored CV support</li>
                <li>AI-guided writing assistance</li>
                <li>Faster iteration and refinement</li>
                <li>Workflow designed for practical outcomes</li>
              </ul>
              <a
                className="secondary-button"
                href={gogetcvLink}
                target="_blank"
                rel="noreferrer"
              >
                Visit GoGetCV
              </a>
            </div>

            <div className="product-visual" aria-hidden="true">
              <div className="product-window">
                <div className="product-window-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="product-window-body">
                  <div className="window-card tall">
                    <span>AI workflow</span>
                    <strong>Guided CV tailoring</strong>
                  </div>
                  <div className="window-card">
                    <span>Draft quality</span>
                    <strong>Higher relevance</strong>
                  </div>
                  <div className="window-card">
                    <span>Iteration speed</span>
                    <strong>Reduced friction</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading compact">
            <p className="eyebrow">About</p>
            <h2>Technology consulting at the intersection of platforms and applied AI.</h2>
            <p className="section-copy">
              Qodoxo AB is a technology consultancy focused on platform
              engineering, AI enablement, software quality, security, and
              advanced AI systems.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <h3>What we believe</h3>
              <ul className="feature-list">
                {beliefs.map((belief) => (
                  <li key={belief}>{belief}</li>
                ))}
              </ul>
            </article>

            <article className="about-card">
              <h3>Who we work with</h3>
              <ul className="feature-list">
                {audiences.map((audience) => (
                  <li key={audience}>{audience}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section cta-blocks-section">
          <div className="cta-block-grid">
            {ctaBlocks.map((block) => (
              <article className="cta-block" key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Tell us what you are building, where the friction is, and what outcomes matter most.</h2>
            <p>
              Whether you need platform engineering support, AI enablement,
              code quality reviews, or help designing advanced AI assistants,
              Qodoxo would be glad to discuss your goals.
            </p>
          </div>

          <div className="contact-actions">
            <a className="primary-button" href={bookingLink}>
              Book a discovery call
            </a>
            <a className="contact-link" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Company information">
        <div className="footer-branding">
          <strong>Qodoxo AB</strong>
          <span>Nybodagatan 10, 171 42 Solna Sweden</span>
        </div>
        <div className="footer-meta">
          <span>Org.nr 556948-0493</span>
        </div>
      </footer>
    </div>
  )
}

function PlatformIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h10" />
      <path d="M18 15v4m-2-2h4" />
    </svg>
  )
}

function AiCodingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 8 4 12l4 4m8-8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.7 2.8 8.3 7 10 4.2-1.7 7-5.3 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7L15 10" />
    </svg>
  )
}

function AgentsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <path d="M9 10h6M9 14h3" />
      <path d="M12 2v3m0 14v3m10-10h-3M5 12H2" />
    </svg>
  )
}

function ProductIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5 12 3l8 4.5-8 4.5L4 7.5Z" />
      <path d="M4 12.5 12 17l8-4.5" />
      <path d="M4 16.5 12 21l8-4.5" />
    </svg>
  )
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 9-8 9-8-9 8-9Z" />
    </svg>
  )
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export default App
