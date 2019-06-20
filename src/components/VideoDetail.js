import React from 'react';


const VideoDetail = ({video}) => {
    // if statement that checks if there is not a video show loading
    if (!video){
        return <div>Loading...</div>
    }

//saving the url with its unique id to a variable 
const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc}/>
                </div>
            <div className = 'ui segment'>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
        </div>
         </div>
    )
}

export default VideoDetail;