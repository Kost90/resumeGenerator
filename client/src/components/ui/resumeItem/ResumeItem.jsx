import useLoginContext from '../../../api/loginContext/LoginContext';
import useResumeContext from '../../../api/resumeContext/ResumeContext';
import Button from '@mui/material/Button';

function ResumeItem ({content, id}) {
  const { Handelchange, HandelchangeContent, ChangeResumeId} = useResumeContext();

  const setContent = (content, id) =>{
    HandelchangeContent(content);
    ChangeResumeId(id)
    Handelchange();
  }

  return (
    <>
    <li onClick={() => setContent(content, id)}>Resume number: {id}</li>
    </>
  )
}

export default ResumeItem