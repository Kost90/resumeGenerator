import { API } from 'api/API/API'
const url = process.env.REACT_APP_BACKENDURL

class UsersApi extends API {
  constructor(baseurl) {
    super(baseurl)
  }

  async postUser(newUser) {
    try {
      const response = await this.fetch({
        path: `users`,
        method: 'POST',
        body: JSON.stringify(newUser),
      })
      return response
    } catch (error) {
      return console.error(error)
    }
  }

  async getUser(email) {
    try {
      const controller = new AbortController()
      const signal = controller.signal
      const response = await this.fetch({ path: `users/${email}`, signal })
      return {
        response,
        controller,
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default new UsersApi(url)
