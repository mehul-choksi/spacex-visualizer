import React, { useState, useContext } from 'react';
import { SearchContext } from "./SearchContext";
import LaunchItem from './LaunchItem'
import { Spinner } from './Spinner';

// export const Launches = ({launches, loading}) => {
export const Launches = () => {
  
    const {loading, searchData } = useContext(SearchContext)

    if(loading)
        return <Spinner/>

    const transformData =() => {
        let launches = []

        for(let key in searchData){

            let land_cores = searchData[key]['rocket']['first_stage']['cores'];
            let land_success = false;
      
            for(let core_num in land_cores){
              if(land_cores[core_num]['land_success'] == true){
                land_success = true;
              }
            }
            launches.push({
              'keyIndex' : key,
              'mission_id': searchData[key]['launch_date_unix'],
              'mission_name' : searchData[key]['mission_name'],
              'launch_year' : searchData[key]['launch_year'],
              'rocket_type' : searchData[key]['rocket']['rocket_name'],
              'image_url' : searchData[key]['links']['mission_patch_small'],
              'launch_date' : searchData[key]['launch_date_utc'],
              'launch_success' : searchData[key]['launch_success'],
              'launch_site' : searchData[key]['launch_site']['site_name'],
              'land_success' : land_success,
              'rocket' : searchData[key]['rocket']['rocket_name'] + ' | ' + searchData[key]['rocket']['rocket_type'],
              'article_link' : searchData[key]['links']['article_link'],
              'wikipedia_link' : searchData[key]['links']['wikipedia'],
              'youtube_link' : searchData[key]['links']['youtube'],
              'reddit_link' : searchData[key]['links']['reddit_launch'],
              'details' : searchData[key].details
            });
      }
      
      return launches;

     
    }

    return (
        <center>
            <div style={launchStyle} >
            {
                transformData().map(launch => <LaunchItem key = {launch.mission_id} launch = {launch}/>)
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
