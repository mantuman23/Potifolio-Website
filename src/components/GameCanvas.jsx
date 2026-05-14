import { useRef, useEffect } from 'react'

const CODE_SNIPPETS = [
  // C++
  '#include <iostream>', 'int main() {', 'std::cout <<', 'return 0;', 'template<typename T>',
  'std::vector<int>', 'public:', 'private:', 'class Ship {', 'virtual void',
  'std::make_unique', 'const&', 'nullptr', 'constexpr', 'auto*',
  // Java
  'public static void', 'System.out.println', 'class Main {', 'extends Thread', 'import java.util',
  'ArrayList<>', '@Override', 'synchronized', 'final String', 'new Object()',
  'throw new Exception', 'implements Runnable', 'static final', 'Integer.parseInt', 'Collections.sort',
  // JavaScript
  'const ship = ', '=> {', 'async function', 'await fetch(', 'console.log(',
  'export default', 'import React', 'useEffect(() =>', '.map(item =>', 'Promise.all(',
  'module.exports', 'JSON.parse(', 'document.querySelector', 'addEventListener', 'setTimeout(()',
]

function GameCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const rafRef = useRef(null)
  const stateRef = useRef({
    particles: [],
    stars: [],
    frame: 0,
    ship: { x: 0, y: 0, angle: 0, bob: 0 },
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const state = stateRef.current

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Generate stars
      state.stars = []
      for (let i = 0; i < 60; i++) {
        state.stars.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.3 + 0.1,
          twinkle: Math.random() * Math.PI * 2,
        })
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const spawnCodeParticle = (sx, sy, angle, isBurst = false) => {
      const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]
      const speed = isBurst ? 2 + Math.random() * 4 : 1.5 + Math.random() * 2.5
      const spread = isBurst ? 0.8 : 0.3
      const a = angle + (Math.random() - 0.5) * spread

      state.particles.push({
        x: sx,
        y: sy,
        vx: Math.cos(a) * speed,
        vy: Math.sin(a) * speed,
        text: snippet,
        life: isBurst ? 80 : 120,
        maxLife: isBurst ? 80 : 120,
        size: 9 + Math.random() * 4,
        color: Math.random() < 0.33 ? 'cpp' : Math.random() < 0.5 ? 'java' : 'js',
      })
    }

    const drawShip = (x, y, angle, isFiring) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
      const bodyColor = isDark ? '#c8c8d0' : '#1a1a22'
      const accent = isDark ? '#00d4aa' : '#007a5e'
      const glow = isDark ? 'rgba(0, 212, 170, 0.3)' : 'rgba(0, 122, 94, 0.2)'
      const engineColor = isDark ? '#ff6644' : '#cc4422'

      // Engine glow
      const enginePulse = Math.sin(state.frame * 0.2) * 0.3 + 0.7
      ctx.fillStyle = engineColor
      ctx.globalAlpha = enginePulse * 0.6
      ctx.beginPath()
      ctx.moveTo(-18, -4)
      ctx.lineTo(-28 - Math.random() * 6, 0)
      ctx.lineTo(-18, 4)
      ctx.closePath()
      ctx.fill()
      ctx.globalAlpha = 1

      // Ship body
      ctx.fillStyle = bodyColor
      ctx.beginPath()
      ctx.moveTo(18, 0)
      ctx.lineTo(-12, -10)
      ctx.lineTo(-8, 0)
      ctx.lineTo(-12, 10)
      ctx.closePath()
      ctx.fill()

      // Wings
      ctx.fillStyle = isDark ? '#4a4a58' : '#9a9aa4'
      ctx.beginPath()
      ctx.moveTo(-4, -8)
      ctx.lineTo(-14, -16)
      ctx.lineTo(-8, -6)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(-4, 8)
      ctx.lineTo(-14, 16)
      ctx.lineTo(-8, 6)
      ctx.closePath()
      ctx.fill()

      // Cockpit
      ctx.fillStyle = accent
      ctx.globalAlpha = 0.9
      ctx.beginPath()
      ctx.ellipse(2, 0, 5, 3, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1

      // Shield glow on hover
      if (isFiring) {
        ctx.strokeStyle = glow
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(0, 0, 28, 0, Math.PI * 2)
        ctx.stroke()
      }

      ctx.restore()
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const mouse = mouseRef.current

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
      const bg = isDark ? '#0f0f13' : '#fafafc'
      const starColor = isDark ? '#555560' : '#b0b0b8'

      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      state.frame++

      // Draw stars
      state.stars.forEach((star) => {
        star.y += star.speed
        if (star.y > h) {
          star.y = 0
          star.x = Math.random() * w
        }
        const twinkle = Math.sin(state.frame * 0.05 + star.twinkle) * 0.4 + 0.6
        ctx.fillStyle = starColor
        ctx.globalAlpha = twinkle * 0.6
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1

      // Ship position (center with bobbing)
      const centerX = w / 2
      const centerY = h / 2
      const bobY = Math.sin(state.frame * 0.03) * 4
      const shipX = centerX
      const shipY = centerY + bobY

      // Mouse angle
      const dx = mouse.x - shipX
      const dy = mouse.y - shipY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const isHovering = dist < 120 && mouse.active

      let targetAngle = 0
      if (mouse.active) {
        targetAngle = Math.atan2(dy, dx)
      }
      state.ship.angle += (targetAngle - state.ship.angle) * 0.08

      // Spawn particles when hovering
      if (isHovering) {
        const fireRate = 3 // particles per frame when hovering
        for (let i = 0; i < fireRate; i++) {
          spawnCodeParticle(shipX + Math.cos(state.ship.angle) * 18, shipY + Math.sin(state.ship.angle) * 18, state.ship.angle, true)
        }
        // Also spawn burst particles outward
        if (state.frame % 8 === 0) {
          for (let i = 0; i < 6; i++) {
            const burstAngle = (Math.PI * 2 / 6) * i + state.frame * 0.1
            spawnCodeParticle(shipX, shipY, burstAngle, true)
          }
        }
      } else {
        // Gentle idle emission
        if (state.frame % 15 === 0) {
          spawnCodeParticle(shipX + Math.cos(state.ship.angle) * 18, shipY + Math.sin(state.ship.angle) * 18, state.ship.angle, false)
        }
      }

      // Update & draw particles
      state.particles = state.particles.filter((p) => {
        p.x += p.vx
        p.y += p.vy
        p.life--

        if (p.life <= 0) return false

        const alpha = p.life / p.maxLife
        const drift = Math.sin(state.frame * 0.05 + p.x) * 0.3
        p.x += drift

        let color
        if (p.color === 'cpp') {
          color = isDark ? '#8899cc' : '#5577aa'
        } else if (p.color === 'java') {
          color = isDark ? '#cc9977' : '#aa7755'
        } else {
          color = isDark ? '#ccdd88' : '#99aa55'
        }

        ctx.font = `500 ${p.size}px "Space Mono", monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = color
        ctx.globalAlpha = alpha * 0.85
        ctx.fillText(p.text, p.x, p.y)

        // Small glow behind text
        ctx.globalAlpha = alpha * 0.12
        ctx.fillRect(p.x - ctx.measureText(p.text).width / 2 - 4, p.y - p.size / 2 - 2, ctx.measureText(p.text).width + 8, p.size + 4)

        ctx.globalAlpha = 1
        return true
      })

      // Draw ship on top
      drawShip(shipX, shipY, state.ship.angle, isHovering)

      // HUD text
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      ctx.font = `600 11px "Space Mono", monospace`

      if (isHovering) {
        ctx.fillStyle = isDark ? '#00d4aa' : '#007a5e'
        ctx.fillText('SYSTEM: FIRING', 14, 14)
        ctx.fillText(`PARTICLES: ${state.particles.length}`, 14, 30)
      } else {
        ctx.fillStyle = isDark ? '#5a5a68' : '#8a8a96'
        ctx.globalAlpha = 0.5 + Math.sin(state.frame * 0.03) * 0.2
        ctx.fillText('hover to fire code', 14, 14)
        ctx.globalAlpha = 1
      }

      // Target reticle when mouse is active
      if (mouse.active && !isHovering) {
        ctx.strokeStyle = isDark ? 'rgba(0, 212, 170, 0.15)' : 'rgba(0, 122, 94, 0.12)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(mouse.x - 25, mouse.y)
        ctx.lineTo(mouse.x + 25, mouse.y)
        ctx.moveTo(mouse.x, mouse.y - 25)
        ctx.lineTo(mouse.x, mouse.y + 25)
        ctx.stroke()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '38vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          cursor: 'crosshair',
        }}
      />
    </div>
  )
}

export default GameCanvas
