
const url = process.env.REACT_APP_BACKENDURL;

export const postUser = async (newUser) => {
    try {
        const response = await fetch(`${url}/users`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          } )

          const data = await response.json();
          return data
         
    }
    catch (error){
        return console.error(error)
    }
}

export const getUser = async (email) => {
  const response = await fetch(`${url}/users/${email}`)

  return await response.json()
};