import axios from 'axios'
import { clearCookie } from './auth'
const axiosSecure = axios.create({
  baseURL: 'https://pet-pals-hub-server.vercel.app',
  withCredentials: true
})

// Inercept response check for unauthorized response
axiosSecure.interceptors.response.use(
  response => response,
  async error => {
    console.log('Error Tracking in the interceptors', error.response)
    if (
      (error.response && error.response.status === 401) ||
      error.response.status === 403
    ) {
      await clearCookie()
      window.location.replace('/login')
    }
    return Promise.reject(error)
  }
)

export default axiosSecure
