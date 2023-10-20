import useResumeContext from 'context/resumeContext/ResumeContext'
import { ListItemButton, ListItemText } from '@mui/material'

function ResumeItem({ content, id }) {
  const { Handelchange, HandelchangeContent, ChangeResumeId } =
    useResumeContext()

  const setContent = (content, id) => {
    HandelchangeContent(content)
    ChangeResumeId(id)
    Handelchange()
  }

  return (
    <>
      <ListItemButton onClick={() => setContent(content, id)}>
        <ListItemText primary={`Resume number: ${id}`}/>
        </ListItemButton>
    </>
  )
}

export default ResumeItem
