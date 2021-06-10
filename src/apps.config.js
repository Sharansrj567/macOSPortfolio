import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
import { displayGedit } from "./components/apps/gedit";
import { displayAboutSharan } from "./components/apps/srj";

const apps = [
  {
    id: "chrome",
    title: "Google Chrome",
    icon: "./themes/Yaru/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "about-sharan",
    title: "About Sharan",
    icon: "./themes/Yaru/system/user-home.svg",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutSharan,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/Yaru/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayVsCode,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/Yaru/apps/bash.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },
  {
    id: "settings",
    title: "Settings",
    icon: "./themes/Yaru/apps/settings.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/Yaru/system/trash.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayTrash,
  },
  {
    id: "gedit",
    title: "Send a Message",
    icon: "./themes/Yaru/apps/contacts.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
];

export default apps;
