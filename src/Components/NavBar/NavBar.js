import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
const NavBar = () => {
    return (
            <div className="navbar">
                <Link to="/"><img alt="logo" src={logo}/></Link>
            </div>
    )
}

export default NavBar
