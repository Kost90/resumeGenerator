import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import LoginForm from 'components/ui/forms/loginForm/LoginForm'
import useLoginContext from 'api/loginContext/LoginContext'
import styles from './LoginPage.module.css'

function Loginpage() {
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const { loginusers, fetchLoginUser } = useLoginContext()

  useEffect(() => {
    if (email !== null) {
      const Fetchdata = async () => {
        await fetchLoginUser(email)
      }
      Fetchdata()
    }
  }, [email])

  return (
    <div className={styles.login_page}>
      <h1>LOGIN FORM:</h1>
      {loginusers !== null ? <Navigate to="/profilepage" /> : <LoginForm />}
    </div>
  )
}

export default Loginpage
