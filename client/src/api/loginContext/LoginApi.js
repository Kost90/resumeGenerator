const url = process.env.REACT_APP_backendurl;

export const postLoginUser = async (loginUser) => {
  try {
    const response = await fetch(`${url}/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    });

    if (!response.ok) {
      throw new Error("Cant POST");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getLoginUser = async (email) => {
  const response = await fetch(`${url}/${email}`)

  return await response.json()
};

export const getUserInfo = async (loginInfo) => {
    try {
        const response = await fetch(`${url}/users/${loginInfo.password}/${loginInfo.email}`)
  
        if (!response.ok) {
          console.log("error");
          throw new Error("User not found or password not a match");
        }
  
          const data = await response.json();
          return data
    }
    catch (error){
        return console.error(error)
    }
  }

export const deleteLoginUser = async (UserId) => {
  try {
    const response = await fetch(`${url}/loginuser/${UserId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Cant delete");
    }
  } catch (error) {
    return console.error(error);
  }
};
