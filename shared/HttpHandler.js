import axios from 'axios'
import { BASEURL } from '../utils/const'

export default class HttpHandler {
  constructor() {

  }

  async get(url) {
    return axios.get(BASEURL + url)
  }
}