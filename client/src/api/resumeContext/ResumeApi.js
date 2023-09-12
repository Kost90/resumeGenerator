const url = 'http://localhost:8000/resume';

export const postResume = async (resume) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resume),
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

export const getLoginUserResume = async (IdUser) => {
  const response = await fetch(`${url}/${IdUser}`)

  return await response.json()
};


export const delLogUserResume = async (UserId) => {
  try {
    const response = await fetch(`${url}/${UserId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Cant delete");
    }
  } catch (error) {
    return console.error(error);
  }
};
