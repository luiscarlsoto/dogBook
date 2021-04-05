import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import {Loading} from '../../assets/spinner'
import { getPost, getPostTag } from '../../services/post'
import { getUser } from '../../services/user'
import Profile from '../Profile/Profile'
import NavBar from '../NavBar/NavBar'

import './DashBoard.css'
const DashBoard = (props) => {
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
    const searchTag = async() =>{
      if(props.match.params.tag !== undefined){ 
      setLoading(true)
        try{
          let response =  await getPostTag(props.match.params.tag)
          setData(response)
        } catch(error) {
          console.error(error)
        }
          finally{
            setLoading(false);
        }
      } else {
        getData()
      } 
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
    getData()
    }, []);
      useEffect(() => {
        searchTag()
      }, [props.match.params.tag]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="dashboard">
            <NavBar/>
            <div className="container">
              {loading && <Loading/> }
              {modalProfile ? <Profile closeModal={closeModal} {...dataProfile}/> : null}
              {data.map(post =>(<Post key={post.id} showProfile={showProfile} searchTag={searchTag} {...post}/>))}
            </div>
        </div>
)}

export default DashBoard
