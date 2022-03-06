const Like = {
  names: ["like", "likepost"],
  func: ({chat})=>{
    chat.post.like()
    chat.reply("I liked the post!");
  },
  description: "I will like the post"
};

export {Like};