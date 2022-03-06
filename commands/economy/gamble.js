import { getRandomInt } from "../../utils.js";
import {getUserDataManager} from "../../database.js";

const Gamble = {
  names: ["gamble"],
  func: ({chat, userData})=>{
    if (userData.value.money >= 5) {
      userData.value.money -= 5
      var GambleRandom = getRandomInt(5)
      if (GambleRandom <= 3) {
        userData.value.wins++;
        userData.value.money+=8;
        chat.reply("You won the gamble!")
      } else {
        userData.value.loses++;
        chat.reply("You lost the gamble...")
      }
    } else {
      chat.reply("You dont have enough money...")
    }
  },
  permission: rank=>rank!=="Banned",
  description: "You will gamble your money"
};

export {Gamble}
