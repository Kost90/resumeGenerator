import { Navigate } from 'react-router-dom'
import useLoginContext from 'context/loginContext/LoginContext'

function LoginAuth({ children }) {
  const { loginusers } = useLoginContext()

  if (loginusers === null) {
    return <Navigate to="/loginpage" replace={true} />
  }

  return children
}

export default LoginAuth
