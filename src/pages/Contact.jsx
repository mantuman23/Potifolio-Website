function Contact() {
  return (
    <div>
      <div className="prompt-line">
        <span className="prompt">
          <span className="prompt-user">amon</span>
          <span className="prompt-arrow">@</span>
          <span className="prompt-host">portfolio</span>
          <span className="prompt-arrow">:</span>
          <span className="prompt-path">~/contact</span>
          <span className="prompt-arrow">$</span>
        </span>
        <span>cat contact.txt</span>
        <span className="blink">_</span>
      </div>

      <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Open to collaborations, questions, and interesting problems. The best way to reach me is email.
      </p>

      <div className="card">
        <div className="card-header">contact --list</div>
        <div className="card-body">
          <table className="data-table">
            <tbody>
              <tr>
                <td>Email</td>
                <td><a href="mailto:amon@example.com">amon@example.com</a></td>
              </tr>
              <tr>
                <td>GitHub</td>
                <td><a href="https://github.com/amon" target="_blank" rel="noreferrer">github.com/amon</a></td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td><a href="https://twitter.com/amon" target="_blank" rel="noreferrer">twitter.com/amon</a></td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Dodoma, Tanzania</td>
              </tr>
              <tr>
                <td>Status</td>
                <td><span className="badge badge-ok">available</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-header">gpg --fingerprint</div>
        <div className="card-body">
          <div className="term-block">
            <span className="term-comment">// key available on request</span>
            <br />
            <span className="term-key">pub</span>   <span className="term-val">rsa4096</span> 2025-01-15 <span className="term-str">[SC]</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="term-str">ABCD 1234 EFGH 5678 IJKL 9012 MNOP 3456 QRST 7890</span>
            <br />
            <span className="term-key">uid</span>   <span className="term-str">Amon &lt;amon@example.com&gt;</span>
            <br />
            <span className="term-key">sub</span>   <span className="term-val">rsa4096</span> 2025-01-15 <span className="term-str">[E]</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
