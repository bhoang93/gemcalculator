import React from "react";
import "./Background.css";
import WaveBot from "./wave-bot.png";
import WaveMid from "./wave-mid.png";
import WaveTop from "./wave-top.png";

const Background = () => {
  return (
    <div className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveTop"
          style={{ backgroundImage: `url(${WaveTop})` }}
        />
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{ backgroundImage: `url(${WaveMid})` }}
        />
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{ backgroundImage: `url(${WaveBot})` }}
        />
      </div>
    </div>
  );
};

export default Background;
