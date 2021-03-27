import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import {Loading} from '../../assets/spinner'
import { getPost } from '../../services/post'
import { getUser } from '../../services/user'
import Profile from '../Profile/Profile'
import './DashBoard.css'
const DashBoard = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [profile, setProfile] = useState("")

    const showProfile = async (id) =>{
        let response = await getUser(id)
        setProfile(response)
    }
    const searchTag = (tag) =>{
      console.log(tag)
      let filter = data.filter((post) => {return post.tags.indexOf(tag) > -1})
      console.log(filter)
      setData(filter)
    }
    const getData = async () =>{
        try{
            console.log("cargando...")
          setLoading(true)
          let response =  await getPost()
          setData(response)
        } catch(error) {
          console.error(error)
        }
          finally{
            setLoading(false);
          }
      }    
      useEffect(() => {
          console.log("Sucede")
        getData()
        }, []);

    return (
        <div className="dashboard">
             {loading && <Loading/> }
             {data.map(post =>(<Post showProfile={showProfile} searchTag={searchTag} {...post}/>))}
        </div>
)}

export default DashBoard
