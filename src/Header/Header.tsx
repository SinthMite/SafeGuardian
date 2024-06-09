// Header.jsx
import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

interface HeaderProps{

}

const Header: React.FC<HeaderProps>=()=> {
    return (
        <div className="header">
            <div className="logo">
                <h1>IMG</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/CommunityResources">Community Resources</Link></li>
                    <li><Link to="/FeedBack">FeedBack</Link></li>
                    <li>Login</li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;