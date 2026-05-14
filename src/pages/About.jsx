function About() {
  return (
    <div>
      <div className="prompt-line">
        <span className="prompt">
          <span className="prompt-user">amon</span>
          <span className="prompt-arrow">@</span>
          <span className="prompt-host">portfolio</span>
          <span className="prompt-arrow">:</span>
          <span className="prompt-path">~/about</span>
          <span className="prompt-arrow">$</span>
        </span>
        <span>cat about.md</span>
        <span className="blink">_</span>
      </div>

      <div className="ascii-art">
{`    ___    ____  ___ __  __
   /   |  / __ \/   |  \/  /
  / /| | / / / / /| | \/\_/ 
 / ___ |/ /_/ / ___ |  / /  
/_/  |_/_____/_/  |_/ /_/   `}
      </div>

      <p>
        Full-stack developer focused on building systems that work. I care about clean architecture,
        pragmatic design, and shipping code that solves real problems.
      </p>

      <p>
        Currently based in Dodoma, Tanzania. Studying Computer Science at the University of Dodoma.
        Most of my work lives at the intersection of backend infrastructure and user-facing interfaces.
      </p>

      <div className="card">
        <div className="card-header">whoami</div>
        <div className="card-body">
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
      </div>

      <div className="card">
        <div className="card-header">skills --list</div>
        <div className="card-body">
          <div className="term-block">
            <div><span className="term-key">languages</span>   <span className="term-val">Python</span> <span className="term-val">JavaScript</span> <span className="term-val">TypeScript</span> <span className="term-val">Java</span></div>
            <div><span className="term-key">backend</span>     <span className="term-val">Spring Boot</span> <span className="term-val">Node.js</span> <span className="term-val">PostgreSQL</span></div>
            <div><span className="term-key">frontend</span>    <span className="term-val">React</span> <span className="term-val">HTML/CSS</span></div>
            <div><span className="term-key">tools</span>       <span className="term-val">Git</span> <span className="term-val">Docker</span> <span className="term-val">Linux</span> <span className="term-val">Figma</span></div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">philosophy</div>
        <div className="card-body">
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
    </div>
  )
}

export default About
