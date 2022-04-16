import Database from "@replit/database";
import {DATABASE_PREFIX} from "./constants.js";

const db = new Database();
/* invert the ranks so higher ranks are higher numbers
ranks: 
1. Owner (6)
2. Mod (5)
3. Bot (4)
4. Premium (3)
5. Special (2)
6. Normal (1)
7. Banned (0)
*/
// work

const specialRanks = {
  "6154f0d0a8d6d106c5b869b6": "Owner", //100000

  "621cf9c163790d5ac3c2f938": "Mod", //010000
  "61998d154ef0457408274fd6": "Mod",
  "609d5b5a772544002e4beb25": "Mod",
  "6231fe600c9eb906137b6d98": "Mod",
  "6203c9db3f99d655b9aa81cb": "Mod",
  "61dc68a1d1975678cc267bc6": "Mod",

  "61c60d39e1e6417b595cfd19": "Bot", //001000
  "61f9afa941a9e239b62ec6f5": "Bot",

  "6066b99198895e660082965b": "Premium", //000100
  "61eef62462d52f0c8410dd1d": "Premium",
  
  "61b4520e4ea86c6fe9800c3b": "Special", //000010
  "60bd0243edf9d8003785ad79": "Special",
  "60cc125987bc8024f5313c94": "Special",
  "60ebea911ed7340d378eb7f1": "Special",
  "618eaf874ef0457408227ff5": "Special",
  "61fd694edf4668762c1c8fbc": "Special",
  "621e5255aa5d4a6b281e9387": "Special",
  "624f2ddea95b113f103a3800": "Special",
  "620afe8ea5d85736c7480a36": "Special",
  "62465bdda95b113f103322d2": "Special",
  "62221daff1c22c29f8629977": "Special",
  "6255aa3c434000065016fb6f": "Special",

  // Normal: 000001

  "615633bcf03ce145ddce4708": "Banned", //000000
  "61d6f884ae777c689f511205": "Banned",
  "6160e942979ff73857562a19": "Banned",
  "61c875e360fe4c7b88a8d071": "Banned"
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
  rank: "Normal" // 000001
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
