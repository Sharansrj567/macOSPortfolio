import React, { Component } from "react";
import $ from "jquery";
import ReactGA from "react-ga";

export class Terminal extends Component {
  constructor() {
    super();
    this.cursor = "";
    this.terminal_rows = 1;
    this.current_directory = "~";
    this.curr_dir_name = "root";
    this.prev_commands = [];
    this.commands_index = -1;
    this.child_directories = {
      root: [
        "projects",
        "personal-documents",
        "skills",
        "languages",
        "PDPU",
        "interests",
      ],
      PDPU: ["Sem-6"],
      skills: [
        "Full-stack development",
        "React",
        "Mongo",
        "Flutter",
        "Node(Express)",
        "Firebase",
      ],
      projects: [
        "sharansrj567-personal-portfolio",
        "synonyms-list-react",
        "economist.com-unlocked",
        "Improve-Codeforces",
        "flutter-banking-app",
        "Meditech-Healthcare",
        "CPU-Scheduling-APP-React-Native",
      ],
      interests: ["Software Engineering", "Deep Learning", "Cloud Engineer"],
      languages: ["Javascript", "Python", "C"],
    };
    this.state = {
      terminal: [],
    };
  }

  componentDidMount() {
    this.reStartTerminal();
  }

  componentDidUpdate() {
    clearInterval(this.cursor);
    this.startCursor(this.terminal_rows - 2);
  }

  componentWillUnmount() {
    clearInterval(this.cursor);
  }

  reStartTerminal = () => {
    clearInterval(this.cursor);
    $("#terminal-body").empty();
    this.appendTerminalRow();
  };

  appendTerminalRow = () => {
    let terminal = this.state.terminal;
    terminal.push(this.terminalRow(this.terminal_rows));
    this.setState({ terminal });
    this.terminal_rows += 2;
  };

  terminalRow = (id) => {
    return (
      <React.Fragment key={id}>
        <div className="flex w-full h-5">
          <div className="flex">
            <div className=" text-ubt-green">srj567@MacbookPro</div>
            <div className="text-white mx-px font-medium">:</div>
            <div className=" text-ubt-blue">{this.current_directory}</div>
            <div className="text-white mx-px font-medium mr-1">$</div>
          </div>
          <div
            id="cmd"
            onClick={this.focusCursor}
            className=" bg-transperent relative flex-1 overflow-hidden"
          >
            <span
              id={`show-${id}`}
              className=" float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"
            ></span>
            <div
              id={`cursor-${id}`}
              className=" float-left mt-1 w-1.5 h-3.5 bg-white"
            ></div>
            <input
              id={`terminal-input-${id}`}
              data-row-id={id}
              onKeyDown={this.checkKey}
              onBlur={this.unFocusCursor}
              className=" absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent"
              spellCheck={false}
              autoFocus={true}
              autoComplete="off"
              type="text"
            />
          </div>
        </div>
        <div id={`row-result-${id}`} className={"my-2 font-normal"}></div>
      </React.Fragment>
    );
  };

  focusCursor = (e) => {
    clearInterval(this.cursor);
    this.startCursor($(e.target).data("row-id"));
  };

  unFocusCursor = (e) => {
    this.stopCursor($(e.target).data("row-id"));
  };

  startCursor = (id) => {
    clearInterval(this.cursor);
    $(`input#terminal-input-${id}`).trigger("focus");
    // On input change, set current text in span
    $(`input#terminal-input-${id}`).on("input", function () {
      $(`#cmd span#show-${id}`).text($(this).val());
    });
    this.cursor = window.setInterval(function () {
      if ($(`#cursor-${id}`).css("visibility") === "visible") {
        $(`#cursor-${id}`).css({ visibility: "hidden" });
      } else {
        $(`#cursor-${id}`).css({ visibility: "visible" });
      }
    }, 500);
  };

  stopCursor = (id) => {
    clearInterval(this.cursor);
    $(`#cursor-${id}`).css({ visibility: "visible" });
  };

  removeCursor = (id) => {
    this.stopCursor(id);
    $(`#cursor-${id}`).css({ display: "none" });
  };

  clearInput = (id) => {
    $(`input#terminal-input-${id}`).trigger("blur");
  };

