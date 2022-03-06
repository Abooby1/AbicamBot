import {getUserDataManager} from "../../database.js";

const BuildBusi = {
  names: ["build", "build.business"],
  func: ({ chat, body, userData }) => {
    if (userData.value.business == "") {
      if (body != "" && body != " ") {
        if (userData.value.money >= 500) {
          if (body.length <= 20) {
            chat.reply(`${body} has been founded by ${chat.author.username}!`)
            userData.value.business = body
            setInterval(function() {
              if (userData.value.business != "") {
                userData.value.money = userData.value.workers * 
                0.02
                setTimeout(function() {
                  userData.update();
                }, 1000)
              }
            }, 5000)
            setTimeout(function() {
              userData.update();
            }, 1000)
          } else {
            chat.reply("Max characters exceeded... (Max: 20)")
          }
        } else {
          chat.reply("You dont have enough money to make a business (costs: $500)")
        }
      } else {
        chat.reply("The name of the business has to be after ab!build and it cant be empty...")
      }
    }
  },
  description: "You will build a business and earn money (costs $500)"
};

const BusiStats = {
  names: ["busi.stats", "busistats"],
  func: ({ chat, userData }) => {
    chat.reply(`Name: ${userData.value.business}... Workers: ${userData.value.workers}... Wage Pay: ${userData.value.workers * 5}`)
  },
  description: "You will check your business' stats"
};

const BusiHire = {
  names: ["hire", "business.hire"],
  func: ({ chat, body, userData }) => {
    if (userData.value.business != "") {
      if (body != "" && body != " ") {
        chat.reply(`You are now hiring ${body} workers! It will take you ${body * 0.5} hours!`)
        setTimeout(function() {
          userData.value.workers = userData.value.money + body
          chat.reply(`You hired ${body} workers!`)
          setTimeout(function() {
            userData.update();
          }, 1000)
        }, body * 0.5)
      } else {
        chat.reply("You need to have how many workers you want to hire after ab!hire")
      }
    } else {
      chat.reply("You need a business to hire people...")
    }
  },
  description: "Hire workers for more money"
};

export { BuildBusi, BusiStats, BusiHire };