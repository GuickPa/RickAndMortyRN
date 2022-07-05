import axios from 'axios'
import { BASEURL } from '../utils/const'

export async function get(url) {
  return axios.get(BASEURL + url)
}
