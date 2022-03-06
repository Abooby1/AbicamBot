const EightBall = {
  names: ["8ball"],
  func: ({chat, body})=>{
    if (body.trim().toLowerCase()==="is shouta cringe?") {
      chat.reply("Is that even a question lmao");
    }
    if (body.trim().toLowerCase()==="is genshin good?") {
      chat.reply("Yes... it is, unlike Shouta's nft girlfriend");
    }
  },
  description: "8ball command"
};

export {EightBall}