import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'https://dummyapi.io/data/api';
const headers = {headers: { 'app-id': '606a72e16f9ea3adb4b5a8c5' }}

export const getPost = async() =>{
    console.log('getPost')
    try {
        const {data} = await axios.get(`${server}/post`,headers)
        return data.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const getPostTag = async(tag) =>{
    console.log('getTag')
    try {
        const {data} = await axios.get(`${server}/tag/${tag}/post`, headers)
        return data.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const getPostComments = async(postId) =>{
    console.log('postId')
    try {
        const {data} = await axios.get(`${server}/post/${postId}/comment`,headers)
        return data.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}