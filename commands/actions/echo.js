const Echo = {
  names: ["echo"],
  func: ({chat, body})=>{
    chat.reply(body);
  },
  permission: rank=>rank!=="Banned",
  description: "Echoes text back to you."
};

export {Echo};