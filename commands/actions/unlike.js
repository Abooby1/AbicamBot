const Unlike = {
  names: ["unlike", "unlikepost"],
  func: ({chat})=>{
    chat.post.unlike()
    chat.reply("I unliked the post...");
  },
  description: "I will unlike the post"
};

export {Unlike};