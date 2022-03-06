import {getRandomInt} from "../../utils.js"
import {getUserDataManager} from "../../database.js";

const games = {
  "You played Roblox and you got #1 in Arsenal": 5,
  "You played Minecraft alone.": 3,
  "You played Minecraft with friends and beat the Ender Dragon": 10,
  "You played Warzone and died because of aimbot... 💀": 2,
  "You made a TikTok video and you got 0 likes": -1,
}
const keys = Object.keys(games);

const Play = {
  names: ["play"],
  func: ({chat, userData})=>{

    const game = keys[Math.floor(Math.random()*keys.length)];
    const earned = typeof games[game] === "function" ? games[game]() : games[game];
    
    chat.reply(`Playing...`);
    setTimeout(function( ) {
      chat.reply(`${game} earned you ${earned} happiness`)
      userData.value.happy += earned;
      userData.update();
    }, 1000)
  
  },
  permission: rank=>rank!=="Banned",
  description: "You will play for happy points"
};

export {Play};