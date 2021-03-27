import React from 'react'
import './Profile.css'
const Profile = (props) => {
    return (
        <div className="content-profile">
            <div onClick={props.closeModal}>Close</div>
            <div>{props.name}</div>
            
        </div>
    )
}

export default Profile
