import React from 'react'
import reddit from '../../src/reddit.png'
import youtube from '../../src/youtube.png'
import wikipedia from '../../src/wikipedia.png'
import space from '../../src/article.png'
import ReadMoreAndLess from 'react-read-more-less';

const LaunchItem = (props) => {

        const {keyIndex,image_url, mission_name,launch_date,launch_year, rocket_type, launch_site, launch_success, land_success,rocket,reddit_link,wikipedia_link,youtube_link,article_link, details} = props.launch;

        return (
            <div className="zoom">
                <div className= "card text-center" style={{borderRadius: '10px'}}>
                    <div>
                        <div style={{pointerEvents: "none"}}>
                            <img src={image_url} alt="Img Not Found" className="round-img" style ={{width:"100px"}}/>
                            <h3 className="card-title">{mission_name}</h3>
                            <br/>
                            <p>Launch Date : {launch_date.split("T")[0]}</p>
                            <p>Launch Site: {launch_site} </p>
                            <p>Launch Success: {launch_success ? <span style={{fontWeight:"bold", color: "green"}}>Yes </span>: <span style={{fontWeight:"bold", color: "red"}}> No</span>}</p>
                            <p>Landing Success: {land_success ? <span style={{fontWeight:"bold", color: "green"}}>Yes </span>: <span style={{fontWeight:"bold", color: "red"}}> No</span>}</p>
                            
                            <br/><br/>
                            
                                
                        </div>

                        <p style={{fontFamily:"Roboto", color:"#a9a9a9"}}>
                        <span style={{color:"black"}}>Details:</span> 
                        <span className = "detail">
                            <ReadMoreAndLess
                            
                            className="read-more-content"
                            charLimit={60}
                            readMoreText="Read more"
                            readLessText="Read less"
                        >
                            {details ? details : "No details were found"}
                        </ReadMoreAndLess>
                        </span>
                        </p>
                        <br/>
                        
                        <a href={reddit_link ? reddit_link : '#'} target="_blank">
                            <img src = {reddit} style={{width : "30px", height : "30px", marginRight : "10px"}}></img>
                        </a>
                        <a href={youtube_link ? youtube_link : '#'} target="_blank">
                            <img src = {youtube} style={{width : "30px", height : "30px", marginRight : "10px"}}></img>
                        </a>
                        <a href= {wikipedia_link ? wikipedia_link : '#'} target="_blank">
                            <img src = {wikipedia} style={{width : "30px", height : "30px", marginRight : "10px", borderRadius : "5px"}}></img>
                        </a>

                        <a href={article_link ? article_link : '#' } target="_blank">
                            <img src = {space} style={{width : "30px", height : "30px", marginRight : "10px", borderRadius : "5px"}}></img>
                        </a>

                        <div style={{pointerEvents:"none"}}>
                            <b><p className="btn btn-primary btn-sm my-1" style={{backgroundColor: "#ADD8E6", borderRadius: '10px', color: 'black'}}>Rocket: {rocket}</p></b>
                        </div>
                </div>
            </div>
            </div>
            
        )
}

export default LaunchItem
