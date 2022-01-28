import {
	MCAdmireItem,
	MCAttack,
	MCBalloonable,
	MCBehavior_AvoidMobType,
	MCBehavior_Beg,
	MCBehavior_Float,
	MCBehavior_FollowOwner,
	MCBehavior_FollowParent,
	MCBehavior_Hide,
	MCBehavior_HurtByTarget,
	MCBehavior_KnockbackRoar,
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
	MCEnvironmentSensor,
	MCEquipment,
	MCExplode,
	MCFireImmune,
	MCFloatsInLiquid,
	MCFlyingSpeed,
	MCFootSize,
	MCFrictionModifier,
	MCHealable,
	MCHealth,
	MCHiddenWhenInvisible,
	MCIllagerCaptain,
	MCInputGroundControlled,
	MCInstantDespawn,
	MCInteract,
	MCIsBaby,
	MCIsCharged,
	MCIsChested,
	MCIsHiddenWhenInvisible,
	MCIsIgnited,
	MCIsIllagerCaptain,
	MCIsSaddled,
	MCIsSheared,
	MCIsStunned,
	MCIsTamed,
	MCJump_Static,
	MCKnockbackResistance,
	MCLeashable,
	MCLoot,
	MCMarkVariant,
	MCMovement,
	MCMovement_,
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
	MCOutOfControl,
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
	MCSkinId,
	MCSpawnEntity,
	MCStackable,
	MCTameable,
	MCTamemount,
	MCTickWorld,
	MCTimer,
	MCTransformation,
	MCTypeFamily,
	MCVariant,
	MCWaterMovement,
} from "."
import { ComponentKey } from "../../shared/ComponentKey"

export interface Components {
	MCAdmireItem?: MCAdmireItem
	MCAttack?: MCAttack
	MCBalloonable?: MCBalloonable
	MCBehavior_AvoidMobType?: MCBehavior_AvoidMobType
	MCBehavior_Beg?: MCBehavior_Beg
	MCBehavior_Float?: MCBehavior_Float
	MCBehavior_FollowOwner?: MCBehavior_FollowOwner
	MCBehavior_FollowParent?: MCBehavior_FollowParent
	MCBehavior_Hide?: MCBehavior_Hide
	MCBehavior_HurtByTarget?: MCBehavior_HurtByTarget
	MCBehavior_KnockbackRoar?: MCBehavior_KnockbackRoar
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
	MCEnvironmentSensor?: MCEnvironmentSensor
	MCEquipment?: MCEquipment
	MCExplode?: MCExplode
	MCFireImmune?: MCFireImmune
	MCFloatsInLiquid?: MCFloatsInLiquid
	MCFlyingSpeed?: MCFlyingSpeed
	MCFootSize?: MCFootSize
	MCFrictionModifier?: MCFrictionModifier
	MCHealable?: MCHealable
	MCHealth?: MCHealth
	MCHiddenWhenInvisible?: MCHiddenWhenInvisible
	MCIllagerCaptain?: MCIllagerCaptain
	MCInputGroundControlled?: MCInputGroundControlled
	MCInstantDespawn?: MCInstantDespawn
	MCInteract?: MCInteract
	MCIsBaby?: MCIsBaby
	MCIsCharged?: MCIsCharged
	MCIsChested?: MCIsChested
	MCIsHiddenWhenInvisible?: MCIsHiddenWhenInvisible
	MCIsIgnited?: MCIsIgnited
	MCIsIllagerCaptain?: MCIsIllagerCaptain
	MCIsSaddled?: MCIsSaddled
	MCIsSheared?: MCIsSheared
	MCIsStunned?: MCIsStunned
	MCIsTamed?: MCIsTamed
	MCJump_Static?: MCJump_Static
	MCKnockbackResistance?: MCKnockbackResistance
	MCLeashable?: MCLeashable
	MCLoot?: MCLoot
	MCMarkVariant?: MCMarkVariant
	MCMovement?: MCMovement
	MCMovement_?: MCMovement_
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
	MCOutOfControl?: MCOutOfControl
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
	MCSkinId?: MCSkinId
	MCSpawnEntity?: MCSpawnEntity
	MCStackable?: MCStackable
	MCTameable?: MCTameable
	MCTamemount?: MCTamemount
	MCTickWorld?: MCTickWorld
	MCTimer?: MCTimer
	MCTransformation?: MCTransformation
	MCTypeFamily?: MCTypeFamily
	MCVariant?: MCVariant
	MCWaterMovement?: MCWaterMovement
	[key: ComponentKey]: unknown
}
