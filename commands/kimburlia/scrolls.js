const Scrolls = {
  names: ["scrolls"],
  func: ({chat})=>{
    chat.reply(`You have ${userData.value.scrolls} scrolls!`)
  },
  description: "I will chat how many scrolls you have"
};

export {Scrolls};