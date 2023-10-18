import { API } from '../API/API'
const url = process.env.REACT_APP_BACKENDURL

class LoginApi extends API {
  constructor(baseurl) {
    super(baseurl)
  }

  async postLoginUser(loginuser) {
    const controller = new AbortController()
    const signal = controller.signal
    try {
      const response = await this.fetch({
        path: `loginuser`,
        signal,
        body: JSON.stringify(loginuser),
        method: 'POST',
      })
      if (!response.ok) {
        throw new Error('Cant POST')
      }
      console.log(response)
      return response
    } catch (error) {
      return console.error(error)
    }
  }

  async getLoginUser(email) {
    try {
      const controller = new AbortController()
      const signal = controller.signal
      const response = await this.fetch({ path: `loginuser/${email}`, signal })
      console.log(response)
      return {
        response,
        controller,
      }
    } catch (error) {
      console.error('cant getloginuser')
      throw error
    }
  }

  async deleteLoginUser(UserId) {
    try {
      const response = this.fetch({
        path: `loginuser/${UserId}`,
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
export default new LoginApi(url)

export const getUserInfo = async loginInfo => {
  try {
    const controller = new AbortController()
    const signal = controller.signal
    const response = await fetch(
      `${url}/users/${loginInfo.password}/${loginInfo.email}`,
      { signal },
    )

    if (!response.ok) {
      console.log('error')
      throw new Error('User not found or password not a match')
    }
    return {
      response: await response.json(),
      controller,
    }
  } catch (error) {
    return console.error(error)
  }
}
