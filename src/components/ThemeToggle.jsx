function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle} className="theme-toggle">
      [{theme === 'light' ? 'dark' : 'light'}]
    </button>
  )
}

export default ThemeToggle
