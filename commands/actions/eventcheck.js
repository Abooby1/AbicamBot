import {EventChecker} from "../../events.js"

const EventCheck = {
  names: ["event", "eventcheck", "event.check"],
  func: ({chat})=>{
    chat.reply(`Currently, the ${EventChecker} is active!`)
  },
  description: "You can check what event is active"
};

const EventHelp = {
  names: ["eventhelp", "event.help"],
  func: ({chat})=>{
    if (EventChecker == "money event") {
      chat.reply(`The ${EventChecker} makes the money earned from ab!work from $0.04 to $0.06!`)
    }
    if (EventChecker == "crypto event") {
      chat.reply(`The ${EventChecker} makes Crypto cost higher! (x2)`)
    }
    if (EventChecker == "command event") {
      chat.reply(`The ${EventChecker} gives you rewards for using AbicamBot commands!`)
    }
  },
  description: "Gives you info about the current event"
}

export {EventCheck, EventHelp};