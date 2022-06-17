import { motion, MotionProps } from 'framer-motion'
import { useMemo } from 'react'

interface IProps {
  src?: string
  content?: string
}

export default function PrizeItem({ content, src }: IProps) {
  const motionProps = useMemo<MotionProps>(
    () => ({
      initial: { opacity: 0, translateY: '30px' },
      transition: { ease: 'easeOut', duration: 0.7, delay: 0.2 },
      whileInView: { opacity: 1, translateY: '0px' },
      viewport: { once: true },
    }),
    [],
  )

  return (
    <motion.div {...motionProps} className="mr-[39px]">
      <div className="flex w-full items-center h-14">
        <div className="mr-2 flex items-center relative">
          <img src={src} width="54px" height="54px" />
        </div>
        <p className="text-sm whitespace-pre-line font-bold text-prize-color">
          {content}
        </p>
      </div>
    </motion.div>
  )
}
