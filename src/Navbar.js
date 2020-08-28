import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
const Navbar = () => {
    return (
        <div className="navbar">
            <MenuIcon className="navbar__menu" />
            <h1>REAL SCH<span>OO</span>L</h1>


            <div className="navbar__navs">
                <h3>Masterclasses</h3>
                <h3>Programs</h3>
                <h3>Challenges</h3>
                <h3>Library</h3>
            </div>
            <div className="navbar__user">
                <AccountCircleTwoToneIcon />
                <h1>INR 200 </h1>
            </div>
            <MenuIcon className="navbar__menuShort" />
        </div>
    )
}

export default Navbar
