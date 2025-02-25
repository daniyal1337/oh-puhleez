import React, { useState } from "react";

const VideoModal = () => {
  const [vid, setVid] = useState(true);

  return (
    <div className={"vid-m" + (vid ? " vid-a" : " ")}>
      <div className="vid-c">
        
       
        <h5>Hello !</h5>
      </div>
    </div>
  );
};

export default VideoModal;
