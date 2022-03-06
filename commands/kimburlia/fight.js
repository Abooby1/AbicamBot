const Fight = {
  names: ["fight"],
  func: ({chat, userData})=>{
    if (userData.value.energy >= 5) {
      userData.value.energy-=5;
      chat.reply("Fighting...")
      setTimeout(function() {
        userData.value.coins += 0.02
        userData.value.scrolls + 0.01
        if (userData.value.rank == "Owner" || userData.value.rank == "Premium" || userData.value.rank == "Special") {
          userData.value.coins += 0.01
          chat.reply("You got 0.02 coins and 1 scroll peice! Also, since you have a special rank, you got an additional 0.01 coins!")
        } else {
          chat.reply("You got 0.02 coins and 1 scroll peice!")
        }
        userData.update();
      })
    } else {
      chat.reply("You dont have enough energy... (summon for energy!)")
    }
  },
  permission: rank=>rank!=="Banned",
  description: "You will fight for resources"
};

export {Fight};