import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function StatCounter({ end, suffix = '', label }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const startTime = performance.now()
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end])

  return (
    <div ref={ref} data-testid="stat-counter" className="text-center">
      <div className="font-heading font-[900] text-4xl md:text-5xl text-saffron">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-text-muted text-sm font-medium mt-2">{label}</p>
    </div>
  )
}
