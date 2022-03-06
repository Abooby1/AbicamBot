import {getRandomInt} from "../../utils.js";
import {getUserDataManager} from "../../database.js";

const Summon = {
  names: ["summon"],
  func: ({chat, userData})=>{
    if (userData.value.scrolls < 1) {
      chat.reply("You dont have enough scrolls")
      return;
    }
    if (userData.value.coins < 5) {
      chat.reply("You dont have enough coins...");
      return;
    }
    const earnedEnergy = getRandomInt(10);
    userData.value.energy += earnedEnergy
    chat.reply("You got " + earnedEnergy + " energy!")
  },
  permission: rank=>rank!="Banned",
  description: "You will summon energy"
};

export {Summon};