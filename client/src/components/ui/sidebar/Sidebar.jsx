import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Box,
} from '@mui/material'
import useLoginContext from 'context/loginContext/LoginContext'
import useResumeContext from 'context/resumeContext/ResumeContext'
import Button from '@mui/material/Button'
import ResumeList from '../resumelist/ResumeList'
import styles from './Sidebar.module.css'

function Sidebar({ logout }) {
  const { loginusers } = useLoginContext()
  const { showCompletion, Handelchange } = useResumeContext()

  return (
    <div>
      <div className={styles.side_bar}>
        <List component="ul" aria-label="mailbox folders">
          <ListItem>
            <ListItemText
              primary="User Firstname"
              secondary={loginusers.Firstname}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="User Lastname"
              secondary={loginusers.Lastname}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Email" secondary={loginusers.email} />
          </ListItem>
        </List>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#2070c1' }}>
          Resume history:
        </Typography>
        <ResumeList />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}>
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
        </Box>
      </div>
    </div>
  )
}

export default Sidebar
