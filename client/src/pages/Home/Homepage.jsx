import About from '../../components/ui/about/About'
import { Container } from '@mui/material'
import styles from './Homepage.module.css'

function Homepage() {
  return (
    <div className={styles.bg_homepage}>
      <Container>
        <About />
      </Container>
    </div>
  )
}

export default Homepage
