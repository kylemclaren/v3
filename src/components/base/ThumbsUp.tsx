import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'motion/react'
import confetti from 'canvas-confetti'

const UPSTASH_URL = import.meta.env.PUBLIC_UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN_RO = import.meta.env.PUBLIC_UPSTASH_REDIS_REST_TOKEN_RO
const UPSTASH_TOKEN = import.meta.env.PUBLIC_UPSTASH_REDIS_REST_TOKEN

async function getCount(): Promise<number> {
  try {
    const res = await fetch(`${UPSTASH_URL}/get/thumbs-up-count`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN_RO}` },
    })
    const data = await res.json()
    return data.result ? parseInt(data.result, 10) : 22_438
  } catch {
    return 22_438
  }
}

async function incrementCount(): Promise<number> {
  try {
    const res = await fetch(`${UPSTASH_URL}/incr/thumbs-up-count`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    })
    const data = await res.json()
    return data.result ?? 0
  } catch {
    return 0
  }
}

function fireConfetti(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  const x = (rect.left + rect.width / 2) / window.innerWidth
  const y = (rect.top + rect.height / 2) / window.innerHeight

  const defaults = { origin: { x, y }, disableForReducedMotion: true }

  confetti({
    ...defaults,
    particleCount: 30,
    spread: 60,
    startVelocity: 25,
    colors: ['#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb923c', '#facc15', '#34d399', '#60a5fa'],
  })
  confetti({
    ...defaults,
    particleCount: 20,
    spread: 100,
    startVelocity: 35,
    decay: 0.92,
    scalar: 0.8,
    colors: ['#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb923c', '#facc15', '#34d399', '#60a5fa'],
  })
}

export default function ThumbsUp() {
  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [showPlus, setShowPlus] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const motionCount = useMotionValue(0)
  const springCount = useSpring(motionCount, { damping: 30, stiffness: 200 })
  const displayCount = useTransform(springCount, (v) => Math.round(v))
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const hasClicked = localStorage.getItem('thumbs-up-clicked')
    if (hasClicked) setClicked(true)

    getCount().then((val) => {
      setCount(val)
      motionCount.set(val)
    })
  }, [])

  useEffect(() => {
    const unsubscribe = displayCount.on('change', (v) => {
      if (countRef.current) countRef.current.textContent = v.toLocaleString()
    })
    return unsubscribe
  }, [displayCount])

  const handleClick = useCallback(() => {
    if (clicked) return
    setClicked(true)
    setShowPlus(true)
    localStorage.setItem('thumbs-up-clicked', 'true')

    // Optimistic update
    const newCount = count + 1
    setCount(newCount)
    motionCount.set(newCount)

    // Persist to Upstash
    incrementCount().then((serverCount) => {
      if (serverCount > 0) {
        setCount(serverCount)
        motionCount.set(serverCount)
      }
    })

    if (containerRef.current) {
      fireConfetti(containerRef.current)
    }

    setTimeout(() => setShowPlus(false), 800)
  }, [clicked, count, motionCount])

  return (
    <div ref={containerRef} className="relative inline-flex items-center group/thumbs">
      {!clicked && (
        <div className="absolute right-full mr-3 opacity-0 group-hover/thumbs:opacity-100 transition-all duration-200 translate-x-1 group-hover/thumbs:translate-x-0 pointer-events-none">
          <div className="relative bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg">
            Let me know you stopped by 👋
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
          </div>
        </div>
      )}
      <motion.button
        onClick={handleClick}
        disabled={clicked}
        whileTap={!clicked ? { scale: 0.85 } : {}}
        className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border backdrop-blur-md transition-colors duration-200 ${
          clicked
            ? 'border-violet-500/30 bg-violet-500/10 cursor-default'
            : 'border-border/50 bg-background/40 hover:border-violet-500/50 hover:bg-violet-500/10 cursor-pointer'
        }`}
      >
        <motion.span
          animate={clicked ? { rotate: [0, -20, 20, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="text-lg"
        >
          👍
        </motion.span>
        <span ref={countRef} className="text-sm font-mono text-foreground/70 tabular-nums min-w-[1ch]">
          {count.toLocaleString()}
        </span>
        <AnimatePresence>
          {showPlus && (
            <motion.span
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -20 }}
              exit={{ opacity: 0 }}
              className="absolute -top-2 right-2 text-xs font-bold text-violet-400"
            >
              +1
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
