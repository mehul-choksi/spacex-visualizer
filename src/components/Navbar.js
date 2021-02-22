import React, { Component } from 'react'

const Navbar = () => {
    return (
      <>
        <nav class="navbar bg-dark">
        <a class="navbar-brand" href="#">SpaceX Visualizer</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">App <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Design</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sitemap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Design</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="textbox">
        <h2>Welcome to react spaceX visualizer!</h2>
        <p>Filter and view the data from spaceX api in a user-friendly, asthetic manner.</p>
      </div>
      </>
    )
}

export default Navbar
