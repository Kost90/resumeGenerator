
const key = process.env.REACT_APP_OPEN_AI_KEY;
const url = process.env.REACT_APP_BACKENDURL;
const openaiurl = "https://api.openai.com/v1/chat/completions";

export const postResumeAI = async (resume) => {
  try {
    if (!key) {
      throw new Error("OpenAI API key is missing.");
    }

    const response = await fetch(openaiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: `
            Can you help to generate a resume for me please
            My name is ${resume.Firstname} ${resume.Lastname}.
            email: ${resume.email}
            phone: ${resume.phone}
            Work experience: ${resume.workexpr}
            education: ${resume.education} 
            My skills: ${resume.skills} `,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from OpenAI API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in postResumeAI:", error);
    throw error;
  }
};

export const postResume = async (resume) => {
  try {
    const response = await fetch(`${url}/resume`, {
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
  const response = await fetch(`${url}/resume/${IdUser}`);

  return await response.json();
};

export const delLogUserResume = async (UserId) => {
  try {
    const response = await fetch(`${url}/resume/${UserId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Cant delete");
    }
  } catch (error) {
    return console.error(error);
  }
};
