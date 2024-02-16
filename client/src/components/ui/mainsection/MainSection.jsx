import ResumeForm from '../forms/resumeForm/ResumeForm'
import Resumedisplay from '../resumedisplay/Resumedisplay'
import useResumeContext from 'context/resumeContext/ResumeContext'
import styles from './Main.module.css'

function MainSection() {
  const { showCompletion } = useResumeContext()
  
  return (
    <div className={styles.main_section}>
      {showCompletion === false ? <ResumeForm /> : <Resumedisplay />}
    </div>
  )
}

export default MainSection
