const url = 'http://localhost:8000/users';

export const postUser = async (newUser) => {
    try {
        const response = await fetch(url,{
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
  const response = await fetch(`${url}/${email}`)

  return await response.json()
};