
import useResumeContext from '../../../api/resumeContext/ResumeContext';
import useUsersContext from '../../../api/usersContext/UsersContext';
import styles from './ResumeDisplay.module.css';

function Resumedisplay() {
    const {resume, content} = useResumeContext();
    const {users} = useUsersContext();

  return (
    <div className={styles.text_container}>
        {content}
    </div>
  )
}

export default Resumedisplay