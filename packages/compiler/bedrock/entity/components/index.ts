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
import { MCAdmireItem } from "./MCAdmireItem"
import { MCAttack } from "./MCAttack"
import { MCBalloonable } from "./MCBalloonable"
import { MCBehavior_Beg } from "./MCBehavior_Beg"
import { MCBehavior_Float } from "./MCBehavior_Float"
import { MCBehavior_FollowOwner } from "./MCBehavior_FollowOwner"
import { MCBehavior_FollowParent } from "./MCBehavior_FollowParent"
import { MCBehavior_Hide } from "./MCBehavior_Hide"
import { MCBehavior_HurtByTarget } from "./MCBehavior_HurtByTarget"
import { MCBehavior_LookAtPlayer } from "./MCBehavior_LookAtPlayer"
import { MCBehavior_MeleeAttack } from "./MCBehavior_MeleeAttack"
import { MCBehavior_MoveToPoi } from "./MCBehavior_MoveToPoi"
import { MCBehavior_NearestAttackableTarget } from "./MCBehavior_NearestAttackableTarget"
import { MCBehavior_PickUpItems } from "./MCBehavior_PickUpItems"
import { MCBehavior_RandomFly } from "./MCBehavior_RandomFly"
import { MCBehavior_RandomLookAround } from "./MCBehavior_RandomLookAround"
import { MCBehavior_RandomStroll } from "./MCBehavior_RandomStroll"
import { MCBehavior_Scared } from "./MCBehavior_Scared"
import { MCBehavior_Sneeze } from "./MCBehavior_Sneeze"
import { MCBehavior_StayWhileSitting } from "./MCBehavior_StayWhileSitting"
import { MCBreathable } from "./MCBreathable"
import { MCCanClimb } from "./MCCanClimb"
import { MCCanFly } from "./MCCanFly"
import { MCCanPowerJump } from "./MCCanPowerJump"
import { MCCollisionBox } from "./MCCollisionBox"
import { MCCustomHitTest } from "./MCCustomHitTest"
import { MCDamageSensor } from "./MCDamageSensor"
import { MCDespawn } from "./MCDespawn"
import { MCEconomyTradeTable } from "./MCEconomyTradeTable"
import { MCEquipment } from "./MCEquipment"
import { MCExplode } from "./MCExplode"
import { MCFireImmune } from "./MCFireImmune"
import { MCFloatsInLiquid } from "./MCFloatsInLiquid"
import { MCFlyingSpeed } from "./MCFlyingSpeed"
import { MCFootSize } from "./MCFootSize"
import { MCFrictionModifier } from "./MCFrictionModifier"
import { MCHealable } from "./MCHealable"
import { MCHealth } from "./MCHealth"
import { MCInputGroundControlled } from "./MCInputGroundControlled"
import { MCInstantDespawn } from "./MCInstantDespawn"
import { MCInteract } from "./MCInteract"
import { MCIsHiddenWhenInvisible } from "./MCIsHiddenWhenInvisible"
import { MCJump_Static } from "./MCJump_Static"
import { MCKnockbackResistance } from "./MCKnockbackResistance"
import { MCLeashable } from "./MCLeashable"
import { MCLoot } from "./MCLoot"
import { MCMovement } from "./MCMovement"
import { MCMovement_Amphibious } from "./MCMovement_Amphibious"
import { MCMovement_Basic } from "./MCMovement_Basic"
import { MCMovement_Fly } from "./MCMovement_Fly"
import { MCMovement_Generic } from "./MCMovement_Generic"
import { MCMovement_Hover } from "./MCMovement_Hover"
import { MCMovement_Jump } from "./MCMovement_Jump"
import { MCMovement_Skip } from "./MCMovement_Skip"
import { MCMovement_Sway } from "./MCMovement_Sway"
import { MCNameable } from "./MCNameable"
import { MCNavigation_Climb } from "./MCNavigation_Climb"
import { MCNavigation_Float } from "./MCNavigation_Float"
import { MCNavigation_Fly } from "./MCNavigation_Fly"
import { MCNavigation_Generic } from "./MCNavigation_Generic"
import { MCNavigation_Hover } from "./MCNavigation_Hover"
import { MCNavigation_Swim } from "./MCNavigation_Swim"
import { MCNavigation_Walk } from "./MCNavigation_Walk"
import { MCPersistent } from "./MCPersistent"
import { MCPhysics } from "./MCPhysics"
import { MCPushable } from "./MCPushable"
import { MCPushThrough } from "./MCPushThrough"
import { MCRideable } from "./MCRideable"
import { MCScaffoldingClimber } from "./MCScaffoldingClimber"
import { MCScale } from "./MCScale"
import { MCScaleByAge } from "./MCScaleByAge"
import { MCShaking } from "./MCShaking"
import { MCShareable } from "./MCShareable"
import { MCShooter } from "./MCShooter"
import { MCSittable } from "./MCSittable"
import { MCSpawnEntity } from "./MCSpawnEntity"
import { MCStackable } from "./MCStackable"
import { MCTameable } from "./MCTameable"
import { MCTamemount } from "./MCTamemount"
import { MCTickWorld } from "./MCTickWorld"
import { MCTimer } from "./MCTimer"
import { MCTransformation } from "./MCTransformation"
import { MCTypeFamily } from "./MCTypeFamily"
import { MCWaterMovement } from "./MCWaterMovement"

