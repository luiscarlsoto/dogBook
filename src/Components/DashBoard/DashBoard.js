import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import {Loading} from '../../assets/spinner'
import { getPost } from '../../services/post'
import { getUser } from '../../services/user'
import Profile from '../Profile/Profile'
import NavBar from '../NavBar/NavBar'

import './DashBoard.css'
const DashBoard = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [modalProfile, setModalProfile] = useState(false)
    const [dataProfile, setProfile] = useState([])
    
    const showProfile = async (id) =>{
      setLoading(true)
      document.body.style.overflowY = 'hidden'
      try{
        let dataProfile = await getUser(id)
        setProfile(dataProfile)
      } catch(error) {
        console.error(error)
      }
        finally{
          setModalProfile(true)
          setLoading(false);
        }
    }  
    const closeModal = () =>{
      setModalProfile(false)
      setProfile([])
      document.body.style.overflowY = 'overlay'
    }
    const searchTag = (tag) =>{
      console.log(tag)
      let filter = data.filter((post) => {return post.tags.indexOf(tag) > -1})
      console.log(filter)
      setData(filter)
    }
    const getData = async () =>{
        try{
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
            <NavBar/>

             {loading && <Loading/> }
             {modalProfile ? <Profile closeModal={closeModal} {...dataProfile}/> : null}
             {data.map(post =>(<Post key={data.id} showProfile={showProfile} searchTag={searchTag} {...post}/>))}
        </div>
)}

export default DashBoard
