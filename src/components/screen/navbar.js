import React, { Component } from "react";
import Status from "../util components/status";
import StatusCard from "../util components/status_card";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      status_card: false,
    };
  }

  render() {
    return (
      <div
        className="main-navbar-vp absolute top-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-grey text-ubt-grey text-sm select-none z-50"
        style={{ opacity: 0.9 }}
      >
        <div
          tabIndex="0"
          className={
            "pl-3 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
          }
        >
          <img
            src="data:image/png;base64,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"
            className="w-5 h-5 "
          />
        </div>
        <div
          id="status-bar"
          tabIndex="0"
          onFocus={() => {
            this.setState({ status_card: true });
          }}
          onBlur={() => {
            this.setState({ status_card: false });
          }}
          className={
            "relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
          }
        >
          <Status />
          <StatusCard
            shutDown={this.props.shutDown}
            lockScreen={this.props.lockScreen}
            visible={this.state.status_card}
          />
        </div>
      </div>
    );
  }
}
