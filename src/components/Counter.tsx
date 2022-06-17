import { animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Counter({
  from,
  to,
  duration = 2,
  suffix,
}: CounterItemProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current as HTMLSpanElement

    const controls = animate(from, to, {
      duration,
      ease: 'circOut',
      onUpdate(value) {
        element.textContent = `${value.toFixed(0)}${suffix}`
      },
    })

    return () => controls.stop()
  }, [from, to, duration])

  return <strong className="text-4xl font-bold" ref={ref} />
}
