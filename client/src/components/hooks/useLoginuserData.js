import { useEffect, useState } from 'react'

const url = 'http://localhost:8000/loginuser'

export const getLoginUser = async email => {
  const response = await fetch(`${url}${email}`)

  return await response.json()
}

export const useLoginuserData = (initialValue = []) => {
  const [user, setUsers] = useState(initialValue)

  useEffect(email => {
    getLoginUser(email).then(user => setUsers(user))
  }, [])

  return { user }
}
