import mail from "../../images/sms-svgrepo-com.svg";
import forms from "./../../images/clipboard-text-svgrepo-com.svg";
import graph from "./../../images/chart-1-svgrepo-com.svg";
import fx from "../../images/grid-5-svgrepo-com.svg";
import coin from "../../images/coin-1-svgrepo-com.svg";
import message from "../../images/device-message-svgrepo-com.svg";
import wallet from "../../images/empty-wallet-add-svgrepo-com.svg";
import dollar from "../../images/money-recive-svgrepo-com.svg";
import admin from "../../images/personalcard-svgrepo-com.svg";
import admintwo from "../../images/user-svgrepo-com.svg";
import card from "../../images/card-tick-1-svgrepo-com.svg";
import statements from "../../images/document-text-svgrepo-com.svg";
import diagram from "../../images/diagram-svgrepo-com.svg";
import task from "../../images/copy-success-svgrepo-com.svg";
import onlineApp from "../../images/monitor-mobbile-svgrepo-com.svg";
import snapshot from "../../images/radio-svgrepo-com.svg";
import broker from "../../images/presention-chart-svgrepo-com.svg";
import research from "../../images/chart-square-svgrepo-com.svg";
import calculator from "../../images/gameboy-svgrepo-com.svg";

const menuIcons = [
  {
    id: 1,
    name: "Forms Manager",
    picture: forms,
    selected: true,
  },
  {
    id: 2,
    name: "FX Positions",
    picture: fx,
    selected: true,
  },
  {
    id: 3,
    name: "OnlineApp Admin",
    picture: onlineApp,
    selected: true,
  },
  {
    id: 4,
    name: "Task Center",
    picture: task,
    selected: true,
  },
  {
    id: 5,
    name: "Account Snapshot",
    picture: snapshot,
    selected: true,
  },
  {
    id: 6,
    name: "Admin",
    picture: admintwo,
    selected: false,
  },
  {
    id: 7,
    name: "Asset Liability Manager",
    picture: coin,
    selected: false,
  },
  {
    id: 8,
    name: "Broker Admin",
    picture: broker,
    selected: false,
  },
  {
    id: 9,
    name: "Cash Manager",
    picture: wallet,
    selected: false,
  },
  {
    id: 11,
    name: "Cash Manager Admin",
    picture: card,
    selected: false,
  },
  {
    id: 12,
    name: "Customer Center",
    picture: message,
    selected: false,
  },
  {
    id: 13,
    name: "Portfolio Calculator",
    picture: calculator,
    selected: false,
  },
  {
    id: 14,
    name: "Reports",
    picture: diagram,
    selected: false,
  },
  {
    id: 15,
    name: "Research",
    picture: graph,
    selected: false,
  },
  {
    id: 16,
    name: "Research Admin",
    picture: research,
    selected: false,
  },
  {
    id: 17,
    name: "Secured Message Center",
    picture: mail,
    selected: false,
  },
  {
    id: 18,
    name: "Statements",
    picture: statements,
    selected: false,
  },
  {
    id: 19,
    name: "Account Change Admin",
    picture: admin,
    selected: false,
  },
  {
    id: 20,
    name: "Oak Web",
    picture: dollar,
    selected: false,
  },
];

export { menuIcons };
