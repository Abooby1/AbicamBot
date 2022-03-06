import { CryptoSelling } from "../../utils.js"
import {getUserDataManager} from "../../database.js";

const CryptoInfo = {
  names: ["crypto.info", "cryptoinfo"],
  func: ({ chat, userData }) => {
    chat.reply(`You have ${userData.value.crypto} Crypto! | Crypto is currently selling for $${CryptoSelling}`)
  },
  description: "Get info about crypto"
};

const CryptoBuy = {
  names: ["crypto.buy", "cryptobuy"],
  func: ({ chat, body, userData }) => {
    if (body != "") {
      if (userData.value.money >= CryptoSelling * body) {
        setTimeout(async function () {
          const userData = await getDataForUserId(chat.author.id);
        }, 100)
        userData.value.money -= CryptoSelling * body
        userData.value.crypto += body
        chat.reply(`You bought ${body} Crypto!`)
        setTimeout(function( ) {
          userData.update()
        }, 500)
      } else {
        chat.reply(`You dont have enough money to buy ${body} Crypto... | You need $${CryptoSelling * body} to buy that amount of Crypto`)
      }
    } else {
      chat.reply("You cant buy air...")
    }
  },
  permission: rank => rank != "Banned",
  description: "Buy Crypto"
};

const CryptoSell = {
  names: ["crypto.sell", "cryptosell"],
  func: ({ chat, userData }) => {
    if (userData.value.crypto >= 1) {
      chat.reply(`You sold ${userData.value.crypto} Crypto!`)
      userData.value.money += userData.value.crypto * CryptoSelling
      userData.value.crypto = 0
      setTimeout(function( ) {
        userData.update()
      }, 500)
    } else {
      chat.reply(`You need more than that to sell Crypto...`)
    }
  },
  permission: rank => rank != "Banned",
  description: "Sell Crypto"
};

export { CryptoInfo, CryptoBuy, CryptoSell }
