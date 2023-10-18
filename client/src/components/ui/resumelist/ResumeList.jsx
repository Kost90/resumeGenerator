import { useEffect} from 'react'
import useResumeContext from 'context/resumeContext/ResumeContext'
import useUsersContext from 'context/usersContext/UsersContext'
import ResumeItem from '../resumeItem/ResumeItem'
import styles from './ResumeList.module.css'

function ResumeList() {
  const { resume, fetchUserResume } = useResumeContext()
  const { users } = useUsersContext()

  useEffect(() => {
    let controller
    if (users?.id) {
      console.log(users)
      const Fetchdata = async () => {
        controller  = await fetchUserResume(users?.id)
      }
      Fetchdata()
    }
    return () => {
      if(controller){
        controller.abort()
      }
    }
  }, [users])

  return (
    <ul className={styles.li}>
      {resume.map(({ content, id }) => (
        <ResumeItem content={content} id={id} key={id} />
      ))}
    </ul>
  )
}

export default ResumeList
