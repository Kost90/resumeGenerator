import styles from './About.module.css'
import { Link } from 'react-router-dom'


function About() {


  return (
    <div className={styles.container}>
        <div>
        <h1>
        Online Resume Builder.
        Create a Professional Resume for Free.
        </h1>
        <p>
        Free to use. Developed by hiring professionals.
        Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With our Resume Maker, it’s quick, pain-free, and effective
        </p>
        <button type='button'><Link to='/registerpage'>Create your resume now</Link></button>
        </div>
    </div>
  )
}

export default About