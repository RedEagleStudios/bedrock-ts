import { LiteralUnion } from "../../types/LiteralUnion"
import { Identifier } from "./Identifier"

export type ItemIdentifier = LiteralUnion<
	| "minecraft:acacia_boat"
	| "minecraft:acacia_button"
	| "minecraft:acacia_door"
	| "minecraft:acacia_fence_gate"
	| "minecraft:acacia_pressure_plate"
	| "minecraft:acacia_sign"
	| "minecraft:acacia_stairs"
	| "minecraft:acacia_standing_sign"
	| "minecraft:acacia_trapdoor"
	| "minecraft:acacia_wall_sign"
	| "minecraft:activator_rail"
	| "minecraft:agent_spawn_egg"
	| "minecraft:air"
	| "minecraft:allow"
	| "minecraft:amethyst_block"
	| "minecraft:amethyst_cluster"
	| "minecraft:amethyst_shard"
	| "minecraft:ancient_debris"
	| "minecraft:andesite_stairs"
	| "minecraft:anvil"
	| "minecraft:apple"
	| "minecraft:appleEnchanted"
	| "minecraft:armor_stand"
	| "minecraft:arrow"
	| "minecraft:axolotl_bucket"
	| "minecraft:axolotl_spawn_egg"
	| "minecraft:azalea"
	| "minecraft:azalea_leaves"
	| "minecraft:azalea_leaves_flowered"
	| "minecraft:baked_potato"
	| "minecraft:balloon"
	| "minecraft:bamboo"
	| "minecraft:bamboo_sapling"
	| "minecraft:banner"
	| "minecraft:banner_pattern"
	| "minecraft:barrel"
	| "minecraft:barrier"
	| "minecraft:basalt"
	| "minecraft:bat_spawn_egg"
	| "minecraft:beacon"
	| "minecraft:bed"
	| "minecraft:bedrock"
	| "minecraft:bee_nest"
	| "minecraft:bee_spawn_egg"
	| "minecraft:beef"
	| "minecraft:beehive"
	| "minecraft:beetroot"
	| "minecraft:beetroot_seeds"
	| "minecraft:beetroot_soup"
	| "minecraft:bell"
	| "minecraft:big_dripleaf"
	| "minecraft:birch_boat"
	| "minecraft:birch_button"
	| "minecraft:birch_door"
	| "minecraft:birch_fence_gate"
	| "minecraft:birch_pressure_plate"
	| "minecraft:birch_sign"
	| "minecraft:birch_stairs"
	| "minecraft:birch_standing_sign"
	| "minecraft:birch_trapdoor"
	| "minecraft:birch_wall_sign"
	| "minecraft:black_candle"
	| "minecraft:black_candle_cake"
	| "minecraft:black_dye"
	| "minecraft:black_glazed_terracotta"
	| "minecraft:blackstone"
	| "minecraft:blackstone_double_slab"
	| "minecraft:blackstone_slab"
	| "minecraft:blackstone_stairs"
	| "minecraft:blackstone_wall"
	| "minecraft:blast_furnace"
	| "minecraft:blaze_powder"
	| "minecraft:blaze_rod"
	| "minecraft:blaze_spawn_egg"
	| "minecraft:bleach"
	| "minecraft:blue_candle"
	| "minecraft:blue_candle_cake"
	| "minecraft:blue_dye"
	| "minecraft:blue_glazed_terracotta"
	| "minecraft:blue_ice"
	| "minecraft:boat"
	| "minecraft:bone"
	| "minecraft:bone_block"
	| "minecraft:bone_meal"
	| "minecraft:book"
	| "minecraft:bookshelf"
	| "minecraft:border_block"
	| "minecraft:bordure_indented_banner_pattern"
	| "minecraft:bow"
	| "minecraft:bowl"
	| "minecraft:bread"
	| "minecraft:brewing_stand"
	| "minecraft:brewingstandblock"
	| "minecraft:brick"
	| "minecraft:brick_block"
	| "minecraft:brick_stairs"
	| "minecraft:brown_candle"
	| "minecraft:brown_candle_cake"
	| "minecraft:brown_dye"
	| "minecraft:brown_glazed_terracotta"
	| "minecraft:brown_mushroom"
	| "minecraft:brown_mushroom_block"
	| "minecraft:bubble_column"
	| "minecraft:bucket"
	| "minecraft:budding_amethyst"
	| "minecraft:cactus"
	| "minecraft:cake"
	| "minecraft:calcite"
	| "minecraft:camera"
	| "minecraft:campfire"
	| "minecraft:candle"
	| "minecraft:candle_cake"
	| "minecraft:carpet"
	| "minecraft:carrot"
	| "minecraft:carrot_on_a_stick"
	| "minecraft:carrots"
	| "minecraft:cartography_table"
	| "minecraft:carved_pumpkin"
	| "minecraft:cat_spawn_egg"
	| "minecraft:cauldron"
	| "minecraft:cave_spider_spawn_egg"
	| "minecraft:cave_vines"
	| "minecraft:cave_vines_body_with_berries"
	| "minecraft:cave_vines_head_with_berries"
	| "minecraft:chain"
	| "minecraft:chain_command_block"
	| "minecraft:chainmail_boots"
	| "minecraft:chainmail_chestplate"
	| "minecraft:chainmail_helmet"
	| "minecraft:chainmail_leggings"
	| "minecraft:charcoal"
	| "minecraft:chemical_heat"
	| "minecraft:chemistry_table"
	| "minecraft:chest"
	| "minecraft:chest_minecart"
	| "minecraft:chicken"
	| "minecraft:chicken_spawn_egg"
	| "minecraft:chiseled_deepslate"
	| "minecraft:chiseled_nether_bricks"
	| "minecraft:chiseled_polished_blackstone"
	| "minecraft:chorus_flower"
	| "minecraft:chorus_fruit"
	| "minecraft:chorus_plant"
	| "minecraft:clay"
	| "minecraft:clay_ball"
	| "minecraft:client_request_placeholder_block"
	| "minecraft:clock"
	| "minecraft:clownfish"
	| "minecraft:coal"
	| "minecraft:coal_block"
	| "minecraft:coal_ore"
	| "minecraft:cobbled_deepslate"
	| "minecraft:cobbled_deepslate_double_slab"
	| "minecraft:cobbled_deepslate_slab"
	| "minecraft:cobbled_deepslate_stairs"
	| "minecraft:cobbled_deepslate_wall"
	| "minecraft:cobblestone"
	| "minecraft:cobblestone_wall"
	| "minecraft:cocoa"
	| "minecraft:cocoa_beans"
	| "minecraft:cod"
	| "minecraft:cod_bucket"
	| "minecraft:cod_spawn_egg"
	| "minecraft:colored_torch_bp"
	| "minecraft:colored_torch_rg"
	| "minecraft:command_block"
	| "minecraft:command_block_minecart"
	| "minecraft:comparator"
	| "minecraft:compass"
	| "minecraft:composter"
	| "minecraft:compound"
	| "minecraft:concrete"
	| "minecraft:concrete_powder"
	| "minecraft:conduit"
	| "minecraft:cooked_beef"
	| "minecraft:cooked_chicken"
	| "minecraft:cooked_cod"
	| "minecraft:cooked_fish"
	| "minecraft:cooked_mutton"
	| "minecraft:cooked_porkchop"
	| "minecraft:cooked_rabbit"
	| "minecraft:cooked_salmon"
	| "minecraft:cookie"
	| "minecraft:copper_block"
	| "minecraft:copper_ingot"
	| "minecraft:copper_ore"
	| "minecraft:coral"
	| "minecraft:coral_block"
	| "minecraft:coral_fan"
	| "minecraft:coral_fan_dead"
	| "minecraft:coral_fan_hang"
	| "minecraft:coral_fan_hang2"
	| "minecraft:coral_fan_hang3"
	| "minecraft:cow_spawn_egg"
	| "minecraft:cracked_deepslate_bricks"
	| "minecraft:cracked_deepslate_tiles"
	| "minecraft:cracked_nether_bricks"
	| "minecraft:cracked_polished_blackstone_bricks"
	| "minecraft:crafting_table"
	| "minecraft:creeper_banner_pattern"
	| "minecraft:creeper_spawn_egg"
	| "minecraft:crimson_button"
	| "minecraft:crimson_door"
	| "minecraft:crimson_double_slab"
	| "minecraft:crimson_fence"
	| "minecraft:crimson_fence_gate"
	| "minecraft:crimson_fungus"
	| "minecraft:crimson_hyphae"
	| "minecraft:crimson_nylium"
	| "minecraft:crimson_planks"
	| "minecraft:crimson_pressure_plate"
	| "minecraft:crimson_roots"
	| "minecraft:crimson_sign"
	| "minecraft:crimson_slab"
	| "minecraft:crimson_stairs"
	| "minecraft:crimson_standing_sign"
	| "minecraft:crimson_stem"
	| "minecraft:crimson_trapdoor"
	| "minecraft:crimson_wall_sign"
	| "minecraft:crossbow"
	| "minecraft:crying_obsidian"
	| "minecraft:cut_copper"
	| "minecraft:cut_copper_slab"
	| "minecraft:cut_copper_stairs"
	| "minecraft:cyan_candle"
	| "minecraft:cyan_candle_cake"
	| "minecraft:cyan_dye"
	| "minecraft:cyan_glazed_terracotta"
	| "minecraft:dark_oak_boat"
	| "minecraft:dark_oak_button"
	| "minecraft:dark_oak_door"
	| "minecraft:dark_oak_fence_gate"
	| "minecraft:dark_oak_pressure_plate"
	| "minecraft:dark_oak_sign"
	| "minecraft:dark_oak_stairs"
	| "minecraft:dark_oak_trapdoor"
	| "minecraft:dark_prismarine_stairs"
	| "minecraft:darkoak_standing_sign"
	| "minecraft:darkoak_wall_sign"
	| "minecraft:daylight_detector"
	| "minecraft:daylight_detector_inverted"
	| "minecraft:deadbush"
	| "minecraft:debug_stick"
	| "minecraft:deepslate"
	| "minecraft:deepslate_brick_double_slab"
	| "minecraft:deepslate_brick_slab"
	| "minecraft:deepslate_brick_stairs"
	| "minecraft:deepslate_brick_wall"
	| "minecraft:deepslate_bricks"
	| "minecraft:deepslate_coal_ore"
	| "minecraft:deepslate_copper_ore"
	| "minecraft:deepslate_diamond_ore"
	| "minecraft:deepslate_emerald_ore"
	| "minecraft:deepslate_gold_ore"
	| "minecraft:deepslate_iron_ore"
	| "minecraft:deepslate_lapis_ore"
	| "minecraft:deepslate_redstone_ore"
	| "minecraft:deepslate_tile_double_slab"
	| "minecraft:deepslate_tile_slab"
	| "minecraft:deepslate_tile_stairs"
	| "minecraft:deepslate_tile_wall"
	| "minecraft:deepslate_tiles"
	| "minecraft:deny"
	| "minecraft:detector_rail"
	| "minecraft:diamond"
	| "minecraft:diamond_axe"
	| "minecraft:diamond_block"
	| "minecraft:diamond_boots"
	| "minecraft:diamond_chestplate"
	| "minecraft:diamond_helmet"
	| "minecraft:diamond_hoe"
	| "minecraft:diamond_horse_armor"
	| "minecraft:diamond_leggings"
	| "minecraft:diamond_ore"
	| "minecraft:diamond_pickaxe"
	| "minecraft:diamond_shovel"
	| "minecraft:diamond_sword"
	| "minecraft:diorite_stairs"
	| "minecraft:dirt"
	| "minecraft:dirt_with_roots"
	| "minecraft:dispenser"
	| "minecraft:dolphin_spawn_egg"
	| "minecraft:donkey_spawn_egg"
	| "minecraft:double_cut_copper_slab"
	| "minecraft:double_plant"
	| "minecraft:double_stone_slab"
	| "minecraft:double_stone_slab2"
	| "minecraft:double_stone_slab3"
	| "minecraft:double_stone_slab4"
	| "minecraft:double_wooden_slab"
	| "minecraft:dragon_breath"
	| "minecraft:dragon_egg"
	| "minecraft:dried_kelp"
	| "minecraft:dried_kelp_block"
	| "minecraft:dripstone_block"
	| "minecraft:dropper"
	| "minecraft:drowned_spawn_egg"
	| "minecraft:dye"
	| "minecraft:egg"
	| "minecraft:elder_guardian_spawn_egg"
	| "minecraft:elytra"
	| "minecraft:emerald"
	| "minecraft:emerald_block"
	| "minecraft:emerald_ore"
	| "minecraft:empty_map"
	| "minecraft:enchanted_book"
	| "minecraft:enchanted_golden_apple"
	| "minecraft:enchanting_table"
	| "minecraft:end_brick_stairs"
	| "minecraft:end_bricks"
	| "minecraft:end_crystal"
	| "minecraft:end_gateway"
	| "minecraft:end_portal"
	| "minecraft:end_portal_frame"
	| "minecraft:end_rod"
	| "minecraft:end_stone"
	| "minecraft:ender_chest"
	| "minecraft:ender_eye"
	| "minecraft:ender_pearl"
	| "minecraft:enderman_spawn_egg"
	| "minecraft:endermite_spawn_egg"
	| "minecraft:evoker_spawn_egg"
	| "minecraft:experience_bottle"
	| "minecraft:exposed_copper"
	| "minecraft:exposed_cut_copper"
	| "minecraft:exposed_cut_copper_slab"
	| "minecraft:exposed_cut_copper_stairs"
	| "minecraft:exposed_double_cut_copper_slab"
	| "minecraft:farmland"
	| "minecraft:feather"
	| "minecraft:fence"
	| "minecraft:fence_gate"
	| "minecraft:fermented_spider_eye"
	| "minecraft:field_masoned_banner_pattern"
	| "minecraft:filled_map"
	| "minecraft:fire"
	| "minecraft:fire_charge"
	| "minecraft:firework_rocket"
	| "minecraft:firework_star"
	| "minecraft:fish"
	| "minecraft:fishing_rod"
	| "minecraft:fletching_table"
	| "minecraft:flint"
	| "minecraft:flint_and_steel"
	| "minecraft:flower_banner_pattern"
	| "minecraft:flower_pot"
	| "minecraft:flowering_azalea"
	| "minecraft:flowing_lava"
	| "minecraft:flowing_water"
	| "minecraft:fox_spawn_egg"
	| "minecraft:frame"
	| "minecraft:frosted_ice"
	| "minecraft:furnace"
	| "minecraft:ghast_spawn_egg"
	| "minecraft:ghast_tear"
	| "minecraft:gilded_blackstone"
	| "minecraft:glass"
	| "minecraft:glass_bottle"
	| "minecraft:glass_pane"
	| "minecraft:glistering_melon_slice"
	| "minecraft:glow_berries"
	| "minecraft:glow_frame"
	| "minecraft:glow_ink_sac"
	| "minecraft:glow_lichen"
	| "minecraft:glow_squid_spawn_egg"
	| "minecraft:glow_stick"
	| "minecraft:glowingobsidian"
	| "minecraft:glowstone"
	| "minecraft:glowstone_dust"
	| "minecraft:goat_horn"
	| "minecraft:goat_spawn_egg"
	| "minecraft:gold_block"
	| "minecraft:gold_ingot"
	| "minecraft:gold_nugget"
	| "minecraft:gold_ore"
	| "minecraft:golden_apple"
	| "minecraft:golden_axe"
	| "minecraft:golden_boots"
	| "minecraft:golden_carrot"
	| "minecraft:golden_chestplate"
	| "minecraft:golden_helmet"
	| "minecraft:golden_hoe"
	| "minecraft:golden_horse_armor"
	| "minecraft:golden_leggings"
	| "minecraft:golden_pickaxe"
	| "minecraft:golden_rail"
	| "minecraft:golden_shovel"
	| "minecraft:golden_sword"
	| "minecraft:granite_stairs"
	| "minecraft:grass"
	| "minecraft:grass_path"
	| "minecraft:gravel"
	| "minecraft:gray_candle"
	| "minecraft:gray_candle_cake"
	| "minecraft:gray_dye"
	| "minecraft:gray_glazed_terracotta"
	| "minecraft:green_candle"
	| "minecraft:green_candle_cake"
	| "minecraft:green_dye"
	| "minecraft:green_glazed_terracotta"
	| "minecraft:grindstone"
	| "minecraft:guardian_spawn_egg"
	| "minecraft:gunpowder"
	| "minecraft:hanging_roots"
	| "minecraft:hard_glass"
	| "minecraft:hard_glass_pane"
	| "minecraft:hard_stained_glass"
	| "minecraft:hard_stained_glass_pane"
	| "minecraft:hardened_clay"
	| "minecraft:hay_block"
	| "minecraft:heart_of_the_sea"
	| "minecraft:heavy_weighted_pressure_plate"
	| "minecraft:hoglin_spawn_egg"
	| "minecraft:honey_block"
	| "minecraft:honey_bottle"
	| "minecraft:honeycomb"
	| "minecraft:honeycomb_block"
	| "minecraft:hopper"
	| "minecraft:hopper_minecart"
	| "minecraft:horse_spawn_egg"
	| "minecraft:husk_spawn_egg"
	| "minecraft:ice"
	| "minecraft:ice_bomb"
	| "minecraft:infested_deepslate"
	| "minecraft:info_update"
	| "minecraft:info_update2"
	| "minecraft:ink_sac"
	| "minecraft:invisiblebedrock"
	| "minecraft:iron_axe"
	| "minecraft:iron_bars"
	| "minecraft:iron_block"
	| "minecraft:iron_boots"
	| "minecraft:iron_chestplate"
	| "minecraft:iron_door"
	| "minecraft:iron_helmet"
	| "minecraft:iron_hoe"
	| "minecraft:iron_horse_armor"
	| "minecraft:iron_ingot"
	| "minecraft:iron_leggings"
	| "minecraft:iron_nugget"
	| "minecraft:iron_ore"
	| "minecraft:iron_pickaxe"
	| "minecraft:iron_shovel"
	| "minecraft:iron_sword"
	| "minecraft:iron_trapdoor"
	| "minecraft:item.acacia_door"
	| "minecraft:item.bed"
	| "minecraft:item.beetroot"
	| "minecraft:item.birch_door"
	| "minecraft:item.cake"
	| "minecraft:item.camera"
	| "minecraft:item.campfire"
	| "minecraft:item.cauldron"
	| "minecraft:item.chain"
	| "minecraft:item.crimson_door"
	| "minecraft:item.dark_oak_door"
	| "minecraft:item.flower_pot"
	| "minecraft:item.frame"
	| "minecraft:item.glow_frame"
	| "minecraft:item.hopper"
	| "minecraft:item.iron_door"
	| "minecraft:item.jungle_door"
	| "minecraft:item.kelp"
	| "minecraft:item.nether_sprouts"
	| "minecraft:item.nether_wart"
	| "minecraft:item.reeds"
	| "minecraft:item.skull"
	| "minecraft:item.soul_campfire"
	| "minecraft:item.spruce_door"
	| "minecraft:item.warped_door"
	| "minecraft:item.wheat"
	| "minecraft:item.wooden_door"
	| "minecraft:jigsaw"
	| "minecraft:jukebox"
	| "minecraft:jungle_boat"
	| "minecraft:jungle_button"
	| "minecraft:jungle_door"
	| "minecraft:jungle_fence_gate"
	| "minecraft:jungle_pressure_plate"
	| "minecraft:jungle_sign"
	| "minecraft:jungle_stairs"
	| "minecraft:jungle_standing_sign"
	| "minecraft:jungle_trapdoor"
	| "minecraft:jungle_wall_sign"
	| "minecraft:kelp"
	| "minecraft:ladder"
	| "minecraft:lantern"
	| "minecraft:lapis_block"
	| "minecraft:lapis_lazuli"
	| "minecraft:lapis_ore"
	| "minecraft:large_amethyst_bud"
	| "minecraft:lava"
	| "minecraft:lava_bucket"
	| "minecraft:lava_cauldron"
	| "minecraft:lead"
	| "minecraft:leather"
	| "minecraft:leather_boots"
	| "minecraft:leather_chestplate"
	| "minecraft:leather_helmet"
	| "minecraft:leather_horse_armor"
	| "minecraft:leather_leggings"
	| "minecraft:leaves"
	| "minecraft:leaves2"
	| "minecraft:lectern"
	| "minecraft:lever"
	| "minecraft:light_block"
	| "minecraft:light_blue_candle"
	| "minecraft:light_blue_candle_cake"
	| "minecraft:light_blue_dye"
	| "minecraft:light_blue_glazed_terracotta"
	| "minecraft:light_gray_candle"
	| "minecraft:light_gray_candle_cake"
	| "minecraft:light_gray_dye"
	| "minecraft:light_weighted_pressure_plate"
	| "minecraft:lightning_rod"
	| "minecraft:lime_candle"
	| "minecraft:lime_candle_cake"
	| "minecraft:lime_dye"
	| "minecraft:lime_glazed_terracotta"
	| "minecraft:lingering_potion"
	| "minecraft:lit_blast_furnace"
	| "minecraft:lit_deepslate_redstone_ore"
	| "minecraft:lit_furnace"
	| "minecraft:lit_pumpkin"
	| "minecraft:lit_redstone_lamp"
	| "minecraft:lit_redstone_ore"
	| "minecraft:lit_smoker"
	| "minecraft:llama_spawn_egg"
	| "minecraft:lodestone"
	| "minecraft:lodestone_compass"
	| "minecraft:log"
	| "minecraft:log2"
	| "minecraft:loom"
	| "minecraft:magenta_candle"
	| "minecraft:magenta_candle_cake"
	| "minecraft:magenta_dye"
	| "minecraft:magenta_glazed_terracotta"
	| "minecraft:magma"
	| "minecraft:magma_cream"
	| "minecraft:magma_cube_spawn_egg"
	| "minecraft:medicine"
	| "minecraft:medium_amethyst_bud"
	| "minecraft:melon"
	| "minecraft:melon_block"
	| "minecraft:melon_seeds"
	| "minecraft:melon_slice"
	| "minecraft:melon_stem"
	| "minecraft:milk_bucket"
	| "minecraft:minecart"
	| "minecraft:mob_spawner"
	| "minecraft:mojang_banner_pattern"
	| "minecraft:monster_egg"
	| "minecraft:mooshroom_spawn_egg"
	| "minecraft:moss_block"
	| "minecraft:moss_carpet"
	| "minecraft:mossy_cobblestone"
	| "minecraft:mossy_cobblestone_stairs"
	| "minecraft:mossy_stone_brick_stairs"
	| "minecraft:movingblock"
	| "minecraft:mule_spawn_egg"
	| "minecraft:mushroom_stew"
	| "minecraft:music_disc_11"
	| "minecraft:music_disc_13"
	| "minecraft:music_disc_blocks"
	| "minecraft:music_disc_cat"
	| "minecraft:music_disc_chirp"
	| "minecraft:music_disc_far"
	| "minecraft:music_disc_mall"
	| "minecraft:music_disc_mellohi"
	| "minecraft:music_disc_otherside"
	| "minecraft:music_disc_pigstep"
	| "minecraft:music_disc_stal"
	| "minecraft:music_disc_strad"
	| "minecraft:music_disc_wait"
	| "minecraft:music_disc_ward"
	| "minecraft:mutton"
	| "minecraft:muttonCooked"
	| "minecraft:muttonRaw"
	| "minecraft:mycelium"
	| "minecraft:mysterious_frame"
	| "minecraft:mysterious_frame_slot"
	| "minecraft:name_tag"
	| "minecraft:nautilus_shell"
	| "minecraft:nether_brick"
	| "minecraft:nether_brick_fence"
	| "minecraft:nether_brick_stairs"
	| "minecraft:nether_gold_ore"
	| "minecraft:nether_sprouts"
	| "minecraft:nether_star"
	| "minecraft:nether_wart"
	| "minecraft:nether_wart_block"
	| "minecraft:netherbrick"
	| "minecraft:netherite_axe"
	| "minecraft:netherite_block"
	| "minecraft:netherite_boots"
	| "minecraft:netherite_chestplate"
	| "minecraft:netherite_helmet"
	| "minecraft:netherite_hoe"
	| "minecraft:netherite_ingot"
	| "minecraft:netherite_leggings"
	| "minecraft:netherite_pickaxe"
	| "minecraft:netherite_scrap"
	| "minecraft:netherite_shovel"
	| "minecraft:netherite_sword"
	| "minecraft:netherrack"
	| "minecraft:netherreactor"
	| "minecraft:normal_stone_stairs"
	| "minecraft:noteblock"
	| "minecraft:npc_spawn_egg"
	| "minecraft:oak_boat"
	| "minecraft:oak_sign"
	| "minecraft:oak_stairs"
	| "minecraft:observer"
	| "minecraft:obsidian"
	| "minecraft:ocelot_spawn_egg"
	| "minecraft:orange_candle"
	| "minecraft:orange_candle_cake"
	| "minecraft:orange_dye"
	| "minecraft:orange_glazed_terracotta"
	| "minecraft:oxidized_copper"
	| "minecraft:oxidized_cut_copper"
	| "minecraft:oxidized_cut_copper_slab"
	| "minecraft:oxidized_cut_copper_stairs"
	| "minecraft:oxidized_double_cut_copper_slab"
	| "minecraft:packed_ice"
	| "minecraft:painting"
	| "minecraft:panda_spawn_egg"
	| "minecraft:paper"
	| "minecraft:parrot_spawn_egg"
	| "minecraft:phantom_membrane"
	| "minecraft:phantom_spawn_egg"
	| "minecraft:pig_spawn_egg"
	| "minecraft:piglin_banner_pattern"
	| "minecraft:piglin_brute_spawn_egg"
	| "minecraft:piglin_spawn_egg"
	| "minecraft:pillager_spawn_egg"
	| "minecraft:pink_candle"
	| "minecraft:pink_candle_cake"
	| "minecraft:pink_dye"
	| "minecraft:pink_glazed_terracotta"
	| "minecraft:piston"
	| "minecraft:pistonarmcollision"
	| "minecraft:planks"
	| "minecraft:podzol"
	| "minecraft:pointed_dripstone"
	| "minecraft:poisonous_potato"
	| "minecraft:polar_bear_spawn_egg"
	| "minecraft:polished_andesite_stairs"
	| "minecraft:polished_basalt"
	| "minecraft:polished_blackstone"
	| "minecraft:polished_blackstone_brick_double_slab"
	| "minecraft:polished_blackstone_brick_slab"
	| "minecraft:polished_blackstone_brick_stairs"
	| "minecraft:polished_blackstone_brick_wall"
	| "minecraft:polished_blackstone_bricks"
	| "minecraft:polished_blackstone_button"
	| "minecraft:polished_blackstone_double_slab"
	| "minecraft:polished_blackstone_pressure_plate"
	| "minecraft:polished_blackstone_slab"
	| "minecraft:polished_blackstone_stairs"
	| "minecraft:polished_blackstone_wall"
	| "minecraft:polished_deepslate"
	| "minecraft:polished_deepslate_double_slab"
	| "minecraft:polished_deepslate_slab"
	| "minecraft:polished_deepslate_stairs"
	| "minecraft:polished_deepslate_wall"
	| "minecraft:polished_diorite_stairs"
	| "minecraft:polished_granite_stairs"
	| "minecraft:popped_chorus_fruit"
	| "minecraft:porkchop"
	| "minecraft:portal"
	| "minecraft:potato"
	| "minecraft:potatoes"
	| "minecraft:potion"
	| "minecraft:powder_snow"
	| "minecraft:powder_snow_bucket"
	| "minecraft:powered_comparator"
	| "minecraft:powered_repeater"
	| "minecraft:prismarine"
	| "minecraft:prismarine_bricks_stairs"
	| "minecraft:prismarine_crystals"
	| "minecraft:prismarine_shard"
	| "minecraft:prismarine_stairs"
	| "minecraft:pufferfish"
	| "minecraft:pufferfish_bucket"
	| "minecraft:pufferfish_spawn_egg"
	| "minecraft:pumpkin"
	| "minecraft:pumpkin_pie"
	| "minecraft:pumpkin_seeds"
	| "minecraft:pumpkin_stem"
	| "minecraft:purple_candle"
	| "minecraft:purple_candle_cake"
	| "minecraft:purple_dye"
	| "minecraft:purple_glazed_terracotta"
	| "minecraft:purpur_block"
	| "minecraft:purpur_stairs"
	| "minecraft:quartz"
	| "minecraft:quartz_block"
	| "minecraft:quartz_bricks"
	| "minecraft:quartz_ore"
	| "minecraft:quartz_stairs"
	| "minecraft:rabbit"
	| "minecraft:rabbit_foot"
	| "minecraft:rabbit_hide"
	| "minecraft:rabbit_spawn_egg"
	| "minecraft:rabbit_stew"
	| "minecraft:rail"
	| "minecraft:rapid_fertilizer"
	| "minecraft:ravager_spawn_egg"
	| "minecraft:raw_copper"
	| "minecraft:raw_copper_block"
	| "minecraft:raw_gold"
	| "minecraft:raw_gold_block"
	| "minecraft:raw_iron"
	| "minecraft:raw_iron_block"
	| "minecraft:real_double_stone_slab"
	| "minecraft:real_double_stone_slab2"
	| "minecraft:real_double_stone_slab3"
	| "minecraft:real_double_stone_slab4"
	| "minecraft:red_candle"
	| "minecraft:red_candle_cake"
	| "minecraft:red_dye"
	| "minecraft:red_flower"
	| "minecraft:red_glazed_terracotta"
	| "minecraft:red_mushroom"
	| "minecraft:red_mushroom_block"
	| "minecraft:red_nether_brick"
	| "minecraft:red_nether_brick_stairs"
	| "minecraft:red_sandstone"
	| "minecraft:red_sandstone_stairs"
	| "minecraft:redstone"
	| "minecraft:redstone_block"
	| "minecraft:redstone_lamp"
	| "minecraft:redstone_ore"
	| "minecraft:redstone_torch"
	| "minecraft:redstone_wire"
	| "minecraft:repeater"
	| "minecraft:repeating_command_block"
	| "minecraft:reserved6"
	| "minecraft:respawn_anchor"
	| "minecraft:rotten_flesh"
	| "minecraft:saddle"
	| "minecraft:salmon"
	| "minecraft:salmon_bucket"
	| "minecraft:salmon_spawn_egg"
	| "minecraft:sand"
	| "minecraft:sandstone"
	| "minecraft:sandstone_stairs"
	| "minecraft:sapling"
	| "minecraft:scaffolding"
	| "minecraft:sculk"
	| "minecraft:sculk_catalyst"
	| "minecraft:sculk_sensor"
	| "minecraft:sculk_shrieker"
	| "minecraft:sculk_vein"
	| "minecraft:scute"
	| "minecraft:sea_pickle"
	| "minecraft:seagrass"
	| "minecraft:sealantern"
	| "minecraft:shears"
	| "minecraft:sheep_spawn_egg"
	| "minecraft:shield"
	| "minecraft:shroomlight"
	| "minecraft:shulker_box"
	| "minecraft:shulker_shell"
	| "minecraft:shulker_spawn_egg"
	| "minecraft:silver_glazed_terracotta"
	| "minecraft:silverfish_spawn_egg"
	| "minecraft:skeleton_horse_spawn_egg"
	| "minecraft:skeleton_spawn_egg"
	| "minecraft:skull"
	| "minecraft:skull_banner_pattern"
	| "minecraft:slime"
	| "minecraft:slime_ball"
	| "minecraft:slime_spawn_egg"
	| "minecraft:small_amethyst_bud"
	| "minecraft:small_dripleaf_block"
	| "minecraft:smithing_table"
	| "minecraft:smoker"
	| "minecraft:smooth_basalt"
	| "minecraft:smooth_quartz_stairs"
	| "minecraft:smooth_red_sandstone_stairs"
	| "minecraft:smooth_sandstone_stairs"
	| "minecraft:smooth_stone"
	| "minecraft:snow"
	| "minecraft:snow_layer"
	| "minecraft:snowball"
	| "minecraft:soul_campfire"
	| "minecraft:soul_fire"
	| "minecraft:soul_lantern"
	| "minecraft:soul_sand"
	| "minecraft:soul_soil"
	| "minecraft:soul_torch"
	| "minecraft:sparkler"
	| "minecraft:spawn_egg"
	| "minecraft:spider_eye"
	| "minecraft:spider_spawn_egg"
	| "minecraft:splash_potion"
	| "minecraft:sponge"
	| "minecraft:spore_blossom"
	| "minecraft:spruce_boat"
	| "minecraft:spruce_button"
	| "minecraft:spruce_door"
	| "minecraft:spruce_fence_gate"
	| "minecraft:spruce_pressure_plate"
	| "minecraft:spruce_sign"
	| "minecraft:spruce_stairs"
	| "minecraft:spruce_standing_sign"
	| "minecraft:spruce_trapdoor"
	| "minecraft:spruce_wall_sign"
	| "minecraft:spyglass"
	| "minecraft:squid_spawn_egg"
	| "minecraft:stained_glass"
	| "minecraft:stained_glass_pane"
	| "minecraft:stained_hardened_clay"
	| "minecraft:standing_banner"
	| "minecraft:standing_sign"
	| "minecraft:stick"
	| "minecraft:sticky_piston"
	| "minecraft:stickypistonarmcollision"
	| "minecraft:stone"
	| "minecraft:stone_axe"
	| "minecraft:stone_brick_stairs"
	| "minecraft:stone_button"
	| "minecraft:stone_hoe"
	| "minecraft:stone_pickaxe"
	| "minecraft:stone_pressure_plate"
	| "minecraft:stone_shovel"
	| "minecraft:stone_stairs"
	| "minecraft:stone_sword"
	| "minecraft:stonebrick"
	| "minecraft:stonecutter"
	| "minecraft:stonecutter_block"
	| "minecraft:stray_spawn_egg"
	| "minecraft:strider_spawn_egg"
	| "minecraft:string"
	| "minecraft:stripped_acacia_log"
	| "minecraft:stripped_birch_log"
	| "minecraft:stripped_crimson_hyphae"
	| "minecraft:stripped_crimson_stem"
	| "minecraft:stripped_dark_oak_log"
	| "minecraft:stripped_jungle_log"
	| "minecraft:stripped_oak_log"
	| "minecraft:stripped_spruce_log"
	| "minecraft:stripped_warped_hyphae"
	| "minecraft:stripped_warped_stem"
	| "minecraft:structure_block"
	| "minecraft:structure_void"
	| "minecraft:sugar"
	| "minecraft:sugar_cane"
	| "minecraft:suspicious_stew"
	| "minecraft:sweet_berries"
	| "minecraft:sweet_berry_bush"
	| "minecraft:tallgrass"
	| "minecraft:target"
	| "minecraft:tinted_glass"
	| "minecraft:tnt"
	| "minecraft:tnt_minecart"
	| "minecraft:torch"
	| "minecraft:totem_of_undying"
	| "minecraft:trapdoor"
	| "minecraft:trapped_chest"
	| "minecraft:trident"
	| "minecraft:tripwire"
	| "minecraft:tripwire_hook"
	| "minecraft:tropical_fish"
	| "minecraft:tropical_fish_bucket"
	| "minecraft:tropical_fish_spawn_egg"
	| "minecraft:tuff"
	| "minecraft:turtle_egg"
	| "minecraft:turtle_helmet"
	| "minecraft:turtle_spawn_egg"
	| "minecraft:twisting_vines"
	| "minecraft:underwater_torch"
	| "minecraft:undyed_shulker_box"
	| "minecraft:unknown"
	| "minecraft:unlit_redstone_torch"
	| "minecraft:unpowered_comparator"
	| "minecraft:unpowered_repeater"
	| "minecraft:vex_spawn_egg"
	| "minecraft:villager_spawn_egg"
	| "minecraft:vindicator_spawn_egg"
	| "minecraft:vine"
	| "minecraft:wall_banner"
	| "minecraft:wall_sign"
	| "minecraft:wandering_trader_spawn_egg"
	| "minecraft:warped_button"
	| "minecraft:warped_door"
	| "minecraft:warped_double_slab"
	| "minecraft:warped_fence"
	| "minecraft:warped_fence_gate"
	| "minecraft:warped_fungus"
	| "minecraft:warped_fungus_on_a_stick"
	| "minecraft:warped_hyphae"
	| "minecraft:warped_nylium"
	| "minecraft:warped_planks"
	| "minecraft:warped_pressure_plate"
	| "minecraft:warped_roots"
	| "minecraft:warped_sign"
	| "minecraft:warped_slab"
	| "minecraft:warped_stairs"
	| "minecraft:warped_standing_sign"
	| "minecraft:warped_stem"
	| "minecraft:warped_trapdoor"
	| "minecraft:warped_wall_sign"
	| "minecraft:warped_wart_block"
	| "minecraft:water"
	| "minecraft:water_bucket"
	| "minecraft:waterlily"
	| "minecraft:waxed_copper"
	| "minecraft:waxed_cut_copper"
	| "minecraft:waxed_cut_copper_slab"
	| "minecraft:waxed_cut_copper_stairs"
	| "minecraft:waxed_double_cut_copper_slab"
	| "minecraft:waxed_exposed_copper"
	| "minecraft:waxed_exposed_cut_copper"
	| "minecraft:waxed_exposed_cut_copper_slab"
	| "minecraft:waxed_exposed_cut_copper_stairs"
	| "minecraft:waxed_exposed_double_cut_copper_slab"
	| "minecraft:waxed_oxidized_copper"
	| "minecraft:waxed_oxidized_cut_copper"
	| "minecraft:waxed_oxidized_cut_copper_slab"
	| "minecraft:waxed_oxidized_cut_copper_stairs"
	| "minecraft:waxed_oxidized_double_cut_copper_slab"
	| "minecraft:waxed_weathered_copper"
	| "minecraft:waxed_weathered_cut_copper"
	| "minecraft:waxed_weathered_cut_copper_slab"
	| "minecraft:waxed_weathered_cut_copper_stairs"
	| "minecraft:waxed_weathered_double_cut_copper_slab"
	| "minecraft:weathered_copper"
	| "minecraft:weathered_cut_copper"
	| "minecraft:weathered_cut_copper_slab"
	| "minecraft:weathered_cut_copper_stairs"
	| "minecraft:weathered_double_cut_copper_slab"
	| "minecraft:web"
	| "minecraft:weeping_vines"
	| "minecraft:wheat"
	| "minecraft:wheat_seeds"
	| "minecraft:white_candle"
	| "minecraft:white_candle_cake"
	| "minecraft:white_dye"
	| "minecraft:white_glazed_terracotta"
	| "minecraft:witch_spawn_egg"
	| "minecraft:wither_rose"
	| "minecraft:wither_skeleton_spawn_egg"
	| "minecraft:wolf_spawn_egg"
	| "minecraft:wood"
	| "minecraft:wooden_axe"
	| "minecraft:wooden_button"
	| "minecraft:wooden_door"
	| "minecraft:wooden_hoe"
	| "minecraft:wooden_pickaxe"
	| "minecraft:wooden_pressure_plate"
	| "minecraft:wooden_shovel"
	| "minecraft:wooden_slab"
	| "minecraft:wooden_sword"
	| "minecraft:wool"
	| "minecraft:writable_book"
	| "minecraft:written_book"
	| "minecraft:yellow_candle"
	| "minecraft:yellow_candle_cake"
	| "minecraft:yellow_dye"
	| "minecraft:yellow_flower"
	| "minecraft:yellow_glazed_terracotta"
	| "minecraft:zoglin_spawn_egg"
	| "minecraft:zombie_horse_spawn_egg"
	| "minecraft:zombie_pigman_spawn_egg"
	| "minecraft:zombie_spawn_egg"
	| "minecraft:zombie_villager_spawn_egg",
	Identifier
>
