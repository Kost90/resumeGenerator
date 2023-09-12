import useLoginContext from '../../../api/loginContext/LoginContext';
import useResumeContext from '../../../api/resumeContext/ResumeContext';
import Button from '@mui/material/Button';

function ResumeItem ({content, id}) {
  const {showCompletion, Handelchange, HandelchangeContent} = useResumeContext();

  const setContent = (content) =>{
    HandelchangeContent(content);
    Handelchange();
  }

  return (
    <>
    <li onClick={() => setContent(content)}>Resume number: {id}</li>
    </>
  )
}

export default ResumeItem