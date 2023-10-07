import { useEffect, useState } from 'react'
import useLoginContext from 'api/loginContext/LoginContext'
import useUsersContext from 'api/usersContext/UsersContext'
import Sidebar from 'components/ui/sidebar/Sidebar'
import MainSection from 'components/ui/mainsection/MainSection'
import styles from './ProfilePage.module.css'

function Profilepage() {
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const { fetchUser } = useUsersContext()
  const { loginusers, removeLoginUser } = useLoginContext()
  
  const LogOut = id => {
    removeLoginUser(id)
  }

  useEffect(() => {
    let controller
    if (loginusers !== null) {
      const Fetchdata = async () => {
        controller = await fetchUser(email);
      }
      Fetchdata()
    }
    return () =>{
      if(controller){
        controller.abort()
      }
    }
  }, [])

  return (
    <div className={styles.profile_page}>
      {loginusers !== undefined ? (
        <>
          <Sidebar logout={LogOut} />
          <MainSection />
        </>
      ) : null}
    </div>
  )
}

export default Profilepage
