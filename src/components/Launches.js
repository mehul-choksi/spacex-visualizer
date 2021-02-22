import React, { Component } from 'react'
import LaunchItem from './LaunchItem'
import { Spinner } from './Spinner';

export const Launches = ({launches, loading}) => {
        
    if(loading)
        return <Spinner/>

    return (
        <center>
            <div style={launchStyle} >
            {
                launches.map(launch => <LaunchItem launch = {launch}/>)
                // this.props.launches.map(launch => <div>{launch.mission_name}</div>)
            }                
            </div>
        </center>
        
    )
}

const launchStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(4,1fr)',
    gridGap : '1rem',
    width : '90%',
}

export default Launches;
