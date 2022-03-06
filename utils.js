import {CryptoEvent} from "./events.js"

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export var ADS = [
  "Check out patreon.com/abicambot",
  "Follow @Abooby",
  "Let Kitty-Human-Art draw you, just ask @kitty!",
  "Join to get the latest severe weather: https://app.photop.live/?j=1391a410",
]

export var CryptoSelling = 5

setInterval(function() {
  var CryptoRandom = getRandomInt(10)
  if (CryptoRandom <= 2) {
    if (CryptoEvent == true) {
      CryptoSelling = 50
    } else {
      CryptoSelling = 25
    }
  }
  if (CryptoRandom >= 3) {
    if (CryptoEvent == true) {
      CryptoSelling = 10
    } else {
      CryptoSelling = 5
    }
  }
}, 120000)