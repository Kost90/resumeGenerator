import { useEffect} from 'react'
import { List, Paper, Stack } from '@mui/material'
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
      <List sx={{display:'flex', flexDirection:'column', gap:1, alignItems:'center'}}>
      {resume.map(({ content, id }) => (
        <Paper elevation={2}>
          <ResumeItem content={content} id={id} key={id} />
        </Paper>
      ))}
      </List>
  )
}

export default ResumeList
