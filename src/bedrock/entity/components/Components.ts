import {
	MCAdmireItem,
	MCAngry,
	MCAnnotation_BreakDoor,
	MCAreaAttack,
	MCAttack,
	MCBalloonable,
	MCBehavior_AvoidMobType,
	MCBehavior_Beg,
	MCBehavior_DelayedAttack,
	MCBehavior_Float,
	MCBehavior_FloatWander,
	MCBehavior_FollowOwner,
	MCBehavior_FollowParent,
	MCBehavior_Hide,
	MCBehavior_HurtByTarget,
	MCBehavior_KnockbackRoar,
	MCBehavior_LookAtPlayer,
	MCBehavior_MeleeAttack,
	MCBehavior_MoveToLand,
	MCBehavior_MoveToLava,
	MCBehavior_MoveToPoi,
	MCBehavior_NearestAttackableTarget,
	MCBehavior_Panic,
	MCBehavior_PickupItems,
	MCBehavior_RandomBreach,
	MCBehavior_RandomFly,
	MCBehavior_RandomLookAround,
	MCBehavior_RandomStroll,
	MCBehavior_RandomSwim,
	MCBehavior_RangedAttack,
	MCBehavior_RiseToLiquidLevel,
	MCBehavior_Scared,
	MCBehavior_SlimeAttack,
	MCBehavior_SlimeFloat,
	MCBehavior_SlimeKeepOnJumping,
	MCBehavior_SlimeRandomDirection,
	MCBehavior_Sneeze,
	MCBehavior_StayWhileSitting,
	MCBreathable,
	MCCanClimb,
	MCCanFly,
	MCCanPowerJump,
	MCCollisionBox,
	MCConditionalBandwidthOptimization,
	MCCustomHitTest,
	MCDamageSensor,
	MCDespawn,
	MCEconomyTradeTable,
	MCEnvironmentSensor,
	MCEquipment,
	MCExperienceReward,
	MCExplode,
	MCFireImmune,
	MCFloatsInLiquid,
	MCFlyingSpeed,
	MCFootSize,
	MCFrictionModifier,
	MCHealable,
	MCHealth,
	MCHiddenWhenInvisible,
	MCHurtOnCondition,
	MCIllagerCaptain,
	MCInputGroundControlled,
	MCInstantDespawn,
	MCInteract,
	MCInventory,
	MCIsBaby,
	MCIsCharged,
	MCIsChested,
	MCIsHiddenWhenInvisible,
	MCIsIgnited,
	MCIsIllagerCaptain,
	MCIsSaddled,
	MCIsShaking,
	MCIsSheared,
	MCIsStackable,
	MCIsStunned,
	MCIsTamed,
	MCJump_Static,
	MCKnockbackResistance,
	MCLeashable,
	MCLoot,
	MCMarkVariant,
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
	MCOnTargetAcquired,
	MCOnTargetEscape,
	MCOutOfControl,
	MCPersistent,
	MCPhysics,
	MCPushable,
	MCPushThrough,
	MCRideable,
	MCScaffoldingClimber,
	MCScale,
	MCScaleByAge,
	MCShareables,
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
	MCUnderwaterMovement,
	MCVariant,
	MCWaterMovement,
} from "."

