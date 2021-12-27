import { MCCanClimb } from "./dummies/MCCanClimb"
import { MCCanFly } from "./dummies/MCCanFly"
import { MCCanPowerJump } from "./dummies/MCCanPowerJump"
import { MCIsBaby } from "./dummies/MCIsBaby"
import { MCIsCharged } from "./dummies/MCIsCharged"
import { MCIsChested } from "./dummies/MCIsChested"
import { MCIsIgnited } from "./dummies/MCIsIgnited"
import { MCIsIllagerCaptain } from "./dummies/MCIsIllagerCaptain"
import { MCIsSaddled } from "./dummies/MCIsSaddled"
import { MCIsSheared } from "./dummies/MCIsSheared"
import { MCIsStunned } from "./dummies/MCIsStunned"
import { MCIsTamed } from "./dummies/MCIsTamed"
import { MCOutOfControl } from "./dummies/MCOutOfControl"
import { MCCollisionBox } from "./MCCollisionBox"
import { MCHealth } from "./MCHealth"

export type Components = {
	MCCanClimb?: MCCanClimb
	MCCanFly?: MCCanFly
	MCCanPowerJump?: MCCanPowerJump
	MCIsBaby?: MCIsBaby
	MCIsCharged?: MCIsCharged
	MCIsChested?: MCIsChested
	MCIsIgnited?: MCIsIgnited
	MCIsIllagerCaptain?: MCIsIllagerCaptain
	MCIsSaddled?: MCIsSaddled
	MCIsSheared?: MCIsSheared
	MCIsStunned?: MCIsStunned
	MCIsTamed?: MCIsTamed
	MCOutOfControl?: MCOutOfControl
	MCCollisionBox?: MCCollisionBox
	MCHealth?: MCHealth
}
