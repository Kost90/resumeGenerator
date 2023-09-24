import { motion } from 'framer-motion'
import styles from './About.module.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

function About() {
  const textVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    vsisible: custom => ({
      x: 0,
      opacity: 1,
      ease: 'easeOut',
      transition: { duration: custom * 0.3, delay: custom * 0.5 },
    }),
  }

  return (
    <section className={styles.section_about}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className={styles.container}>
        <>
          <h1>Online Resume Builder. Create a Professional Resume for Free.</h1>
          <p>
            Free to use. Developed by hiring professionals. Resume writing can
            be stressful, confusing, and time-consuming if you do it all on your
            own. With our Resume Maker, it’s quick, pain-free, and effective
          </p>
          <Button type="button" variant="contained">
            <Link to="/registerpage">Create your resume now</Link>
          </Button>
        </>
      </motion.div>
    </section>
  )
}

export default About
