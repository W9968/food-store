import axios, { AxiosInstance } from 'axios'

export const __fetch: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000',
})
