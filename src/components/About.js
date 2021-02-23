import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="textbox">
                <h2>About this app</h2>
                <p>Browse through catalog of SpaceX launches</p>
                <p>Version 1.0</p>
            </div>
            
        </div>
    )
}

export default About;