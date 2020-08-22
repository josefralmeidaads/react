import './App.css'
import ''
import React from 'react'

import Logo from '../components/templates/Logo.jsx'
import Nav from '../components/templates/Nav.jsx'
import Main from '../components/templates/Main.jsx'
import Footer from '../components/templates/Footer.jsx'

export default function (){
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}