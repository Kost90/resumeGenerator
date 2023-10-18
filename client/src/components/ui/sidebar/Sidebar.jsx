import useLoginContext from 'context/loginContext/LoginContext'
import useResumeContext from 'context/resumeContext/ResumeContext'
import Button from '@mui/material/Button'
import ResumeList from '../resumelist/ResumeList'
import styles from './Sidebar.module.css'

function Sidebar({ logout }) {
  const { loginusers } = useLoginContext()
  const { showCompletion, Handelchange } = useResumeContext()

  return (
    <div className={styles.side_bar}>
      <h1>{loginusers.Firstname}</h1>
      <h2>{loginusers.Lastname}</h2>
      <h3>{loginusers.email}</h3>
      <h3>Your resume history:</h3>
      <ResumeList />
      {showCompletion === true ? (
        <Button
          type="button"
          variant="contained"
          onClick={() => Handelchange()}>
          Crete new resume
        </Button>
      ) : null}
      <Button
        type="submit"
        variant="contained"
        onClick={() => logout(loginusers.id)}>
        Log out
      </Button>
    </div>
  )
}

export default Sidebar
