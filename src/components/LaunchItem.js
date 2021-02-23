import React from 'react'
import noimg from '../../src/noimg.png';

const LaunchItem = (props) => {

        const {keyIndex,image_url, mission_name,launch_date,launch_year, rocket_type, launch_site, launch_success, land_success} = props.launch;

        return (
            <div className="zoom">
                <div className= "card text-center" style={{borderRadius: '10px'}}>
                    <div style={{pointerEvents: "none"}}>
                        <img src={image_url} alt="Img Not Found" className="round-img" style ={{width:"100px"}}/>
                        <h3 className="card-title">{mission_name}</h3>
                        <br/>
                        <p>Launch Date : {launch_date.split("T")[0]}</p>
                        <p>Rocket Type: {rocket_type}</p>
                        <p>Launch Site: {launch_site} </p>
                        <p>Launch Success: {launch_success ? "Yes" : "No"}</p>
                        <p>Landing Success: {land_success ? "Yes" : "No"}</p>

                        <div>
                            <a href="#" className="btn btn-primary btn-sm my-1" style={{backgroundColor: "dodgerblue", borderRadius: '10px'}}>View details</a>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        )
}

export default LaunchItem
