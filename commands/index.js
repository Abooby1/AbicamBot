import {Actions} from "./actions/index.js"
import {Kimburlia} from "./kimburlia/index.js"
import {FunCommands} from "./fun/index.js"
import {Economy} from "./economy/index.js";

export const Commands = [
  ...Actions,
  ...FunCommands,
  ...Kimburlia, 
  ...Economy,
];