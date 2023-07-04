import axios from 'axios'

export default function getMessage () {
  return axios.get('http://localhost:3000/message').then(response => response.data)
}