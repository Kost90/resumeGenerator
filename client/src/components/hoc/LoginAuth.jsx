import { Navigate } from 'react-router-dom'
import useLoginContext from 'api/loginContext/LoginContext'

function LoginAuth({ children }) {
  const { loginusers } = useLoginContext()

  if (loginusers === null) {
    return <Navigate to="/loginpage" replace={true} />
  }

  return children
}

export default LoginAuth
