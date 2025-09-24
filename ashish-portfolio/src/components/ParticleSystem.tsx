'use client'

import { useState, useEffect, useRef } from 'react'

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    color: string
    life: number
  }>>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)
  const [isVisible, setIsVisible] = useState(true)

  // Check if user prefers reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setIsVisible(!prefersReducedMotion)
    
    // Listen for changes in user preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsVisible(!e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles - reduced from 50 to 20 for better performance
    const colors = ['#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981']
    particlesRef.current = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, // Reduced velocity
      vy: (Math.random() - 0.5) * 0.3, // Reduced velocity
      size: Math.random() * 2 + 1, // Smaller particles
      color: colors[Math.floor(Math.random() * colors.length)],
      life: Math.random() * 100 + 50
    }))

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop with throttling
    let lastTime = 0
    const fps = 30 // Limit to 30 FPS for better performance
    
    const animate = (timestamp: number) => {
      if (!ctx) return

      // Throttle animation to specified FPS
      if (timestamp - lastTime < 1000 / fps) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastTime = timestamp

      // Clear canvas with a semi-transparent fill for trail effect
      ctx.fillStyle = 'rgba(17, 24, 39, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Apply mouse repulsion only when mouse is moving
        const dx = particle.x - mouseRef.current.x
        const dy = particle.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 80) { // Reduced range
          const force = (80 - distance) / 80
          particle.vx += (dx / distance) * force * 0.3 // Reduced force
          particle.vy += (dy / distance) * force * 0.3 // Reduced force
        }

        // Boundary wrapping
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Decrease life
        particle.life -= 0.05 // Slower decay

        // Reset particle if life is low
        if (particle.life <= 0) {
          particlesRef.current[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: Math.random() * 100 + 50
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections between particles - reduced connection range for better performance
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < Math.min(i + 3, particlesRef.current.length); j++) { // Reduced from 5 to 3
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 60) { // Reduced from 80 to 60
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.1 * (1 - distance / 60)})` // Adjusted ratio
            ctx.lineWidth = 0.3 // Thinner lines
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

export default ParticleSystem