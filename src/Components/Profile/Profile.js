import React, {useState, useEffect} from 'react'
import './Profile.css'
import { FaUserAlt, FaEnvelope, FaVenusMars, FaBirthdayCake } from "react-icons/fa";
import { getUserPosts } from '../../services/user'

const Profile = (props) => {
    const [photos, setPhotos] = useState([])
    const getPhotos = async() =>{
        try{
          let response =  await getUserPosts(props.id)
          setPhotos(response)
        } catch(error) {
          console.error(error)
        }
          finally{
          }
      }    
    useEffect(() => {
        getPhotos()
      },[]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="content-profile background-blur center">
            <div className="profile-card center">
                    <div className="profile-img center">
                        <img alt={props.id} src={props.picture}/>
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">
                            <div><FaUserAlt/></div>
                            <div>{`${props.firstName} ${props.lastName}`}</div>
                        </div>
                        <div className="profile-email">
                            <div><FaEnvelope/> </div>
                            <div>{props.email}</div>
                        </div>
                        <div className="profile-gender">
                            <div><FaVenusMars/></div>
                            <div>{props.gender}</div>
                        </div>
                        <div className="profile-date">
                            <div><FaBirthdayCake/></div>
                            <div>{props.dateOfBirth.split('T')[0]}</div>
                        </div>
                    </div>
                    <div className="profile-posts">
                        <div className="user-posts">
                            {photos.map(photo => (<img key={photo.id} alt={photo.id} src={photo.image}/>))}
                        </div>
                    </div>
                    <div className="profile-buttons">
                        <div onClick={props.closeModal} className="close-button">Close</div>
                    </div>
                </div>

        </div>
    )
}

export default Profile
