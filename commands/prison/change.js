const Change = {
  names: ["change"],
  func: ({chat, args: [item, value], userData})=>{
    if (item) {
      if (value) {
        
      } else {
        chat.reply("Please add the value (true/false) into the correct spot | ab!change <item> <value>")
      }
    } else {
      chat.reply("Please add what you want to change into the correct spot (item) | ab!change <item> <value>")
    }
  },
  description: "Change stuff around your prison",
  permission: rank => rank != "Banned"
};

export {Change};