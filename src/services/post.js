import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'https://dummyapi.io/data/v1';
const headers = {headers: { 'app-id': '61270899eaa192d74e01893b' }}

export const getPost = async() =>{
    try {
        const {data} = await axios.get(`${server}/post`,headers)
        return data.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const getPostTag = async(tag) =>{
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