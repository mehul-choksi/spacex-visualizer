import React, { Component } from 'react'

const Navbar = () => {
    return (
      <>
        <nav className="navbar" style={{backgroundColor: "#482880"}}>
        <a href="#">SpaceX Visualizer</a>
          <ul >
            <li><a href="#">About</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Design</a></li>
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
