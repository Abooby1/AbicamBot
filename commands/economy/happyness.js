const Happy = {
  names: ["happy.points", "happy"],
  func: ({chat, userData})=>{
    chat.reply(`You have ${userData.value.happy} happy points!`)
  },
  description: "I will chat how many happy points you have"
};

export {Happy};