export interface Components {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: `minecraft:${string}`]: any // Allows adding raw json components

	MCAdmireItem?: MCAdmireItem
	MCAttack?: MCAttack
	MCBalloonable?: MCBalloonable
	MCBehavior_Beg?: MCBehavior_Beg
	MCBehavior_Float?: MCBehavior_Float
	MCBehavior_FollowOwner?: MCBehavior_FollowOwner
	MCBehavior_FollowParent?: MCBehavior_FollowParent
	MCBehavior_Hide?: MCBehavior_Hide
	MCBehavior_HurtByTarget?: MCBehavior_HurtByTarget
	MCBehavior_LookAtPlayer?: MCBehavior_LookAtPlayer
	MCBehavior_MeleeAttack?: MCBehavior_MeleeAttack
	MCBehavior_MoveToPoi?: MCBehavior_MoveToPoi
	MCBehavior_NearestAttackableTarget?: MCBehavior_NearestAttackableTarget
	MCBehavior_PickUpItems?: MCBehavior_PickUpItems
	MCBehavior_RandomFly?: MCBehavior_RandomFly
	MCBehavior_RandomLookAround?: MCBehavior_RandomLookAround
	MCBehavior_RandomStroll?: MCBehavior_RandomStroll
	MCBehavior_Scared?: MCBehavior_Scared
	MCBehavior_Sneeze?: MCBehavior_Sneeze
	MCBehavior_StayWhileSitting?: MCBehavior_StayWhileSitting
	MCBreathable?: MCBreathable
	MCCanClimb?: MCCanClimb
	MCCanFly?: MCCanFly
	MCCanPowerJump?: MCCanPowerJump
	MCCollisionBox?: MCCollisionBox
	MCCustomHitTest?: MCCustomHitTest
	MCDamageSensor?: MCDamageSensor
	MCDespawn?: MCDespawn
	MCEconomyTradeTable?: MCEconomyTradeTable
	MCEquipment?: MCEquipment
	MCExplode?: MCExplode
	MCFireImmune?: MCFireImmune
	MCFloatsInLiquid?: MCFloatsInLiquid
	MCFlyingSpeed?: MCFlyingSpeed
	MCFootSize?: MCFootSize
	MCFrictionModifier?: MCFrictionModifier
	MCHealable?: MCHealable
	MCHealth?: MCHealth
	MCInputGroundControlled?: MCInputGroundControlled
	MCInstantDespawn?: MCInstantDespawn
	MCInteract?: MCInteract
	MCIsHiddenWhenInvisible?: MCIsHiddenWhenInvisible
	MCJump_Static?: MCJump_Static
	MCKnockbackResistance?: MCKnockbackResistance
	MCLeashable?: MCLeashable
	MCLoot?: MCLoot
	MCMovement?: MCMovement
	MCMovement_Amphibious?: MCMovement_Amphibious
	MCMovement_Basic?: MCMovement_Basic
	MCMovement_Fly?: MCMovement_Fly
	MCMovement_Generic?: MCMovement_Generic
	MCMovement_Hover?: MCMovement_Hover
	MCMovement_Jump?: MCMovement_Jump
	MCMovement_Skip?: MCMovement_Skip
	MCMovement_Sway?: MCMovement_Sway
	MCNameable?: MCNameable
	MCNavigation_Climb?: MCNavigation_Climb
	MCNavigation_Float?: MCNavigation_Float
	MCNavigation_Fly?: MCNavigation_Fly
	MCNavigation_Generic?: MCNavigation_Generic
	MCNavigation_Hover?: MCNavigation_Hover
	MCNavigation_Swim?: MCNavigation_Swim
	MCNavigation_Walk?: MCNavigation_Walk
	MCPersistent?: MCPersistent
	MCPhysics?: MCPhysics
	MCPushable?: MCPushable
	MCPushThrough?: MCPushThrough
	MCRideable?: MCRideable
	MCScaffoldingClimber?: MCScaffoldingClimber
	MCScale?: MCScale
	MCScaleByAge?: MCScaleByAge
	MCShaking?: MCShaking
	MCShareable?: MCShareable
	MCShooter?: MCShooter
	MCSittable?: MCSittable
	MCSpawnEntity?: MCSpawnEntity
	MCStackable?: MCStackable
	MCTameable?: MCTameable
	MCTamemount?: MCTamemount
	MCTickWorld?: MCTickWorld
	MCTimer?: MCTimer
	MCTransformation?: MCTransformation
	MCTypeFamily?: MCTypeFamily
	MCWaterMovement?: MCWaterMovement
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
}
