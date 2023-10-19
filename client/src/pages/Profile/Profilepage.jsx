import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useLoginContext from 'context/loginContext/LoginContext'
import useUsersContext from 'context/usersContext/UsersContext'
import Sidebar from 'components/ui/sidebar/Sidebar'
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
          <Outlet/>
        </>
      ) : null}
    </div>
  )
}

export default Profilepage
