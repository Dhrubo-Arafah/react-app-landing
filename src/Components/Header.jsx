import React from 'react'
import Navbar from './Navbar';

function Header(){
    return(
        <div id='main'>
    <Navbar/>
    <div className="name">
        <h1><span>Launch Your App</span> with confidence and creativity</h1>
        <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda dolore et numquam pariatur reprehenderit voluptatum? Eveniet molestias rem tenetur.</p>
        <a href="#" className="cv-btn">Download</a>
    </div>
        </div>
    )
}

export default Header