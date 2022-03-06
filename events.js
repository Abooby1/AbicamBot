const TZ = process.env['TZ']
const TZ2 = process.env['TZ2']

var CryptoEvent = false
var CommandEvent = false
var MoneyEvent = false
var EventChecker = ""

const date = new Date()
date.toLocaleString( TZ2, { timeZone: TZ });

setInterval(function( ) {
  var Day = date.getDate()
  if (Day == 1 || Day == 2 || Day == 3) {
    CryptoEvent = true
    EventChecker = "crypto event"
    CommandEvent = false
  }
  if (Day == 4 || Day == 5 || Day == 6) {
    CommandEvent = true
    EventChecker = "command event"
    CryptoEvent = false
  }
  if (Day == 7 || Day == 8 || Day == 9) {
    MoneyEvent = true
    EventChecker = "money event"
    CommandEvent = false
  }
  if (Day == 10 || Day == 11 || Day == 12) {
    CryptoEvent = true
    EventChecker = "crypto event"
    MoneyEvent = false
  }
  if (Day == 13 || Day == 14 || Day == 15) {
    CommandEvent = true
    EventChecker = "command event"
    CryptoEvent = false
  }
  if (Day == 16 || Day == 17 || Day == 18) {
    MoneyEvent = true
    EventChecker = "money event"
    CommandEvent = false
  }
  if (Day == 19 || Day == 20 || Day == 21) {
    CryptoEvent = true
    EventChecker = "crypto event"
    MoneyEvent = false
  }
  if (Day == 22 || Day == 23 || Day == 24) {
    CommandEvent = true
    EventChecker = "command event"
    CryptoEvent = false
  }
  if (Day == 25 || Day == 26 || Day == 27) {
    MoneyEvent = true
    EventChecker = "money event"
    CommandEvent = false
  }
  if (Day == 28 || Day == 29 || Day == 30 || Day == 31) {
    CommandEvent = true
    EventChecker = "command event"
  }
}, 1000)

export {CryptoEvent, CommandEvent, MoneyEvent, EventChecker}