export interface Components {
	MCAdmireItem?: MCAdmireItem
	MCAngry?: MCAngry
	MCAnnotation_BreakDoor?: MCAnnotation_BreakDoor
	MCAreaAttack?: MCAreaAttack
	MCAttack?: MCAttack
	MCBalloonable?: MCBalloonable
	MCBehavior_AvoidMobType?: MCBehavior_AvoidMobType
	MCBehavior_Beg?: MCBehavior_Beg
	MCBehavior_DelayedAttack?: MCBehavior_DelayedAttack
	MCBehavior_Float?: MCBehavior_Float
	MCBehavior_FloatWander?: MCBehavior_FloatWander
	MCBehavior_FollowOwner?: MCBehavior_FollowOwner
	MCBehavior_FollowParent?: MCBehavior_FollowParent
	MCBehavior_Hide?: MCBehavior_Hide
	MCBehavior_HurtByTarget?: MCBehavior_HurtByTarget
	MCBehavior_KnockbackRoar?: MCBehavior_KnockbackRoar
	MCBehavior_LookAtPlayer?: MCBehavior_LookAtPlayer
	MCBehavior_MeleeAttack?: MCBehavior_MeleeAttack
	MCBehavior_MoveToLand?: MCBehavior_MoveToLand
	MCBehavior_MoveToLava?: MCBehavior_MoveToLava
	MCBehavior_MoveToPoi?: MCBehavior_MoveToPoi
	MCBehavior_NearestAttackableTarget?: MCBehavior_NearestAttackableTarget
	MCBehavior_Panic?: MCBehavior_Panic
	MCBehavior_PickupItems?: MCBehavior_PickupItems
	MCBehavior_RandomBreach?: MCBehavior_RandomBreach
	MCBehavior_RandomFly?: MCBehavior_RandomFly
	MCBehavior_RandomLookAround?: MCBehavior_RandomLookAround
	MCBehavior_RandomStroll?: MCBehavior_RandomStroll
	MCBehavior_RandomSwim?: MCBehavior_RandomSwim
	MCBehavior_RangedAttack?: MCBehavior_RangedAttack
	MCBehavior_RiseToLiquidLevel?: MCBehavior_RiseToLiquidLevel
	MCBehavior_Scared?: MCBehavior_Scared
	MCBehavior_SlimeAttack?: MCBehavior_SlimeAttack
	MCBehavior_SlimeFloat?: MCBehavior_SlimeFloat
	MCBehavior_SlimeKeepOnJumping?: MCBehavior_SlimeKeepOnJumping
	MCBehavior_SlimeRandomDirection?: MCBehavior_SlimeRandomDirection
	MCBehavior_Sneeze?: MCBehavior_Sneeze
	MCBehavior_StayWhileSitting?: MCBehavior_StayWhileSitting
	MCBreathable?: MCBreathable
	MCCanClimb?: MCCanClimb
	MCCanFly?: MCCanFly
	MCCanPowerJump?: MCCanPowerJump
	MCCollisionBox?: MCCollisionBox
	MCConditionalBandwidthOptimization?: MCConditionalBandwidthOptimization
	MCCustomHitTest?: MCCustomHitTest
	MCDamageSensor?: MCDamageSensor
	MCDespawn?: MCDespawn
	MCEconomyTradeTable?: MCEconomyTradeTable
	MCEnvironmentSensor?: MCEnvironmentSensor
	MCEquipment?: MCEquipment
	MCExperienceReward?: MCExperienceReward
	MCExplode?: MCExplode
	MCFireImmune?: MCFireImmune
	MCFloatsInLiquid?: MCFloatsInLiquid
	MCFlyingSpeed?: MCFlyingSpeed
	MCFootSize?: MCFootSize
	MCFrictionModifier?: MCFrictionModifier
	MCHealable?: MCHealable
	MCHealth?: MCHealth
	MCHiddenWhenInvisible?: MCHiddenWhenInvisible
	MCHurtOnCondition?: MCHurtOnCondition
	MCIllagerCaptain?: MCIllagerCaptain
	MCInputGroundControlled?: MCInputGroundControlled
	MCInstantDespawn?: MCInstantDespawn
	MCInteract?: MCInteract
	MCInventory?: MCInventory
	MCIsBaby?: MCIsBaby
	MCIsCharged?: MCIsCharged
	MCIsChested?: MCIsChested
	MCIsHiddenWhenInvisible?: MCIsHiddenWhenInvisible
	MCIsIgnited?: MCIsIgnited
	MCIsIllagerCaptain?: MCIsIllagerCaptain
	MCIsSaddled?: MCIsSaddled
	MCIsShaking?: MCIsShaking
	MCIsSheared?: MCIsSheared
	MCIsStackable?: MCIsStackable
	MCIsStunned?: MCIsStunned
	MCIsTamed?: MCIsTamed
	MCJump_Static?: MCJump_Static
	MCKnockbackResistance?: MCKnockbackResistance
	MCLeashable?: MCLeashable
	MCLoot?: MCLoot
	MCMarkVariant?: MCMarkVariant
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
	MCOnTargetAcquired?: MCOnTargetAcquired
	MCOnTargetEscape?: MCOnTargetEscape
	MCOutOfControl?: MCOutOfControl
	MCPersistent?: MCPersistent
	MCPhysics?: MCPhysics
	MCPushable?: MCPushable
	MCPushThrough?: MCPushThrough
	MCRideable?: MCRideable
	MCScaffoldingClimber?: MCScaffoldingClimber
	MCScale?: MCScale
	MCScaleByAge?: MCScaleByAge
	MCShareables?: MCShareables
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
	MCUnderwaterMovement?: MCUnderwaterMovement
	MCVariant?: MCVariant
	MCWaterMovement?: MCWaterMovement
	[key: `minecraft:${string}`]: unknown
}
