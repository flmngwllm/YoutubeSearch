import React from 'react'
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
    return (
        //added event handler when item is clicked
    <div onClick={() => onVideoSelect(video)} className='item video-item'>
    <img className="ui image" alt={video.snippet.title} src = {video.snippet.thumbnails.medium.url}/>
    <div className= "content">
    <div className= "header">{video.snippet.title} </div>
    </div>
    </div>
    )
}

export default VideoItem