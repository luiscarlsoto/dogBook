import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'https://dummyapi.io/data/api';
const headers = {headers: { 'app-id': '606a61a22b18f61f21afbe20' }}

export const getUser = async(userId) =>{
    const response = await axios.get(`${server}/user/${userId}`, headers)
    return response.data
}
export const getUserPosts = async(userId) =>{
    const response = await axios.get(`${server}/user/${userId}/post`, headers)
    return response.data.data
}