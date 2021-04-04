import React from 'react'
import './Profile.css'
import { FaTimes, FaUserAlt, FaEnvelope, FaVenusMars, FaBirthdayCake } from "react-icons/fa";

const Profile = (props) => {
    console.log(props)
    return (
        <div className="content-profile background-blur center">
            <div className="profile-card center">
                <div onClick={props.closeModal} className="close-button2"><FaTimes/></div>
                <div className="profile-content">
                    <div className="profile-img center">
                        <img src={props.picture}/>
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
                        
                    </div>
                    <div className="profile-buttons">
                        <div onClick={props.closeModal} className="close-button">Close</div>
                    </div>
                </div>
            </div>        

        </div>
    )
}

export default Profile
