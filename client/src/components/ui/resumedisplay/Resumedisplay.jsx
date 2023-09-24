import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import useResumeContext from 'api/resumeContext/ResumeContext'
import styles from './ResumeDisplay.module.css'

function Resumedisplay() {
  const {
    resumeID,
    content,
    removeUserResume,
    Handelchange,
    HandelchangeContent,
  } = useResumeContext()

  const deleteResume = id => {
    removeUserResume(id)
    Handelchange()
    HandelchangeContent('')
  }

  return (
    <div className={styles.displayresume_container}>
      <h1>GENERATED RESUME:</h1>
      <div className={styles.text_container}>{content}</div>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => deleteResume(resumeID)}>
        Delete
      </Button>
    </div>
  )
}

export default Resumedisplay
