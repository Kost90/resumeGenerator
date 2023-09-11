import { Link } from "react-router-dom";
import useLoginContext from "../../../api/loginContext/LoginContext";
import styles from './header.module.css';

function Header() {
  const {loginusers, fetchLoginUser} = useLoginContext();

  return (
    
    <header className={styles.container}>
      <Link to='/'>Home</Link>
      <Link to='/registerpage'>Register</Link>
      {loginusers === null? <Link to='/loginpage'>Log In</Link>:<Link to='/profilepage'>Profile</Link> }
    </header>
  )
}

export default Header