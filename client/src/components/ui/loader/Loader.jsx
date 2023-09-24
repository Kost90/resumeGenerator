import React from 'react'
import { motion } from 'framer-motion'
import styles from './Loader.module.css'

function Loader() {
  return (
    <motion.div className={styles.containerStyle}>
      <div>
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
          className={styles.circleStyle}
        />
      </div>
      <h2>Loading</h2>
    </motion.div>
  )
}

export default Loader
