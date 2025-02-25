import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);
const HomeTwoModal = () => {
  const [videoActive, setVideoActive] = useState(false);
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".modal-bg").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".modal-bg",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".modal-bg", {
        opacity: 0,
        scale: 1,
        y: "50%",
        duration: 2,
      });
    }
  }, []);
  
  return (
    <>
      <div className="video-modal">
        <div className="modal-bg"></div>
        <button
          className="video-frame video-btn"
          onClick={() => setVideoActive(true)}
        >
          <div className="video-frame"></div>
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="mw7TZhgt6g8" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoModal;
