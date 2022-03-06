import {getDataForUserId} from "../../database.js"

const RankInfo = {
  names: ["rank", "rinfo", "rankinfo"],
  func: ({chat, userData})=>{
    chat.reply(`You are the ${userData.value.rank} rank!`)
  },
  description: "I will chat what rank you are"
};

export {RankInfo};