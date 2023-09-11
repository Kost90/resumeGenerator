import { Link } from "react-router-dom"
import styles from './header.module.css'

function Header() {
  return (
    
    <header className={styles.container}>
      <Link to='/'>Home</Link>
      <Link to='/registerpage'>Register</Link>
      <Link to='/loginpage'>Log In</Link>
    </header>
  )
}

export default Header