import useLoginContext from '../../../api/loginContext/LoginContext';
import Button from '@mui/material/Button';

function UserInfoItem({logout}) {
    const {loginusers} = useLoginContext();

  return (
    <>
    <h1>{loginusers.Firstname}</h1>
    <h2>{loginusers.Lastname}</h2>
    <h3>{loginusers.email}</h3>
    <Button type='submit' variant="contained" onClick={() => logout(loginusers.id)}>
      Log out
    </Button>
    </>
  )
}

export default UserInfoItem