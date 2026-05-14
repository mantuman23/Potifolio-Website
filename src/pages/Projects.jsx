function Projects() {
  const projects = [
    {
      title: 'Codert',
      status: 'stable',
      year: '2025',
      role: 'Backend Developer',
      org: 'IPT Project, UDOM',
      desc: 'An online coding platform that automates grading for programming assignments. Instructors create test cases, students submit code, and the platform grades submissions automatically against those cases.',
      highlights: [
        'Rewrote legacy Java Servlet codebase to Spring Boot',
        'Built sandboxed code execution engine with timeout and memory limits',
        'Integrated Supabase for real-time submission tracking',
        'Deployed backend on Fly.io with auto-scaling',
      ],
      stack: 'Spring Boot, Java, Supabase, Fly.io, Docker',
      url: 'https://codert.netlify.app',
      github: 'https://github.com/amon/codert',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    },
    {
      title: 'Xhubantu',
      status: 'active',
      year: '2024 \u2014 Present',
      role: 'Co-founder & Lead Developer',
      org: 'Xhubantu Inc.',
      desc: 'An event-based social platform that combines event discovery, ticketing, and media sharing. Designed to move social interaction from feeds to physical gatherings.',
      highlights: [
        'Architected full-stack platform from zero to production',
        'Built real-time messaging with WebSockets',
        'Integrated mobile money payments for East African markets',
        'Grew to 500+ active users in first 3 months',
      ],
      stack: 'React, Node.js, PostgreSQL, Redis, Socket.io',
      url: 'https://xhubantu.com',
      github: null,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    },
    {
      title: 'Tanzania Open Data API',
      status: 'stable',
      year: '2024',
      role: 'Solo Developer',
      org: 'Open Source',
      desc: 'A RESTful API aggregating publicly available government datasets for Tanzania. Provides normalized access to census data, regional statistics, and economic indicators.',
      highlights: [
        'Aggregated 15+ government datasets into unified schema',
        'Built rate-limiting and caching for 10k+ daily requests',
        'Published comprehensive OpenAPI documentation',
        '100% test coverage on core endpoints',
      ],
      stack: 'Python, FastAPI, PostgreSQL, Redis, Nginx',
      url: 'https://api.tzdata.dev',
      github: 'https://github.com/amon/tz-open-data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    },
  ]

  const statusBadge = (s) => {
    if (s === 'stable') return <span className="badge badge-green">stable</span>
    if (s === 'active') return <span className="badge badge-yellow">active</span>
    return <span className="badge">{s}</span>
  }

  return (
    <div>
      <div className="section">
        <div className="section-label">projects</div>
        <p>Selected work. Systems built under real constraints.</p>
      </div>

      {projects.map((p, i) => (
        <div className="card" key={i}>
          <img className="card-image" src={p.image} alt={p.title} loading="lazy" />
          <div className="card-header">
            <div>
              <div className="card-title">{p.title}</div>
              <div className="card-meta">{p.role} &middot; {p.org} &middot; {p.year}</div>
            </div>
            {statusBadge(p.status)}
          </div>
          <div className="card-desc">{p.desc}</div>
          <ul className="card-highlights">
            {p.highlights.map((h, hi) => (
              <li key={hi}>{h}</li>
            ))}
          </ul>
          <div className="card-stack">{p.stack}</div>
          <div className="card-links">
            <a href={p.url} target="_blank" rel="noreferrer">
              {p.url.replace('https://', '')}
            </a>
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer">
                source
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
