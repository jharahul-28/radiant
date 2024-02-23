import React from 'react'
import '../scss/navbar.css'
import { FaSearch } from "react-icons/fa";

function Navbar() {
    return (
        <div className='nav'>
            <ul>
                <input type='text'/>
                <FaSearch className='searchIcon'/>
                <li>Categories</li>
                <li>Webiste Builders</li>
                <li>Today's Deal</li>
            </ul>
        </div>
    )
}

export default Navbar