  checkKey = (e) => {
    if (e.key === "Enter") {
      let terminal_row_id = $(e.target).data("row-id");
      let command = $(`input#terminal-input-${terminal_row_id}`).val().trim();
      if (command.length !== 0) {
        this.removeCursor(terminal_row_id);
        this.handleCommands(command, terminal_row_id);
      }
      // push to history
      this.prev_commands.push(command);
      this.commands_index = this.prev_commands.length - 1;

      this.clearInput(terminal_row_id);
    } else if (e.key === "ArrowUp") {
      let prev_command;

      if (this.commands_index <= -1) prev_command = "";
      else prev_command = this.prev_commands[this.commands_index];

      let terminal_row_id = $(e.target).data("row-id");

      $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
      $(`#show-${terminal_row_id}`).text(prev_command);

      this.commands_index--;
    } else if (e.key === "ArrowDown") {
      let prev_command;

      if (this.commands_index >= this.prev_commands.length) return;
      if (this.commands_index <= -1) this.commands_index = 0;

      if (this.commands_index === this.prev_commands.length) prev_command = "";
      else prev_command = this.prev_commands[this.commands_index];

      let terminal_row_id = $(e.target).data("row-id");

      $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
      $(`#show-${terminal_row_id}`).text(prev_command);

      this.commands_index++;
    }
  };

  childDirectories = (parent) => {
    let files = [];
    files.push(`<div class="flex justify-start flex-wrap">`);
    this.child_directories[parent].forEach((file) => {
      files.push(`<span class="font-bold mr-2 text-ubt-blue">'${file}'</span>`);
    });
    files.push(`</div>`);
    return files;
  };

  closeTerminal = () => {
    $("#close-terminal").trigger("click");
  };

  handleCommands = (command, rowId) => {
    let words = command.split(" ");
    let main = words[0];
    words.shift();
    let result = "";
    let rest = words.join(" ");
    rest = rest.trim();
    switch (main) {
      case "cd":
        if (words.length === 0 || rest === "") {
          this.current_directory = "~";
          this.curr_dir_name = "root";
          break;
        }
        if (words.length > 1) {
          result = "too many arguments, arguments must me <1.";
          break;
        }

        if (rest === "personal-documents") {
          result = `bash /${this.curr_dir_name} : Permission denied 😏`;
          break;
        }

        if (this.child_directories[this.curr_dir_name].includes(rest)) {
          this.current_directory += "/" + rest;
          this.curr_dir_name = rest;
        } else if (rest === ".." || rest === "../") {
          result = "Type 'cd' to go back 😅";
          break;
        } else {
          result = `bash: cd: ${words}: No such file or directory`;
        }
        break;
      case "ls":
        let target = words[0];
        if (target === "" || target === undefined || target === null)
          target = this.curr_dir_name;

        if (words.length > 1) {
          result = "too many arguments, arguments must me <1.";
          break;
        }
        if (target in this.child_directories) {
          result = this.childDirectories(target).join("");
        } else if (target === "personal-documents") {
          result = "Nope! 🙃";
          break;
        } else {
          result = `ls: cannot access '${words}': No such file or directory                    `;
        }
        break;
      case "echo":
        result = this.xss(words.join(" "));
        break;
      case "clear":
        this.reStartTerminal();
        return;
      case "exit":
        this.closeTerminal();
        return;
      case "sudo":
        ReactGA.event({
          category: "Sudo Access",
          action: "lol",
        });

        result =
          "<img class=' w-2/5' src='./images/memes/used-sudo-command.jpg' />";
        break;
      default:
        result =
          "Command '" +
          main +
          "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, echo, clear, exit ]";
    }
    document.getElementById(`row-result-${rowId}`).innerHTML = result;
    this.appendTerminalRow();
  };

  xss(str) {
    if (!str) return;
    return str
      .split("")
      .map((char) => {
        switch (char) {
          case "&":
            return "&amp";
          case "<":
            return "&lt";
          case ">":
            return "&gt";
          case '"':
            return "&quot";
          case "'":
            return "&#x27";
          case "/":
            return "&#x2F";
          default:
            return char;
        }
      })
      .join("");
  }

  render() {
    return (
      <div
        className="h-full w-full bg-black text-white text-sm font-bold"
        id="terminal-body"
      >
        {this.state.terminal}
      </div>
    );
  }
}

export default Terminal;

export const displayTerminal = () => {
  return <Terminal> </Terminal>;
};
