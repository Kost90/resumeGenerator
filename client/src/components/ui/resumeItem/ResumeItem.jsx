import useResumeContext from 'api/resumeContext/ResumeContext'

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
      <li onClick={() => setContent(content, id)}>Resume number: {id}</li>
    </>
  )
}

export default ResumeItem
