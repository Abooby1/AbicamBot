const Food = {
  names: ["food"],
  func: ({chat, userData})=>{
    chat.reply(`You have ${userData.food} food points!`)
  },
  description: "I will chat how many food points your have"
};

export {Food};