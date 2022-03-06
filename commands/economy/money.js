const Money = {
  names: ["money"],
  func: ({chat, userData})=>{
    chat.reply(`You have $${userData.value.money.toFixed(2)}!`)
  },
  description: "I will chat how much money you have"
};

/*
const CheckMoney = {
  names: ["checkmoney", "check.money"],
  func: async ({chat, body, userData}) => {
    const userid = body
    const money = await userData.value.money;
    chat.reply(`${userid}'s balance is ${money}`)
  }
}
*/

export {Money/*, CheckMoney*/};