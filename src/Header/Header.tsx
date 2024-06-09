// Header.jsx
import React from 'react';
import './Header.scss';
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <h1>IMG</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/CommunityResources">Community Resources</Link></li>
                    <li><Link to="/">FeedBack</Link></li>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
            </div>
        </div>
    );
}
