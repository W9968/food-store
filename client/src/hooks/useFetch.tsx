import axios from 'axios'

const __a = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_STATEFUL_DOMAIN,
})

export default __a
