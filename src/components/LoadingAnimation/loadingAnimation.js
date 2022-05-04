import './loadingAnimation.css'
import { motion } from 'framer-motion'

export default function App() {
  let duration_delay = 1.2
  const drawCircle = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: 0.7,
          type: 'spring',
          duration: duration_delay,
          bounce: 0,
        },
      },
    },
  }
  const drawPath = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: duration_delay + 0.2, duration: 0.4 },
    },
  }
  return (
    <motion.svg
      width="228"
      height="228"
      viewBox="0 0 228 228"
      fill="none"
      initial="hidden"
      animate="visible"
      className="animation-logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="228" height="228" fill="#E5E5E5" />
      <motion.circle
        custom={1}
        variants={drawCircle}
        cx="114"
        cy="114"
        r="70"
        stroke="white"
      />
      <motion.path
        d="M101.312 95.48V131H108.032V119.672L117.056 131H125.792L113.984 117.752L125.696 104.408H116.96L108.032 115.688V95.48H101.312Z"
        fill="white"
        variants={drawPath}
      />
    </motion.svg>
  )
}
