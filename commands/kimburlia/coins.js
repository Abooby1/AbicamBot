const Coins = {
  names: ["coins"],
  func: async ({chat, userData})=>{
    chat.reply(`You have ${userData.value.coins} coins!`)
  },
  description: "I will chat how many coins you have"
};

export {Coins};