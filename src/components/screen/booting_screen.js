import React from "react";

function BootingScreen(props) {
  return (
    <div
      style={
        props.visible || props.isShutDown
          ? {
              zIndex: "100",
              boxShadow: "inset 0 0 500px rgba(255, 255, 255, .3)",
              filter: "blur(0.7px)",
            }
          : { zIndex: "-20" }
      }
      className={
        (props.visible || props.isShutDown
          ? " visible opacity-80"
          : " invisible opacity-100 ") +
        " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"
      }
    >
      <img
        className="md:w-1/8 h-1/4 w-1/8"
        src="./themes/Yaru/status/cof_orange_hex.png"
        alt="Apple Logo"
      />
      <div
        className="w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer"
        onClick={props.turnOn}
      >
        {props.isShutDown ? (
          <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300">
            <img
              className="w-8"
              src="./themes/Yaru/status/power-button.png"
              style={{ borderRadius: 50 }}
              alt="Power Button"
            />
          </div>
        ) : (
          <img
            className={" w-10" + (props.visible ? " animate-spin " : "")}
            src="./themes/Yaru/status/process-working-symbolic.png"
            alt="macOS Process Symbol"
          />
        )}
      </div>
      <div className="text-white mb-4">
        <a
          className="underline"
          href="https://www.linkedin.com/in/sharan-jamanani/"
          rel="noreferrer noopener"
          target="_blank"
        >
          linkedin
        </a>
        <span className="font-bold mx-1">|</span>
        <a
          href="https://github.com/sharansrj567/sharansrj567.github.io"
          rel="noreferrer noopener"
          target="_blank"
          className="underline"
        >
          github
        </a>
      </div>
    </div>
  );
}

export default BootingScreen;
