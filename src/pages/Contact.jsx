function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Open to collaborations, questions, and interesting problems. The best way to reach me is email.
      </p>

      <div className="section">
        <div className="section-label">contact</div>
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

      <div className="section">
        <div className="section-label">gpg key</div>
        <div className="code-block">
          <span className="cmt">// key available on request</span><br />
          <span className="key">pub</span>   <span className="val">rsa4096</span> 2025-01-15 <span className="str">[SC]</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">ABCD 1234 EFGH 5678 IJKL 9012 MNOP 3456 QRST 7890</span><br />
          <span className="key">uid</span>   <span className="str">Amon &lt;amon@example.com&gt;</span><br />
          <span className="key">sub</span>   <span className="val">rsa4096</span> 2025-01-15 <span className="str">[E]</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
