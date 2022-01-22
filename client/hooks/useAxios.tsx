import axios, { AxiosInstance } from 'axios'

export const __fetch: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://koulwakel.herokuapp.com',
})
