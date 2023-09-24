import RegisterForm from 'components/ui/forms/registerForm/RegisterForm'
import styles from './RegisterPage.module.css'

function Registerpage() {
  return (
    <div className={styles.register_page}>
      <h1>REGISTER FORM:</h1>
      <RegisterForm />
    </div>
  )
}

export default Registerpage
