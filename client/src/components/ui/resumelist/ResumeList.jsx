import { useEffect } from 'react'
import useResumeContext from 'api/resumeContext/ResumeContext'
import useUsersContext from 'api/usersContext/UsersContext'
import ResumeItem from '../resumeItem/ResumeItem'
import styles from './ResumeList.module.css'

function ResumeList() {
  const { resume, fetchUserResume } = useResumeContext()
  const { users } = useUsersContext()

  console.log(users)
  console.log(resume)

  useEffect(() => {
    if (users.length !== 0) {
      const Fetchdata = async () => {
        console.log('fetch resume')
        await fetchUserResume(users.id)
      }
      Fetchdata()
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
