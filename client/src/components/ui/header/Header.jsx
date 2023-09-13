import { Link } from "react-router-dom";
import useLoginContext from "../../../api/loginContext/LoginContext";
import logo from '../../images/icons8-r-67.png'
import styles from './header.module.css';

function Header() {
  const {loginusers, fetchLoginUser} = useLoginContext();

  return (
    
    <header className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.nav_container}>
      <Link to='/'>Home</Link>
      <Link to='/registerpage'>Register</Link>
      {loginusers === null? <Link to='/loginpage'>Log In</Link>:<Link to='/profilepage'>Profile</Link> }
      </div>
    </header>
  )
}

export default Header