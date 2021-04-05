import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'https://dummyapi.io/data/api';
const headers = {headers: { 'app-id': '606a72e16f9ea3adb4b5a8c5' }}

export const getUser = async(userId) =>{
    console.log('getUser')
    try {
        const {data} = await axios.get(`${server}/user/${userId}`, headers)
        return data.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const getUserPosts = async(userId) =>{
    console.log('getUserPost')
    try {
        const {data} = await axios.get(`${server}/user/${userId}/post`, headers)
        return data.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}

