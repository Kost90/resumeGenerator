import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar } from '@mui/material'
import useLoginContext from 'context/loginContext/LoginContext'
import logo from 'components/images/icons8-r-67.png'
import styles from './header.module.css'

function Header() {
  const { loginusers } = useLoginContext()

  return (
    <AppBar position="static" color="inherit" sx={{ padding: 2 }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <img src={logo} alt="logo" />
        <div className={styles.nav_container}>
          {loginusers === null ? (
            <>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : '')}>
                Home
              </NavLink>
              <NavLink
                to="/registerpage"
                className={({ isActive }) => (isActive ? styles.active : '')}>
                Register
              </NavLink>
              <NavLink
                to="/loginpage"
                className={({ isActive }) => (isActive ? styles.active : '')}>
                Log In
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/profilepage/mainsection"
              className={({ isActive }) => (isActive ? styles.active : '')}>
              Profile
            </NavLink>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
