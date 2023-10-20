import Button from '@mui/material/Button'
import { Typography, Paper, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import useResumeContext from 'context/resumeContext/ResumeContext'
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
      <Paper sx={{padding:2}}>
      <Typography variant='h5' gutterBottom>GENERATED RESUME:</Typography>
      <Box sx={{maxWidth:640, margin:5}}>
      <Typography variant='div'>{content}</Typography>
      </Box>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => deleteResume(resumeID)}>
        Delete
      </Button>
      </Paper>
    </div>
  )
}

export default Resumedisplay
