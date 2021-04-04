import axios from 'axios'

export const getUser = async(id) =>{
    const response = await axios.get(`https://dummyapi.io/data/api/user/${id}`, {headers: { 'app-id': '605f747bcca4710fe02a4617' }})
    return response.data
}