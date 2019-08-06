import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () =>{
    return (
        <nav className="blue darken-2">
            <div>
                <Link to="/" className="left brand">iWeather</Link>
                <ul className="right nav-links">
                   <li><NavLink to="/">Home</NavLink></li> 
                   <li><NavLink to="/favorites">Favorites</NavLink></li> 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar