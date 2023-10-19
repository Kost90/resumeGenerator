import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@mui/material'
import useLoginContext from 'context/loginContext/LoginContext'
import logo from 'components/images/icons8-r-67.png'
import styles from './header.module.css'

function Header() {
  const { loginusers } = useLoginContext()

  return (
    <AppBar position='static' color='inherit' sx={{padding:2}}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
      <img src={logo} alt="logo" />
      <div className={styles.nav_container}>
        <Link to="/">Home</Link>
        <Link to="/registerpage">Register</Link>
        {loginusers === null ? (
          <Link to="/loginpage">Log In</Link>
        ) : (
          <Link to="/profilepage/mainsection">Profile</Link>
        )}
      </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
