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
import { MCMarkVariant } from "./dummies/MCMarkVariant"
import { MCOutOfControl } from "./dummies/MCOutOfControl"
import { MCSkinId } from "./dummies/MCSkinId"
import { MCVariant } from "./dummies/MCVariant"
import { MCBehavior_FollowParent } from "./MCBehavior_FollowParent"
import { MCCollisionBox } from "./MCCollisionBox"
import { MCHealth } from "./MCHealth"
import { MCJump_Static } from "./MCJump_Static"
import { MCMovement } from "./MCMovement"
import { MCMovement_Amphibious } from "./MCMovement_Amphibious"
import { MCMovement_Basic } from "./MCMovement_Basic"
import { MCMovement_Fly } from "./MCMovement_Fly"
import { MCMovement_Generic } from "./MCMovement_Generic"
import { MCMovement_Hover } from "./MCMovement_Hover"
import { MCMovement_Jump } from "./MCMovement_Jump"
import { MCMovement_Skip } from "./MCMovement_Skip"
import { MCMovement_Sway } from "./MCMovement_Sway"
import { MCNavigation_Climb } from "./MCNavigation_Climb"
import { MCNavigation_Float } from "./MCNavigation_Float"
import { MCNavigation_Fly } from "./MCNavigation_Fly"
import { MCNavigation_Generic } from "./MCNavigation_Generic"
import { MCNavigation_Hover } from "./MCNavigation_Hover"
import { MCNavigation_Swim } from "./MCNavigation_Swim"
import { MCNavigation_Walk } from "./MCNavigation_Walk"
import { MCPhysics } from "./MCPhysics"
import { MCTypeFamily } from "./MCTypeFamily"

export interface Components {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: `minecraft:${string}`]: any // Allows adding raw json components

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
	MCMarkVariant?: MCMarkVariant
	MCOutOfControl?: MCOutOfControl
	MCSkinId?: MCSkinId
	MCVariant?: MCVariant
	MCBehavior_FollowParent?: MCBehavior_FollowParent
	MCCollisionBox?: MCCollisionBox
	MCHealth?: MCHealth
	MCJump_Static?: MCJump_Static
	MCMovement?: MCMovement
	MCMovement_Amphibious?: MCMovement_Amphibious
	MCMovement_Basic?: MCMovement_Basic
	MCMovement_Fly?: MCMovement_Fly
	MCMovement_Generic?: MCMovement_Generic
	MCMovement_Hover?: MCMovement_Hover
	MCMovement_Jump?: MCMovement_Jump
	MCMovement_Skip?: MCMovement_Skip
	MCMovement_Sway?: MCMovement_Sway
	MCNavigation_Climb?: MCNavigation_Climb
	MCNavigation_Float?: MCNavigation_Float
	MCNavigation_Fly?: MCNavigation_Fly
	MCNavigation_Generic?: MCNavigation_Generic
	MCNavigation_Hover?: MCNavigation_Hover
	MCNavigation_Swim?: MCNavigation_Swim
	MCNavigation_Walk?: MCNavigation_Walk
	MCPhysics?: MCPhysics
	MCTypeFamily?: MCTypeFamily
}
