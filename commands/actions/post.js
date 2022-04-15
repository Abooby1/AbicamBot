const Post = {
  names: ["post"],
  func: ({client, body, chat})=>{
    if (body == "" || body == " ") {
      chat.reply("You need something to say...")
    } else {
      if (body.includes("@")) {
        chat.reply("You cant ping in the post...")
      } else {
        client.post(body + " | Created by " + chat.author.id)
      }
    }
  },
  permission: rank=>rank!=="Banned" || "Bot",
  description: "Creates a post with specified message."
};

export {Post};