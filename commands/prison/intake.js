import {getRandomInt} from "../../utils.js"

const Intake = {
  names: ["intake"],
  func: ({chat, userData})=>{
    var Earned = getRandomInt(10)
    var Fund = Earned * 0.0015

    userData.value.fund += Fund
    userData.value.prisoners += Earned
    chat.reply(`You got ${Earned} prisoners. `)
    setTimeout(function( ) {
      userData.update()
    }, 2500)
  },
  description: "Intake random amount of prisoners",
  permission: rank => rank != "Banned"
};

export {Intake};