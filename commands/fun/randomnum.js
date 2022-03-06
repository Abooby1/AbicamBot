import { getRandomInt } from "../../utils.js"

const RandomNum = {
  names: ["random", "number"],
  func: ({chat})=>{
    chat.reply("Your random number is: " + getRandomInt(9999));
  },
  description: "I will chat a random number"
};

export {RandomNum};