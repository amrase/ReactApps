import React from 'react'
import VideoItem from './VideoItem';


const VideoList = ({videos}) =>{

    const renderedList = videos.map( video =>{
        return <VideoItem video={video} ket={video.id.videoId}/>
    })

    return <div>
        {renderedList}
    </div>

}

export default VideoList