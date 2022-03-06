import { defaultData, getUserDataManager } from "../../database.js";
const SetMoney = {
  names: ["setmoney"],
  func: async ({chat, args: [userid, money]})=>{
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    data.value.money = parseFloat(money) || 0;
    data.update();
    chat.reply(`I set ${userid}'s money to ${data.value.money}`)
  },
  hidden: true,
  permission: "Owner",
  description: "Sets your money."
};

const ResetSubstat = {
  names: ["resetsubstat"],
  func: async ({args: [userid, substat]})=>{
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    if (substat in data.value) {
      data.value[substat] = defaultData[substat];
      data.update();
    } else {
      chat.reply(`${substat} is not a valid substat...`)
    }
  },
  hidden: true,
  description: "Resets a specific substat of a user to its default value.",
  permission: "Owner",
}

const ResetData = {
  names: ["resetdata"],
  func: async ({chat, args: [userid]})=>{
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);

    // deep clone defaultData
    data.value = JSON.parse(JSON.stringify(defaultData));
    data.applyRanks();
    
    setTimeout(function () {
      data.update();
      chat.reply("I reset their data!")
    }, 1500)
  },
  hidden: true,
  description: "Resets a specific substat of a user to its default value. Note: Ranks are hard coded and cannot be reset.",
  permission: "Owner",
}



export {ResetData, ResetSubstat, SetMoney};