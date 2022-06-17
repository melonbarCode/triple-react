import { motion, MotionProps } from 'framer-motion'
import { useMemo } from 'react'

export default function AppImage() {
  const motionProps = useMemo<MotionProps>(
    () => ({
      initial: { opacity: 0, translateY: '30px' },
      transition: { ease: 'easeOut', duration: 0.7 },
      whileInView: { opacity: 1, translateY: '0px' },
      viewport: { once: true },
    }),
    [],
  )

  return (
    <motion.div {...motionProps} className="w-[400px] h-[338px] relative">
      <img
        className="object-contain"
        src={'/main-banner/triple2x.png'}
        width="100%"
        height="100%"
      />
      <div className='absolute text-center bottom-10 w-full text-app-summary-color text-[15px]'>2021년 12월 기준</div>
    </motion.div>
  )
}
