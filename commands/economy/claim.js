const Claim = {
  names: ["claim"],
  func: ({chat, userData})=> {
    chat.reply("Claiming...")
    setTimeout(function( ) {
      chat.reply("You claimed your $0.05 and 0.03 levels!")
      userData.value.money += 0.05
      setTimeout(function( ) {
        userData.update()
      }, 2500)
    }, 2500)
  },
  permission: rank => rank == "Owner" || "Mod" || "Premium",
  description: "You claim your rank rewards"
};

export {Claim};