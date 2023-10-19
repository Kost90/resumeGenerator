import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import LoginForm from 'components/ui/forms/loginForm/LoginForm'
import useLoginContext from 'context/loginContext/LoginContext'
import styles from './LoginPage.module.css'

function Loginpage() {
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const { loginusers, fetchLoginUser } = useLoginContext()

  useEffect(() => {
    let controller
    if (email !== null) {
      const Fetchdata = async () => {
        controller = await fetchLoginUser(email)
      }
      Fetchdata()
    }
    return () => {
      if (controller) {
        controller.abort()
      }
    }
  }, [email])

  return (
    <div className={styles.login_page}>
      <h1>LOGIN FORM:</h1>
      {loginusers !== null ? <Navigate to="/profilepage/mainsection" /> : <LoginForm />}
    </div>
  )
}

export default Loginpage
