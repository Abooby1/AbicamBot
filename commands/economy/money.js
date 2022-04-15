import {getUserDataManager} from "../../database.js";

const Money = {
  names: ["money"],
  func: ({chat, userData})=>{
    chat.reply(`You have $${userData.value.money.toFixed(2)}!`)
  },
  description: "I will chat how much money you have"
};

const CheckMoney = {
  names: ["checkmoney", "check.money"],
  func: async ({chat, args: [userid]}) => {
    const data = await getUserDataManager(userid);
    chat.reply(`${userid}'s money: $${data.value.money.toFixed(2)}`)
  }
}

export {Money, CheckMoney};