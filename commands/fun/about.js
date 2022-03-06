const Robot = {
  names: ["robot_engine", "robot"],
  func: ({chat})=>{
    chat.reply("Master of all Robots! Why doesnt he have a command prefix like me?");
  },
  description: "I will chat something about Robot_Engine"
};

const Abooby = {
  names: ["abooby"],
  func: ({chat})=>{
    chat.reply("My first creator");
  },
  description: "I will chat something about Abooby"
};

const Red = {
  names: ["innermachination", "red"],
  func: ({chat})=>{
    chat.reply("That's the person who made photop-client");
  },
  description: "I will chat something about innermachination"
};

const WUTBot = {
  names: ["wutbot"],
  func: ({chat})=>{
    chat.reply("A bot that overdoes things...");
  },
  description: "I will chat something about WUTBot"
};

const Pyx = {
  names: ["pyx"],
  func: ({chat})=>{
    chat.reply("A bot that is always abused...");
  },
  description: "I will chat something about pyx"
};

const Shouta = {
  names: ["shouta"],
  func: ({chat})=>{
    chat.reply("Cringe, annoying, and a loser");
  },
  description: "I will chat something about shouta"
};

export {Robot, Abooby, Red, WUTBot, Shouta, Pyx};