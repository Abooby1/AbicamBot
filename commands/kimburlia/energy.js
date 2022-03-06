const Energy = {
  names: ["energy"],
  func: ({chat,userData})=>{
    chat.reply(`You have ${userData.value.energy} energy!`)
  },
  description: "I will chat how much energy you have"
};

export {Energy};