import React, { useState, useEffect } from "react";
import "./App.css";
import instagramLogo from "./instagram.png";

import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(reels);

  return (
    <div className="app">
      <div className="app_top">
        <img src={instagramLogo} className="app__logo"></img>
        <h1 className="reels__text">Reels</h1>
      </div>
      <div className="app__video">
        {reels.map((reel) => (
          <>
            <VideoCard
              channel={reel.channel}
              avatarSrc={reel.avatarSrc}
              song={reel.song}
              url={reel.url}
              likes={reel.likes}
              shares={reel.shares}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
