// provides functions for database i guess
import Database from "@replit/database";
import {DATABASE_PREFIX} from "./constants.js";

const db = new Database();
/* invert the ranks so higher ranks are higher numbers
ranks: 
1. Owner (5)
2. Bot (4)
2. Premium (3)
3. Special (2)
4. Normal (1)
5. Banned (0)
*/
// work

const specialRanks = {
  "6154f0d0a8d6d106c5b869b6": "Owner", // 5

  "61c60d39e1e6417b595cfd19": "Bot", // 4

  "6066b99198895e660082965b": "Premium", //3

  "61b4520e4ea86c6fe9800c3b": "Special", // 2
  "60bd0243edf9d8003785ad79": "Special",
  "61998d154ef0457408274fd6": "Special",
  "60bec83971e696002fbed2b6": "Special",
  "60cc125987bc8024f5313c94": "Special",
  "60ebea911ed7340d378eb7f1": "Special",
  "618eaf874ef0457408227ff5": "Special",

  // Normal: 1

  "615633bcf03ce145ddce4708": "Banned", //0
  "61d6f884ae777c689f511205": "Banned",
  "6160e942979ff73857562a19": "Banned"
}

export const defaultData = {
  money: 0,
  crypto: 0,
  wins: 0,
  loses: 0,
  happy: 0,
  food: 0,
  scrolls: 5,
  coins: 50,
  energy: 100,
  workers: 0,
  business: "",
  rank: "Normal" // 1
};

export async function getDataForUserId(userid) {
  let result;
  try {
    result = JSON.parse(await db.get(`${DATABASE_PREFIX}${userid}`))
    if (!result) {
      result = {};
    }
  } catch (e) {
    result = {};
  }
  if (specialRanks[userid]) {
    result.rank = specialRanks[userid];
  }
  return {...defaultData, ...result};
}

const userDataPromises = {};
class UserDataManager {
  saveTimeout = setTimeout(()=>{
    this.save();
  }, 2_000)

  async pull(){
    this.value = await getDataForUserId(this.userid);
  }
  applyRanks(){
    if (specialRanks[this.userid]) {
      result.rank = specialRanks[this.userid];
    }
  }
  async save(){
    await saveDataForUserId(this.userid, this.value);
  }
  update(){
    this.saveTimeout.refresh();
  }
  constructor(id, value){
    this.userid = id;
    this.value = value;
  }
}

export async function getUserDataManager(userid){
  if (!userDataPromises[userid]) {
    userDataPromises[userid] = new Promise(async (res, rej)=>{
      const data = await getDataForUserId(userid);
      const obj = new UserDataManager(userid, data);
      res(obj);
    })
  }
  return userDataPromises[userid];
}

export async function saveDataForUserId(userid, data) {
  if (!data) throw new Error("Argument 2 'data' not specified.");
  const serialized = JSON.stringify(data);
  await db.set(`${DATABASE_PREFIX}${userid}`, serialized);
}
