import "./VideoCard.css";
import video from "./video.mp4";
import VideoHeader from "./VideoHeader"
import VideoFooter from "./VideoFooter"
import react, {useRef, useState} from "react";

function VideoCard({url, channel, avatarSrc, song, likes, shares}){
  // using useState does render the whole component  everytime when state changes 
  const [isVideoPlaying, setIsVideoPlaying ] = useState(false);

  //using useRef does not render the component 
  // it is actually a reference which give a mutable object and used to refer HTML tags to manipulation 
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if(isVideoPlaying){
      //stop
        videoRef.current.pause();
        setIsVideoPlaying(false);
    }else{
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }
  
    return (
      <div className ="videoCard">
        <VideoHeader />
        <video onClick={onVideoPress}
        ref ={videoRef} 
        className="videoCard__player"
          src={url}
          alt=""
          loop={true}
        />

        <VideoFooter  
        channel={channel}
        song={song}
        avatarSrc={avatarSrc}
        likes={likes}
        shares={shares}
        
        />
        
      </div>
    );
}

export default VideoCard;