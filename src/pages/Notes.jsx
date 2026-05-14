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
      <div className="section">
        <div className="section-label">notes</div>
        <p>Essays and reflections on technology, design, and building.</p>
      </div>

      {notes.map((note, i) => (
        <div className="note-item" key={i}>
          <div className="note-item-title">{note.title}</div>
          <div className="note-item-preview">{note.preview}</div>
          <div className="note-item-footer">
            <div className="note-item-tags">
              {note.tags.map((t) => (
                <span className="note-tag" key={t}>{t}</span>
              ))}
            </div>
            <span className="note-item-date">{note.date}</span>
          </div>
        </div>
      ))}

      <div className="section" style={{ marginTop: '2.5rem' }}>
        <div className="section-label">drafts</div>
        <p style={{ marginBottom: '0.8rem' }}>
          Several drafts in progress. Writing is thinking, and thinking takes time.
          Essays are published when they are ready, not when a schedule demands it.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <span style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>~ essay on distributed systems patterns in practice</span>
          <span style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>~ reflections on teaching programming to beginners</span>
          <span style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>~ building for resilience in low-resource environments</span>
        </div>
      </div>
    </div>
  )
}

export default Notes
