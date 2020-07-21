import React from 'react'
import './VideoItem.css'


const VideoItem = ({video,onVideoSelect}) =>{

    const videoDetails = video.snippet
    return <div className="video-item item" onClick={()=>onVideoSelect(video)}>
        <img className="ui image" src={videoDetails.thumbnails.medium.url} alt =""/>
        <div className="content">
            <div className="header" >{videoDetails.title}</div>
        </div>
       
          
    </div>
}

export default VideoItem