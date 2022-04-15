import {getUserDataManager} from "../../database.js"

const RankInfo = {
  names: ["rank", "rinfo", "rankinfo"],
  func: ({chat, userData})=>{
    chat.reply(`You are the ${userData.value.rank} rank!`)
  },
  description: "I will chat what rank you are"
};

const CheckRank = {
  names: ["check.rank", "checkrank"],
  func: async ({chat, args: [userid]})=> {
    const data = await getUserDataManager(userid)
    chat.reply(`The rank of ${userid} is ${data.value.rank}`)
  },
  description: "Check the rank of someone with their userid"
}

export {RankInfo, CheckRank};