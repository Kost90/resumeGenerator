import { API } from 'api/API/API'
const key = process.env.REACT_APP_OPEN_AI_KEY
const url = process.env.REACT_APP_BACKENDURL
const openaiurl = 'https://api.openai.com/v1/chat/completions'

class ResumeApi extends API {
  constructor(baseurl) {
    super(baseurl)
  }

  async postResume(resume) {
    try {
      const response = await this.fetch({
        path: `resume`,
        method: 'POST',
        body: JSON.stringify(resume),
      })
      if (!response.ok) {
        throw new Error('Cant POST')
      }
      return response
    } catch (error) {
      return console.error(error)
    }
  }

  async getLoginUserResume(IdUser) {
    try {
      const controller = new AbortController()
      const signal = controller.signal
      const response = await this.fetch({ path: `resume/${IdUser}`, signal })
      return {
        response,
        controller,
      }
    } catch (e) {
      console.error(e)
    }
  }

  async delLogUserResume(UserId) {
    try {
      const response = await this.fetch({
        path: `resume/${UserId}`,
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Cant delete')
      }
    } catch (error) {
      return console.error(error)
    }
  }
}

export default new ResumeApi(url)

export const postResumeAI = async resume => {
  try {
    if (!key) {
      throw new Error('OpenAI API key is missing.')
    }
    const response = await fetch(openaiurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
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
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from OpenAI API')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error in postResumeAI:', error)
    throw error
  }
}
