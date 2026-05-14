function Notes() {
  const notes = [
    {
      title: 'On Building in Public',
      date: '2025-03-14',
      tags: ['meta', 'shipping'],
      preview: 'Why shipping early and often beats perfect plans.',
    },
    {
      title: 'The Stack You Choose Matters Less Than You Think',
      date: '2025-02-28',
      tags: ['opinion', 'architecture'],
      preview: 'On pragmatism over dogma in technology selection.',
    },
    {
      title: 'Designing for the Next Billion Users',
      date: '2025-01-20',
      tags: ['design', 'africa'],
      preview: 'Lessons from building for low-bandwidth, mobile-first Africa.',
    },
  ]

  return (
    <div>
      <h1>Notes</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Essays and reflections on technology, design, and building.
      </p>

      <ul className="link-list">
        {notes.map((note, i) => (
          <li key={i}>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <span>
                <span style={{ fontWeight: 600, fontSize: '1rem', display: 'block', marginBottom: '0.2rem', color: 'var(--fg)' }}>
                  {note.title}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                  {note.preview}
                </span>
                <span style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem' }}>
                  {note.tags.map((t) => (
                    <span className="badge" key={t}>{t}</span>
                  ))}
                </span>
              </span>
              <span className="link-meta">{note.date}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <div className="card-header">drafts</div>
        <div className="card-body">
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 0 }}>
            Several drafts in progress. Writing is thinking, and thinking takes time.
            Essays are published when they are ready, not when a schedule demands it.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Notes
