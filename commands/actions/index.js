import {Echo} from "./echo.js"
import {Post} from "./post.js"
import {Help} from "./help.js"
import {Like} from "./like.js"
import {Unlike} from "./unlike.js"
import {RankInfo, CheckRank} from "./rankinfo.js"
import {SetMoney, ResetData, ResetSubstat, TempBan, Test} from "./debug.js"
import {EventCheck, EventHelp} from "./eventcheck.js"
import {Rules} from "./rules.js"

export const Actions = [SetMoney, ResetData, ResetSubstat, RankInfo, Echo, Post, Help, Like, Unlike, EventCheck, EventHelp, Rules, TempBan, Test, CheckRank]