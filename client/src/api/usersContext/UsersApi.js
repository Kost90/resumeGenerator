export const postUser = async (newUser) => {
    try {
        const response = await fetch('http://localhost:8000/users',{
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
