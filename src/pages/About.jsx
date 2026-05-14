function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Full-stack developer focused on building systems that work. I care about clean architecture,
        pragmatic design, and shipping code that solves real problems.
      </p>
      <p style={{ marginBottom: '1.5rem' }}>
        Currently based in Dodoma, Tanzania. Studying Computer Science at the University of Dodoma.
        Most of my work lives at the intersection of backend infrastructure and user-facing interfaces.
      </p>

      <div className="section">
        <div className="section-label">whoami</div>
        <table className="data-table">
          <tbody>
            <tr><td>Name</td><td>Amon</td></tr>
            <tr><td>Role</td><td>Full-Stack Developer</td></tr>
            <tr><td>Location</td><td>Dodoma, Tanzania</td></tr>
            <tr><td>Education</td><td>BSc Computer Science, University of Dodoma</td></tr>
            <tr><td>Languages</td><td>English, Swahili</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-label">skills</div>
        <div className="skills-row">
          <div className="skill-group">
            <div className="skill-label">languages</div>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Java</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-label">backend</div>
            <div className="skill-tags">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-label">frontend</div>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML/CSS</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-label">tools</div>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Figma</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">philosophy</div>
        <p>
          I believe software should be boring in the right ways and exciting in the right places.
          Boring infrastructure means it works without surprise. Exciting interfaces mean people
          actually want to use it. The gap between those two is where good engineering lives.
        </p>
        <p style={{ marginBottom: 0 }}>
          I build for durability over novelty. The best code is the code you do not have to think about.
        </p>
      </div>
    </div>
  )
}

export default About
