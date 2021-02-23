import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <>
        <nav className="navbar" style={{backgroundColor: "#482880"}}>
        <Link to="/">SpaceX Visualizer</Link>
          <ul >
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">App</Link></li>
          </ul>
      </nav>
      <div className="textbox">
        <h2>Welcome to react spaceX visualizer!</h2>
        <p>Filter and view the data from spaceX api in a user-friendly, asthetic manner.</p>
      </div>

      
      </>
    )
}

export default Navbar
