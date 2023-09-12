import styles from './About.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



function About() {


  return (
    <section className={styles.section_about}>
      <div className={styles.container}>
      <>
      <h1>
        Online Resume Builder.
        Create a Professional Resume for Free.
        </h1>
        <p>
        Free to use. Developed by hiring professionals.
        Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With our Resume Maker, it’s quick, pain-free, and effective
        </p>
        <Button type='button' variant="contained"><Link to='/registerpage'>Create your resume now</Link></Button>
      </>
    </div>
    </section>
   
  )
}

export default About