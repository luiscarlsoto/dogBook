import axios from 'axios'

const server = 'https://dummyapi.io/data/api/user/';
export const getUser = async(id) =>{
    const response = await axios.get(`${server}/${id}`, {headers: { 'app-id': '605f747bcca4710fe02a4617' }})
    return response.data.data
}