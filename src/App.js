import "./App.css";
import instagramLogo from "./instagram.png";
import video from "./video.mp4";
import VideoCard from "./VideoCard";
function App() {
  return (
    <div className="app">
      <div className="app_top">
        <img src={instagramLogo} className="app__logo"></img>
        <h1 className="reels__text">Reels</h1>
      </div>
      <div className="app__video">
        <VideoCard 
        channel="prince"
        avatarSrc= "https://lh3.googleusercontent.com/ogw/ADea4I63271a9-O9jXVmPA85zJp2Vq4jzbeYWpP7TyHXtw=s64-c-mo"

        song="tum mille to mill gaya"
    url={video}
        likes={576}
        shares={45}


        />
        <VideoCard />
        
        
      </div>
    </div>
  );
}

export default App;
