import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'https://dummyapi.io/data/api';
const headers = {headers: { 'app-id': '606a61a22b18f61f21afbe20' }}

export const getPost = async() =>{
    const response = await axios.get(`${server}/post`,headers)
    return response.data.data
}
export const getPostTag = async(tag) =>{
    const response = await axios.get(`${server}/tag/${tag}/post`, headers)
    return response.data.data
}
export const getPostComments = async(postId) =>{
    const response = await axios.get(`${server}/post/${postId}/comment`,headers)
    return response.data.data
}