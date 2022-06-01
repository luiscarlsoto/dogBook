import axios from 'axios'

const server = 'https://dummyapi.io/data/v1';
const headers = {headers: { 'app-id': '61270899eaa192d74e01893b' }}

export const getUser = async(userId) =>{
    try {
        const {data} = await axios.get(`${server}/user/${userId}`, headers)
        return data
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const getUserPosts = async(userId) =>{
    try {
        const {data} = await axios.get(`${server}/user/${userId}/post`, headers)
        return data.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}

