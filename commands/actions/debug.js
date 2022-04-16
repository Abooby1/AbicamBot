import {getUserDataManager} from "../../database.js"

const TempBan = {
  names: ["ban"],
  func: async ({chat, args: [userid, time]})=>{
    if (userid != "" && time != "" && userid != "6154f0d0a8d6d106c5b869b6") {
    var data = await getUserDataManager(userid)
    var NormalRank = data.value.rank
    data.value.rank = "Banned"
    setTimeout(function( ) {
      data.value.rank = NormalRank
      setTimeout(function() {
        data.update();
      }, 1500)
    }, time * 60000)
    setTimeout(function() {
      data.update();
      chat.reply(`I have temp banned ${userid} | Time: ${time * 60} seconds`)
    }, 1500)
    } else {
      chat.reply("There has been an error, please check the chat...")
      console.log(`${chat.author.username} had an error banning someone...`)
    }
  },
  description: "Temp bans someone",
  hidden: true,
  permission: rank=>rank=="Owner" || rank == "Mod"
};

const SetMoney = {
  names: ["setmoney"],
  func: async ({ chat, args: [userid, money] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    data.value.money = parseFloat(money) || 0;
    data.update();
    chat.reply(`I set ${userid}'s money to ${data.value.money}`)
  },
  hidden: true,
  permission: rank=>rank=="Owner" || rank == "Mod",
  description: "Sets your money."
};

const ResetSubstat = {
  names: ["resetsubstat"],
  func: async ({ args: [userid, substat] }) => {
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
  permission: rank=>rank=="Owner" || rank == "Mod",
}

const ResetData = {
  names: ["resetdata"],
  func: async ({ chat, args: [userid] }) => {
    if (userid == "6154f0d0a8d6d106c5b869b6") return;
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);

    // deep clone defaultData
    data.value = JSON.parse(JSON.stringify(defaultData));
    data.applyRanks();

    setTimeout(function() {
      data.update();
      chat.reply("I reset their data!")
    }, 1500)
  },
  hidden: true,
  description: "Resets a specific substat of a user to its default value. Note: Ranks are hard coded and cannot be reset.",
  permission: rank=>rank=="Owner" || rank == "Mod",
}

const Test = {
  names: ["test"],
  func: ({chat})=>{
    chat.reply("Test completed")
  },
  description: "test",
  hidden: true,
  permission: "Owner"
};


export { ResetData, ResetSubstat, SetMoney, TempBan, Test};