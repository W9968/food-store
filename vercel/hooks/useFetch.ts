import axios from 'axios'

const __a = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_STATEFUL_DOMAIN,
})

export default __a
