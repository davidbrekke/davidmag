import { motion } from 'framer-motion'

const Animate = ({ children, time }) => (
  <motion.div
    initial="pageInitial"
    animate="pageAnimate"
    variants={pageVariant}
    transition={{ duration: time || 1 }}
  >
    {children}
  </motion.div>
)

const pageVariant = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
}

export default Animate
