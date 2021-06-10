import React from "react";
import Clock from "../util components/clock";
import SmallArrow from "./small_arrow";

export default function Status() {
  const toggleFullscreen = () => {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  };
  return (
    <div className="flex justify-center items-center">
      <span className="mx-1.5" onClick={toggleFullscreen}>
        <img
          src="./themes/Yaru/status/fullscreen.svg"
          alt="fullscreen-toggle"
          className="inline status-symbol"
          style={{
            height: 20,
            width: 20,
          }}
        />
      </span>
      <span className="mx-1.5">
        <Clock />
      </span>
      <span className="mx-1.5">
        <img
          src="./themes/Yaru/status/network-wireless-signal-good-symbolic.svg"
          alt="macOS wifi"
          className="inline status-symbol"
        />
      </span>
      <span className="mx-1.5">
        <img
          src="./themes/Yaru/status/audio-volume-medium-symbolic.svg"
          alt="macOS sound"
          className="inline status-symbol"
        />
      </span>
      <span className="mx-1.5">
        <img
          src="./themes/Yaru/status/battery-good-symbolic.svg"
          alt="macOS battry"
          className="inline status-symbol"
        />
      </span>
      <span className="mx-1">
        <SmallArrow angle="down" className=" status-symbol" />
      </span>
    </div>
  );
}
