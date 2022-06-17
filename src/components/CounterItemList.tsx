import { motion, MotionProps } from 'framer-motion'
import { useMemo } from 'react'
import Counter from './Counter'

interface IProps {
  items: {
    counterItemProps: CounterItemProps
    additionalText?: string
  }[]
}

export default function CounterItemList({ items = [] }: IProps) {
  const motionProps = useMemo<MotionProps>(
    () => ({
      initial: { opacity: 0, translateY: '30px' },
      transition: { ease: 'easeOut', duration: 0.7, delay: 0.1 },
      whileInView: { opacity: 1, translateY: '0px' },
      viewport: { once: true },
    }),
    [],
  )

  return (
    <motion.div
      {...motionProps}
      className="mb-10"
    >
      {items?.map(({ counterItemProps, additionalText }) => (
        <div className="mb-5 tracking-[-1px]">
          <Counter {...counterItemProps} />
          <span className="text-4xl">{additionalText}</span>
        </div>
      ))}
    </motion.div>
  )
}
