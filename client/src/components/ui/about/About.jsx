import { motion } from 'framer-motion'
import { Typography, Box } from '@mui/material'
import styles from './About.module.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import BillSiting from '../../../assets/Bill_Sitting_using_laptop.svg'
import Succlent from '../../../assets/Succlent_angle.svg'
import Cuboid from '../../../assets/Cuboid.svg'
import BigPlant from '../../../assets/Big_Plant.svg'

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
    <section className={styles.flex_container_content}>
      <div className={styles.purple_elips}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className={styles.container}>
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
          <span style={{ color: '#1090CB' }}>Online Resume Builder.</span>{' '}
          Create a Professional Resume for Free.
        </Typography>
        <p>
          Free to use. Developed by hiring professionals. Resume writing can be
          stressful, confusing, and time-consuming if you do it all on your own.
          With our Resume Maker, it’s quick, pain-free, and effective
        </p>
        <Button
          type="button"
          variant="contained"
          sx={{ backgroundColor: '#0062FF' }}>
          <Link to="/registerpage">Create your resume now</Link>
        </Button>
      </motion.div>
      <motion.Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className={styles.container_svg}>
        <img src={BillSiting} alt="Bill Sitting Using Laptop" />
        <div className={styles.yellow_elips}></div>
        <img src={Succlent} alt="Succlent" className={styles.succlent} />
        <img src={Cuboid} alt="Cuboid" className={styles.cuboid} />
        <img src={BigPlant} alt="bigplant" className={styles.bigplant} />
      </motion.Box>
    </section>
  )
}

export default About
