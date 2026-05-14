function Projects() {
  const projects = [
    {
      title: 'Codert',
      status: 'stable',
      year: '2025',
      role: 'Backend Developer',
      org: 'IPT Project, UDOM',
      desc: 'An online coding platform that automates grading for programming assignments. Instructors create test cases, students submit code, and the platform grades submissions automatically against those cases. Handles sandboxed execution for C++, JavaScript, Java, and Python.',
      highlights: [
        'Rewrote legacy Java Servlet codebase to Spring Boot',
        'Built sandboxed code execution engine with timeout and memory limits',
        'Integrated Supabase for real-time submission tracking',
        'Deployed backend on Fly.io with auto-scaling',
      ],
      stack: 'Spring Boot, Java, Supabase, Fly.io, Docker',
      url: 'https://codert.netlify.app',
      github: 'https://github.com/amon/codert',
    },
    {
      title: 'Xhubantu',
      status: 'active',
      year: '2024 — Present',
      role: 'Co-founder & Lead Developer',
      org: 'Xhubantu Inc.',
      desc: 'An event-based social platform that combines event discovery, ticketing, and media sharing. Designed to move social interaction from feeds to physical gatherings. Includes real-time chat, event feed, and payment integration for ticket sales.',
      highlights: [
        'Architected full-stack platform from zero to production',
        'Built real-time messaging with WebSockets',
        'Integrated mobile money payments for East African markets',
        'Grew to 500+ active users in first 3 months',
      ],
      stack: 'React, Node.js, PostgreSQL, Redis, Socket.io',
      url: 'https://xhubantu.com',
      github: null,
    },
    {
      title: 'Tanzania Open Data API',
      status: 'stable',
      year: '2024',
      role: 'Solo Developer',
      org: 'Open Source',
      desc: 'A RESTful API aggregating publicly available government datasets for Tanzania. Provides normalized access to census data, regional statistics, and economic indicators. Used by 3 university research projects.',
      highlights: [
        'Aggregated 15+ government datasets into unified schema',
        'Built rate-limiting and caching for 10k+ daily requests',
        'Published comprehensive OpenAPI documentation',
        '100% test coverage on core endpoints',
      ],
      stack: 'Python, FastAPI, PostgreSQL, Redis, Nginx',
      url: 'https://api.tzdata.dev',
      github: 'https://github.com/amon/tz-open-data',
    },
    {
      title: 'Dodoma Transit',
      status: 'active',
      year: '2025',
      role: 'Solo Developer',
      org: 'Personal',
      desc: 'A real-time bus tracking web app for Dodoma city public transport. Uses GPS data from conductor phones to estimate arrival times and crowd levels at major stops.',
      highlights: [
        'Reverse-engineered bus route data from public timetables',
        'Built ETA prediction model using historical GPS traces',
        'Progressive Web App with offline route maps',
        'Average prediction accuracy within 3 minutes',
      ],
      stack: 'React, Firebase, Mapbox GL, TensorFlow.js',
      url: 'https://dodoma-transit.web.app',
      github: 'https://github.com/amon/dodoma-transit',
    },
    {
      title: 'Portfolio v2',
      status: 'active',
      year: '2025',
      role: 'Designer & Developer',
      org: 'Personal',
      desc: 'This site. A modern portfolio with an interactive matrix-cascade hero, clean navigation, and a terminal aesthetic. Built to explore creative frontend techniques without heavy dependencies.',
      highlights: [
        'Custom Canvas API character cascade engine',
        'Zero external UI libraries — pure CSS + React',
        'Dark/light theme with CSS custom properties',
        'Sub-100KB initial JS bundle',
      ],
      stack: 'React, Vite, Canvas API, CSS Grid',
      url: '#',
      github: 'https://github.com/amon/portfolio',
    },
  ]

  const statusBadge = (s) => {
    if (s === 'stable') return <span className="badge badge-ok">stable</span>
    if (s === 'active') return <span className="badge badge-warn">active</span>
    return <span className="badge">{s}</span>
  }

  return (
    <div>
      <div className="prompt-line">
        <span className="prompt">
          <span className="prompt-user">amon</span>
          <span className="prompt-arrow">@</span>
          <span className="prompt-host">portfolio</span>
          <span className="prompt-arrow">:</span>
          <span className="prompt-path">~/projects</span>
          <span className="prompt-arrow">$</span>
        </span>
        <span>ls -la</span>
        <span className="blink">_</span>
      </div>

      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Selected work. Systems built under real constraints.
      </p>

      {projects.map((p, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <span>{p.title.toLowerCase()}</span>
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 400 }}>{p.year}</span>
              {statusBadge(p.status)}
            </span>
          </div>
          <div className="card-body">
            <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '0.7rem' }}>
              {p.role} &bull; {p.org}
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              {p.desc}
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.02em' }}>
                Highlights
              </div>
              <ul className="list">
                {p.highlights.map((h, hi) => (
                  <li key={hi}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="term-block">
              <span className="term-comment">// stack</span>
              <br />
              <span className="term-val">{p.stack}</span>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.88rem', flexWrap: 'wrap' }}>
              <a href={p.url} target="_blank" rel="noreferrer">
                [live] {p.url.replace('https://', '')}
              </a>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  [source] {p.github.replace('https://', '')}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
