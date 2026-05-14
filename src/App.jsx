import { useState, useEffect } from 'react'
import PillNav from './components/PillNav'
import About from './pages/About'
import Projects from './pages/Projects'
import Notes from './pages/Notes'
import Contact from './pages/Contact'

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeTab, setActiveTab] = useState('about')

  useEffect(() => {
    const saved = localStorage.getItem('amon-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('amon-theme', next)
  }

  const tabs = {
    about: <About />,
    projects: <Projects />,
    notes: <Notes />,
    contact: <Contact />,
  }

  return (
    <div className="app-layout">
      <main className="main-area">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Amon</h1>
            <p className="hero-subtitle">Full-Stack Developer &mdash; building systems that work</p>
            <p className="hero-description">
              I care about clean architecture, pragmatic design, and shipping code that solves real problems.
              Based in Dodoma, Tanzania.
            </p>
          </div>
        </div>

        <PillNav
          active={activeTab}
          onChange={setActiveTab}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <div className="content">
          {tabs[activeTab]}
        </div>
      </main>
    </div>
  )
}

export default App
