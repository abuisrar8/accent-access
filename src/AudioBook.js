import React,{useState,useEffect} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './AudioBook.css';


function AudioBook() {
 
  const musicTracks = require("./RawData/musicTrack.json");
    
    const player = musicTracks.map((play)=>
    (
      <div className="player">
        <div className="img" style= {{ backgroundImage:`url(${play.url})`}}></div> 
      
           <AudioPlayer
           
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem" , width:"25rem",height:"10rem"}}
        
        // layout="horizontal"
        src={play.src}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={false}
        showJumpControls={false}
        header={`Playing: ${play.name}`}
        
        
        onEnded={false}
        // other props here
      />
      </div>

    ));
   
   

    return(
      
        <div className = "audioBook">
          
            <div className="iframes">
           <iframe src="https://open.spotify.com/embed/album/0g9VcAua5r6AIaQs2BINWu?utm_source=generator"  allow="autoplay; clipboard-write;" style={{margin:"2rem"}} ></iframe>
           <iframe  src="https://www.youtube.com/embed/uSDHIWHjxws"  frameborder="0" allow="accelerometer; autoplay;" style={{margin:"2rem"}} ></iframe>
           <iframe  src="https://www.youtube.com/embed/t5b20oLaIaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <iframe  src="https://www.youtube.com/embed/q4Vj7rSHK2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
      <div className="storybook" >
      {player}
      </div>
      </div>
           
        
    );

}
export default AudioBook;