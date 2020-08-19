import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react';

export default function() {
    return(
        <aside className="logo">
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>
        </aside>
    )
    
}