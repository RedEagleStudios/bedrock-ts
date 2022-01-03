import {
	MCAdmireItem,
	MCAttack,
	MCBalloonable,
	MCBehavior_Beg,
	MCBehavior_Float,
	MCBehavior_FollowOwner,
	MCBehavior_FollowParent,
	MCBehavior_Hide,
	MCBehavior_HurtByTarget,
	MCBehavior_LookAtPlayer,
	MCBehavior_MeleeAttack,
	MCBehavior_MoveToPoi,
	MCBehavior_NearestAttackableTarget,
	MCBehavior_PickUpItems,
	MCBehavior_RandomFly,
	MCBehavior_RandomLookAround,
	MCBehavior_RandomStroll,
	MCBehavior_Scared,
	MCBehavior_Sneeze,
	MCBehavior_StayWhileSitting,
	MCBreathable,
	MCCanClimb,
	MCCanFly,
	MCCanPowerJump,
	MCCollisionBox,
	MCCustomHitTest,
	MCDamageSensor,
	MCDespawn,
	MCEconomyTradeTable,
	MCEquipment,
	MCExplode,
	MCFireImmune,
	MCFloatsInLiquid,
	MCFlyingSpeed,
	MCFootSize,
	MCFrictionModifier,
	MCHealable,
	MCHealth,
	MCInputGroundControlled,
	MCInstantDespawn,
	MCInteract,
	MCIsHiddenWhenInvisible,
	MCJump_Static,
	MCKnockbackResistance,
	MCLeashable,
	MCLoot,
	MCMovement,
	MCMovement_Amphibious,
	MCMovement_Basic,
	MCMovement_Fly,
	MCMovement_Generic,
	MCMovement_Hover,
	MCMovement_Jump,
	MCMovement_Skip,
	MCMovement_Sway,
	MCNameable,
	MCNavigation_Climb,
	MCNavigation_Float,
	MCNavigation_Fly,
	MCNavigation_Generic,
	MCNavigation_Hover,
	MCNavigation_Swim,
	MCNavigation_Walk,
	MCPersistent,
	MCPhysics,
	MCPushable,
	MCPushThrough,
	MCRideable,
	MCScaffoldingClimber,
	MCScale,
	MCScaleByAge,
	MCShaking,
	MCShareable,
	MCShooter,
	MCSittable,
	MCSpawnEntity,
	MCStackable,
	MCTameable,
	MCTameMount,
	MCTickWorld,
	MCTimer,
	MCTransformation,
	MCTypeFamily,
	MCWaterMovement,
} from "."
import {
	MCIsBaby,
	MCIsCharged,
	MCIsChested,
	MCIsIgnited,
	MCIsIllagerCaptain,
	MCIsSaddled,
	MCIsSheared,
	MCIsStunned,
	MCIsTamed,
	MCMarkVariant,
	MCOutOfControl,
	MCSkinId,
	MCVariant,
} from "./dummies"

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
	MCTameMount?: MCTameMount
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
