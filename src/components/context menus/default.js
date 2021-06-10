import React from "react";

function DefaultMenu(props) {
  let devider = () => {
    return (
      <div className="flex justify-center w-full">
        <div className=" border-t border-gray-900 py-1 w-2/5"></div>
      </div>
    );
  };

  return (
    <div
      id="default-menu"
      className={
        (props.active ? " block " : " hidden ") +
        " w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"
      }
    >
      <a
        rel="noreferrer noopener"
        href="https://github.com/sharansrj567/sharansrj567.github.io"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🌟</span>{" "}
        <span className="ml-2">Star this Project</span>
      </a>
      <a
        rel="noreferrer noopener"
        href="https://github.com/sharansrj567/sharansrj567.github.io/issues"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">❗</span>{" "}
        <span className="ml-2">Report bugs</span>
      </a>
      {devider()}
      <a
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/sharan-jamanani/"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🙋‍♂️</span>{" "}
        <span className="ml-2">
          Follow on <strong>Linkedin</strong>
        </span>
      </a>
      <a
        rel="noreferrer noopener"
        href="https://github.com/sharansrj567"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🤝</span>{" "}
        <span className="ml-2">
          Follow on <strong>Github</strong>
        </span>
      </a>
      <a
        rel="noreferrer noopener"
        href="mailto:sharansrj567@gmail.com"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">📥</span>{" "}
        <span className="ml-2">Contact Me</span>
      </a>
      {devider()}
      <div
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🧹</span> <span className="ml-2">Reset</span>
      </div>
    </div>
  );
}

export default DefaultMenu;
