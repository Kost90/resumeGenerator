import { useEffect } from 'react'
import useLoginContext from 'api/loginContext/LoginContext'
import useUsersContext from 'api/usersContext/UsersContext'
import useResumeContext from 'api/resumeContext/ResumeContext'
import Sidebar from 'components/ui/sidebar/Sidebar'
import MainSection from 'components/ui/mainsection/MainSection'
import styles from './ProfilePage.module.css'

function Profilepage() {
  const { fetchUser } = useUsersContext()
  const { loginusers, removeLoginUser } = useLoginContext()
  const { resume } = useResumeContext()

  const LogOut = id => {
    removeLoginUser(id)
  }

  useEffect(() => {
    if (loginusers !== null) {
      const Fetchdata = async () => {
        console.log('fetch user')
        const email = localStorage.getItem('email')
        await fetchUser(email)
      }
      Fetchdata()
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
