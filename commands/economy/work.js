import {getUserDataManager} from "../../database.js";
import {MoneyEvent} from "../../events.js"

const Work = {
  names: ["work"],
  func: ({chat, body, userData})=>{
    if (body != "") {
      // in hours
      const time = parseFloat(body) || 1;
      if (time > 30 || time < 1) {
        chat.reply("You can't work for more than 30 hours and less than 1 hour!"); return; 
      }
      chat.reply(`Working for ${time} hour(s)! (You can use other commands while working!)`)
      setTimeout(async function ( ) {
        if (MoneyEvent == true) {
          var earned = time * 0.06
          userData.value.money += earned
          if (userData.value.rank == "Premium") {
            earned += 0.02
          }
          chat.reply(`You worked for ${time} hour(s) and earned $${earned.toFixed(2)}!`)
        } else {
          var earned = time * 0.04
          userData.value.money += earned
          if (userData.value.rank == "Premium") {
            earned += 0.02
          }
          chat.reply(`You worked for ${time} hour(s) and earned $${earned.toFixed(2)}!`)
        }
        setTimeout(function( ) {
          userData.update()
        }, 1200)
      }, time * 1000)
    } else {
      chat.reply("Time not specified.")
    }
  },
  permission: rank=>rank!=="Banned",
  description: "You will work for money"
};

export {Work};