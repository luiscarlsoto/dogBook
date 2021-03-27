import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'https://dummyapi.io/data/api/post';
export const getPost = async() =>{
    const response = await axios.get(`${server}`, {headers: { 'app-id': '605f747bcca4710fe02a4617' }})
    return response.data.data
}