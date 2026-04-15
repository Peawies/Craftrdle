const ITEMS = [
  {
    id: "aotd",
    name: "Aspect of the Dragons",
    rarity: "Legendary",
    itemType: "Weapon",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/AOTD.png",
    enabled: true,
  },
  {
    id: "aote",
    name: "Aspect of the End",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.5",
    obtaining: ["Combat Collections"],
    image: "items/AOTE.png",
    enabled: true,
  },
  {
    id: "aots",
    name: "Axe of The Shredded",
    rarity: "Legendary",
    itemType: "Weapon",
    addedVersion: "0.3",
    obtaining: ["Slayer Collections"],
    image: "items/AOTS.png",
    enabled: true,
  },
  {
    id: "cleaver",
    name: "Cleaver",
    rarity: "Uncommon",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Cleaver.png",
    enabled: true,
  },
  {
    id: "edible-mace",
    name: "Edible Mace",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Edible_Mace.png",
    enabled: true,
  },
  {
    id: "emerald-blade",
    name: "Emerald Blade",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Emerald_Blade.png",
    enabled: true,
  },
  {
    id: "end-stone-sword",
    name: "End Stone Sword",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.5",
    obtaining: ["Mining Collecions"],
    image: "items/End_Stone_Sword.png",
    enabled: true,
  },
  {
    id: "ethereal-scythe",
    name: "Ethereal Scythe",
    rarity: "Legendary",
    itemType: "Weapon",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Ethereal_Scythe.png",
    enabled: true,
  },
  {
    id: "frozen-scythe",
    name: "Frozen Scythe",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Frozen_Scythe.png",
    enabled: true,
  },
  {
    id: "glacial-trident",
    name: "Glacial Trident",
    rarity: "Legendary",
    itemType: "Weapon",
    addedVersion: "0.4",
    obtaining: ["Slayer Collections"],
    image: "items/Glacial_Trident.png",
    enabled: true,
  },
  {
    id: "golem-sword",
    name: "Golem Sword",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Golem_Sword.png",
    enabled: true,
  },
  {
    id: "leaping-sword",
    name: "Leaping Sword",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Leaping_Sword.png",
    enabled: true,
  },
  {
    id: "ornate-zombie-sword",
    name: "Ornate Zombie Sword",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.2",
    obtaining: ["Crafting (no req.)"],
    image: "items/Ornate_Zombie_Sword.png",
    enabled: true,
  },
  {
    id: "pigman-sword",
    name: "Pigman Sword",
    rarity: "Legendary",
    itemType: "Weapon",
    addedVersion: "0.3",
    obtaining: ["Farming Collections"],
    image: "items/Pigman_Sword.png",
    enabled: true,
  },
  {
    id: "pooch-sword",
    name: "Pooch Sword",
    rarity: "Legendary",
    itemType: "Weapon",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Pooch_Sword.png",
    enabled: true,
  },
  {
    id: "raider-axe",
    name: "Raider Axe",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Quest"],
    image: "items/Raider_Axe.png",
    enabled: true,
  },
  {
    id: "reaper-falchion",
    name: "Reaper Falchion",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Reaper_Falchion.png",
    enabled: true,
  },
  {
    id: "revenant-falchion",
    name: "Revenant Falchion",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Revenant_Falchion.png",
    enabled: true,
  },
  {
    id: "rogue-sword",
    name: "Rogue Sword",
    rarity: "Common",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Quest", "Purchasable"],
    image: "items/Rogue_Sword.png",
    enabled: true,
  },
  {
    id: "shaman-sword",
    name: "Shaman Sword",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Shaman_Sword.png",
    enabled: true,
  },
  {
    id: "spider-sword",
    name: "Spider Sword",
    rarity: "Common",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Spider_Sword.png",
    enabled: true,
  },
  {
    id: "tuber-staff",
    name: "Tuber Staff",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Tuber_Staff.png",
    enabled: true,
  },
  {
    id: "undead-sword",
    name: "Undead Sword",
    rarity: "Common",
    itemType: "Weapon",
    addedVersion: "0.1.15",
    obtaining: ["Purchasable"],
    image: "items/Undead_Sword.png",
    enabled: true,
  },
  {
    id: "void-sword",
    name: "Void Sword",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.5",
    obtaining: ["Quest"],
    image: "items/Void_Sword.png",
    enabled: true,
  },
  {
    id: "zombie-sword",
    name: "Zombie Sword",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Zombie_Sword.png",
    enabled: true,
  },
  {
    id: "artisanal-shortbow",
    name: "Artisanal Shortbow",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.1.15",
    obtaining: ["Purchasable"],
    image: "items/Artisanal_Shortbow.png",
    enabled: true,
  },
  {
    id: "bamboo-blowpipe",
    name: "Bamboo Blowpipe",
    rarity: "Rare",
    itemType: "Weapon",
    addedVersion: "0.4",
    obtaining: ["Farming Collections"],
    image: "items/Bamboo_Blowpipe.png",
    enabled: true,
  },
  {
    id: "bow",
    name: "Bow",
    rarity: "Common",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Crafting (no req.)"],
    image: "items/Bow.png",
    enabled: true,
  },
  {
    id: "decent-bow",
    name: "Decent Bow",
    rarity: "Uncommon",
    itemType: "Weapon",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Decent_Bow.png",
    enabled: true,
  },
  {
    id: "dragon-shortbow",
    name: "Dragon Shortbow",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.5",
    obtaining: ["Quest"],
    image: "items/Dragon_Shortbow.png",
    enabled: true,
  },
  {
    id: "end-stone-bow",
    name: "End Stone Bow",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/End_Stone_Bow.png",
    enabled: true,
  },
  {
    id: "ender-bow",
    name: "Ender Bow",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.5",
    obtaining: ["Combat Collections"],
    image: "items/Ender_Bow.png",
    enabled: true,
  },
  {
    id: "explosive-bow",
    name: "Explosive Bow",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.1.15",
    obtaining: ["Combat Collections"],
    image: "items/Explosive_Bow.png",
    enabled: true,
  },
  {
    id: "hurricane-bow",
    name: "Hurricane Bow",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Hurricane_Bow.png",
    enabled: true,
  },
  {
    id: "magma-bow",
    name: "Magma Bow",
    rarity: "Epic",
    itemType: "Weapon",
    addedVersion: "0.1.15",
    obtaining: ["Combat Collections"],
    image: "items/Magma_Bow.png",
    enabled: true,
  },
  {
    id: "runaans-bow",
    name: "Runaan's Bow",
    rarity: "Legendary",
    itemType: "Weapon",
    addedVersion: "0.1.15",
    obtaining: ["Combat Collections"],
    image: "items/Runaan's_Bow.png",
    enabled: true,
  },
  {
    id: "savanna-bow",
    name: "Savanna Bow",
    rarity: "Uncommon",
    itemType: "Weapon",
    addedVersion: "0.1.0",
    obtaining: ["Foraging Collections"],
    image: "items/Savanna_Bow.png",
    enabled: true,
  },
  {
    id: "flamerang",
    name: "Flamerang",
    rarity: "Legendary",
    itemType: "Weapon",
    addedVersion: "0.1.12",
    obtaining: ["Combat Collections"],
    image: "items/Flamerang.png",
    enabled: true,
  },
  {
    id: "armor-of-growth",
    name: "Armor of Growth",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Foraging Collections"],
    image: "items/Armor_of_Growth.png",
    enabled: true,
  },
  {
    id: "armor-of-the-pack",
    name: "Armor of the Pack",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Armor_of_the_Pack.png",
    enabled: true,
  },
  {
    id: "blaze-armor",
    name: "Blaze Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Blaze_Armor.png",
    enabled: true,
  },
  {
    id: "cactus-armor",
    name: "Cactus Armor",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.3",
    obtaining: ["Farming Collections"],
    image: "items/Cactus_Armor.png",
    enabled: true,
  },
  {
    id: "cheap-tuxedo",
    name: "Cheap Tuxedo",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.3",
    obtaining: ["Purchasable"],
    image: "items/Cheap_Tuxedo.png",
    enabled: true,
  },
  {
    id: "cropie-armor",
    name: "Cropie Armor",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.4",
    obtaining: ["Crafting (no req.)"],
    image: "items/Cropie_Armor.png",
    enabled: true,
  },
  {
    id: "crystal-armor",
    name: "Crystal Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Crystal_Armor.png",
    enabled: true,
  },
  {
    id: "elegant-tuxedo",
    name: "Elegant Tuxedo",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.3",
    obtaining: ["Purchasable"],
    image: "items/Elegant_Tuxedo.png",
    enabled: true,
  },
  {
    id: "emerald-armor",
    name: "Emerald Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Emerald_Armor.png",
    enabled: true,
  },
  {
    id: "ender-armor",
    name: "Ender Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/ENder_Armor.png",
    enabled: true,
  },
  {
    id: "fancy-tuxedo",
    name: "Fancy Tuxedo",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.3",
    obtaining: ["Purchasable"],
    image: "items/Fancy_Tuxedo.png",
    enabled: true,
  },
  {
    id: "farm-armor",
    name: "Farm Armor",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Farm_Armor.png",
    enabled: true,
  },
  {
    id: "farmer-suit",
    name: "Farmer Suit",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Farmer_Suit.png",
    enabled: true,
  },
  {
    id: "fermento-armor",
    name: "Fermento Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.4",
    obtaining: ["Crafting (no req.)"],
    image: "items/Fermento_Armor.png",
    enabled: true,
  },
  {
    id: "frozen-blaze-armor",
    name: "Frozen Blaze Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Frozen_Blaze_Armor.png",
    enabled: true,
  },
  {
    id: "golem-armor",
    name: "Golem Armor",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Golem_Armor.png",
    enabled: true,
  },
  {
    id: "hardened-diamond-armor",
    name: "Hardened Diamond Armor",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Hardened_Diamond_Armor.png",
    enabled: true,
  },
  {
    id: "lapis-armor",
    name: "Lapis Armor",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Drop"],
    image: "items/Lapis_Armor.png",
    enabled: true,
  },
  {
    id: "leaflet-armor",
    name: "Leaflet Armor",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Foraging Collections"],
    image: "items/Leaflet_Armor.png",
    enabled: true,
  },
  {
    id: "magma-armor",
    name: "Magma Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Magma_Armor.png",
    enabled: true,
  },
  {
    id: "mastiff-armor",
    name: "Mastiff Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Mastiff_Armor.png",
    enabled: true,
  },
  {
    id: "melon-armor",
    name: "Melon Armor",
    rarity: "Uncommon",
    itemType: "Armor",
    addedVersion: "0.4",
    obtaining: ["Farming Collections"],
    image: "items/Melon_Armor.png",
    enabled: true,
  },
  {
    id: "miners-armor",
    name: "Miner's Armor",
    rarity: "Uncommon",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Miner's_Armor.png",
    enabled: true,
  },
  {
    id: "mushroom-armor",
    name: "Mushroom Armor",
    rarity: "Uncommon",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Mushroom_Armor.png",
    enabled: true,
  },
  {
    id: "old-dragon-armor",
    name: "Old Dragon Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop", "Crafting (no req.)"],
    image: "items/Old_Dragon_Armor.png",
    enabled: true,
  },
  {
    id: "permafrost-armor",
    name: "Permafrost Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.4",
    obtaining: ["Slayer Collections"],
    image: "items/Permafrost_Armor.png",
    enabled: true,
  },
  {
    id: "protector-dragon-armor",
    name: "Protector Dragon Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop", "Crafting (no req.)"],
    image: "items/Protector_Dragon_Armor.png",
    enabled: true,
  },
  {
    id: "pumpkin-armor",
    name: "Pumpkin Armor",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Pumpkin_Armor.png",
    enabled: true,
  },
  {
    id: "reaper-armor",
    name: "Reaper Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Reaper_Armor.png",
    enabled: true,
  },
  {
    id: "redstone-armor",
    name: "Redstone Armor",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.8",
    obtaining: ["Drop"],
    image: "items/Redstone_Armor.png",
    enabled: true,
  },
  {
    id: "revenant-armor",
    name: "Revenant Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Revenant_Armor.png",
    enabled: true,
  },
  {
    id: "speedster-armor",
    name: "Speedster Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Speedster_Armor.png",
    enabled: true,
  },
  {
    id: "squash-armor",
    name: "Squash Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.4",
    obtaining: ["Crafting (no req.)"],
    image: "items/Squash_Armor.png",
    enabled: true,
  },
  {
    id: "strong-dragon-armor",
    name: "Strong Dragon Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop", "Crafting (no req.)"],
    image: "items/Strong_Dragon_Armor.png",
    enabled: true,
  },
  {
    id: "superior-dragon-armor",
    name: "Superior Dragon Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop", "Crafting (no req.)"],
    image: "items/Superior_Dragon_Armor.png",
    enabled: true,
  },
  {
    id: "unstable-dragon-armor",
    name: "Unstable Dragon Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop", "Crafting (no req.)"],
    image: "items/Unstable_Dragon_Armor.png",
    enabled: true,
  },
  {
    id: "wise-dragon-armor",
    name: "Wise Dragon Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop", "Crafting (no req.)"],
    image: "items/Wise_Dragon_Armor.png",
    enabled: true,
  },
  {
    id: "young-dragon-armor",
    name: "Young Dragon Armor",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop", "Crafting (no req.)"],
    image: "items/Young_Dragon_Armor.png",
    enabled: true,
  },
  {
    id: "zombie-armor",
    name: "Zombie Armor",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Zombie_Armor.png",
    enabled: true,
  },
  {
    id: "atoned-helmet",
    name: "Atoned Helmet",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.3",
    obtaining: ["Slayer Collections"],
    image: "items/Atoned_Helmet.png",
    enabled: true,
  },
  {
    id: "creeper-hat",
    name: "Creeper Hat",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Creeper_Hat.png",
    enabled: true,
  },
  {
    id: "creeper-pants",
    name: "Creeper Pants",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Creeper_Pants.png",
    enabled: true,
  },
  {
    id: "crystallized-heart",
    name: "Crystallized Heart",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Crystallized_Heart.png",
    enabled: true,
  },
  {
    id: "enderman-mask",
    name: "Enderman Mask",
    rarity: "Uncommon",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Quest"],
    image: "items/Enderman_Mask.png",
    enabled: true,
  },
  {
    id: "farmer-boots",
    name: "Farmer Boots",
    rarity: "Uncommon",
    itemType: "Armor",
    addedVersion: "0.1.14",
    obtaining: ["Farming Collections"],
    image: "items/Farmer_Boots.png",
    enabled: true,
  },
  {
    id: "lantern-helmet",
    name: "Lantern Helmet",
    rarity: "Uncommon",
    itemType: "Armor",
    addedVersion: "0.4",
    obtaining: ["Farming Collections"],
    image: "items/Lantern_Helmet.png",
    enabled: true,
  },
  {
    id: "magma-cube-helmet",
    name: "Magma Cube Helmet",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Magma_Cube_Helmet.png",
    enabled: true,
  },
  {
    id: "obsidian-chestplate",
    name: "Obsidian Chestplate",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Obsidian_Chestplate.png",
    enabled: true,
  },
  {
    id: "rancher-boots",
    name: "Rancher Boots",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.1.14",
    obtaining: ["Farming Collections"],
    image: "items/Rancher_Boots.png",
    enabled: true,
  },
  {
    id: "reaper-mask",
    name: "Reaper Mask",
    rarity: "Legendary",
    itemType: "Armor",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Reaper_Mask.png",
    enabled: true,
  },
  {
    id: "revived-heart",
    name: "Revived Heart",
    rarity: "Epic",
    itemType: "Armor",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Revived_Heart.png",
    enabled: true,
  },
  {
    id: "skeleton-hat",
    name: "Skeleton Hat",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Skeleton_Hat.png",
    enabled: true,
  },
  {
    id: "skeleton-helmet",
    name: "Skeleton Helmet",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.4",
    obtaining: ["Combat Collections"],
    image: "items/Skeleton_Helmet.png",
    enabled: true,
  },
  {
    id: "slime-hat",
    name: "SlimeHat",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Slime_Hat.png",
    enabled: true,
  },
  {
    id: "spider-boots",
    name: "Spider Boots",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Spider_Boots.png",
    enabled: true,
  },
  {
    id: "spider-hat",
    name: "Spider Hat",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.4",
    obtaining: ["Combat Collections"],
    image: "items/Spider_Hat.png",
    enabled: true,
  },
  {
    id: "zombie-hat",
    name: "Zombie Hat",
    rarity: "Common",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Zombie_Hat.png",
    enabled: true,
  },
  {
    id: "zombie-heart",
    name: "Zombie Heart",
    rarity: "Rare",
    itemType: "Armor",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Zombie_Heart.png",
    enabled: true,
  },
  {
    id: "bamboo-ring",
    name: "Bamboo Ring",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Farming Collections"],
    image: "items/Bamboo_Ring.png",
    enabled: true,
  },
  {
    id: "bamboo-talisman",
    name: "Bamboo Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Farming Collections"],
    image: "items/Bamboo_Talisman.png",
    enabled: true,
  },
  {
    id: "blood-god-crest",
    name: "Blood God Crest",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Blood_God_Crest.png",
    enabled: true,
  },
  {
    id: "cake-slice",
    name: "Cake Slice",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Quest"],
    image: "items/Cake Slice.png",
    enabled: true,
  },
  {
    id: "campfire-adept-badge",
    name: "Campfire Adept Badge",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Quest"],
    image: "items/Campfire_Adept_Badge.png",
    enabled: true,
  },
  {
    id: "campfire-cultist-badge",
    name: "Campfire Cultist Badge",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Quest"],
    image: "items/Campfire_Cultist_Badge.png",
    enabled: true,
  },
  {
    id: "campfire-initiate-badge",
    name: "Campfire Initiate Badge",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Quest"],
    image: "items/Campfire_Initiate_Badge.png",
    enabled: true,
  },
  {
    id: "campfire-god-badge",
    name: "Campfire God Badge",
    rarity: "Legendary",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Quest"],
    image: "items/Campfire_God_Badge.png",
    enabled: true,
  },
  {
    id: "campfire-scion-badge",
    name: "Campfire Scion Badge",
    rarity: "Epic",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Quest"],
    image: "items/Campfire_Scion_Badge.png",
    enabled: true,
  },
  {
    id: "coins-talisman",
    name: "Coins Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Coins_Talisman.png",
    enabled: true,
  },
  {
    id: "creative-mind",
    name: "Creative Mind",
    rarity: "Special",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Special"],
    image: "items/Creative_Mind.png",
    enabled: true,
  },
  {
    id: "cropie-talisman",
    name: "Cropie Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Crafting (no req.)"],
    image: "items/Cropie_Talisman.png",
    enabled: true,
  },
  {
    id: "dayfreezer",
    name: "Dayfreezer",
    rarity: "Legendary",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Purchasable"],
    image: "items/Dayfreezer.png",
    enabled: true,
  },
  {
    id: "draconic-artifact",
    name: "Draconic Artifact",
    rarity: "Epic",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Draconic_Artifact.png",
    enabled: true,
  },
  {
    id: "draconic-ring",
    name: "Draconic Ring",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Draconic_Ring.png",
    enabled: true,
  },
  {
    id: "draconic-talisman",
    name: "Draconic Talisman",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Draconic_Talisman.png",
    enabled: true,
  },
  {
    id: "emerald-ring",
    name: "Emerald Ring",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Emerald_Ring.png",
    enabled: true,
  },
  {
    id: "experience-artifact",
    name: "Experience Artifact",
    rarity: "Epic",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Experience_Artifact.png",
    enabled: true,
  },
  {
    id: "farmer-orb",
    name: "Farmer Orb",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Farming Collections"],
    image: "items/Farmer_Orb.png",
    enabled: true,
  },
  {
    id: "farming-talisman",
    name: "Farming Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Farming_Talisman.png",
    enabled: true,
  },
  {
    id: "farmionaire-artifact",
    name: "Farmionaire Artifact",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Farmionaire_Artifact.png",
    enabled: true,
  },
  {
    id: "farmionaire-ring",
    name: "Farmionaire Ring",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Farmionaire_Ring.png",
    enabled: true,
  },
  {
    id: "farmionaire-talisman",
    name: "Farmionaire Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Farmionaire_Talisman.png",
    enabled: true,
  },
  {
    id: "feather-artifact",
    name: "Feather Artifact",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Feather_Artifact.png",
    enabled: true,
  },
  {
    id: "feather-ring",
    name: "Feather Ring",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Feather_Ring.png",
    enabled: true,
  },
  {
    id: "feather-talisman",
    name: "Feather Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Feather_Talisman.png",
    enabled: true,
  },
  {
    id: "fermento-artifact",
    name: "Fermento Artifact",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Crafting (no req.)"],
    image: "items/Fermento_Artifact.png",
    enabled: true,
  },
  {
    id: "fire-devourer",
    name: "Fire Devourer",
    rarity: "Epic",
    itemType: "Accessory",
    addedVersion: "0.1.12",
    obtaining: ["Crafting (no req.)"],
    image: "items/Fire_Devourer.png",
    enabled: true,
  },
  {
    id: "fire-extinguisher",
    name: "Fire Extinguisher",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.1.12",
    obtaining: ["Crafting (no req.)"],
    image: "items/Fire_Extinguisher.png",
    enabled: true,
  },
  {
    id: "fire-talisman",
    name: "Fire Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Fire_Talisman.png",
    enabled: true,
  },
  {
    id: "frostclaw-relic",
    name: "Frostclaw Relic",
    rarity: "Legendary",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Slayer Collections"],
    image: "items/Frostclaw_Relic.png",
    enabled: true,
  },
  {
    id: "game-breaker",
    name: "Game Breaker",
    rarity: "Special",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Special"],
    image: "items/Game_Breaker.png",
    enabled: true,
  },
  {
    id: "golden-feather-boots",
    name: "Golden Feather Boots",
    rarity: "Legendary",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Golden_Feather_Boots.png",
    enabled: true,
  },
  {
    id: "gravity-talisman",
    name: "Gravity Talisman",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Gravity_Talisman.png",
    enabled: true,
  },
  {
    id: "hunter-ring",
    name: "Hunter Ring",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Hunter_Ring.png",
    enabled: true,
  },
  {
    id: "hunter-talisman",
    name: "Hunter Talisman",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Hunter_Talisman.png",
    enabled: true,
  },
  {
    id: "intimidation-talisman",
    name: "Intimidation Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Intimidation_Talisman.png",
    enabled: true,
  },
  {
    id: "lava-talisman",
    name: "Lava Talisman",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Lava_Talisman.png",
    enabled: true,
  },
  {
    id: "magical-encyclopedia",
    name: "Magical Encyclopedia",
    rarity: "Special",
    itemType: "Accessory",
    addedVersion: "0.1.10",
    obtaining: ["Special"],
    image: "items/Magical_Encyclopedia.png",
    enabled: true,
  },
  {
    id: "magnetic-talisman",
    name: "Magnetic Talisman",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Magnetic_Talisman.png",
    enabled: true,
  },
  {
    id: "mine-affinity-talisman",
    name: "Mine Affinity Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Mine_Affinity_Talisman.png",
    enabled: true,
  },
  {
    id: "new-years-cake-bag",
    name: "New Year's Cake Bag",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Purchasable"],
    image: "items/New_Year's_Cake_Bag.png",
    enabled: true,
  },
  {
    id: "night-vision-charm",
    name: "Night Vision Charm",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Night_Vision_Charm.png",
    enabled: true,
  },
  {
    id: "nightfreezer",
    name: "Nightfreezer",
    rarity: "Legendary",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Purchasable"],
    image: "items/Nightfreezer.png",
    enabled: true,
  },
  {
    id: "piggy-bank",
    name: "Piggy Bank",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Farming Collections"],
    image: "items/Piggy_Bank.png",
    enabled: true,
  },
  {
    id: "pigs-foot",
    name: "Pig's Foot",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Farming Collections"],
    image: "items/Pig's_Foot.png",
    enabled: true,
  },
  {
    id: "potato-talisman",
    name: "Potato Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Drop"],
    image: "items/Potato_Talisman.png",
    enabled: true,
  },
  {
    id: "reaper-orb",
    name: "Reaper Orb",
    rarity: "Legendary",
    itemType: "Accessory",
    addedVersion: "0.3",
    obtaining: ["Slayer Collections"],
    image: "items/Reaper_Orb.png",
    enabled: true,
  },
  {
    id: "red-claw-artifact",
    name: "Red Claw Artifact",
    rarity: "Epic",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Red_Claw_Artifact.png",
    enabled: true,
  },
  {
    id: "red-claw-ring",
    name: "Red Claw Ring",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Red_Claw_Ring.png",
    enabled: true,
  },
  {
    id: "red-claw-talisman",
    name: "Red Claw Talisman",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Red_Claw_Talisman.png",
    enabled: true,
  },
  {
    id: "scavenger-talisman",
    name: "Scavenger Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.12",
    obtaining: ["Purchasable"],
    image: "items/Scavenger_Talisman.png",
    enabled: true,
  },
  {
    id: "seal-of-the-oceans",
    name: "Seal of the Oceans",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Quest"],
    image: "items/Seal_of_the_Oceans.png",
    enabled: true,
  },
  {
    id: "seal-of-the-seas",
    name: "Seal of the Seas",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Quest"],
    image: "items/Seal_of_the_Seas.png",
    enabled: true,
  },
  {
    id: "skeleton-talisman",
    name: "Skeleton Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Skeleton_Talisman.png",
    enabled: true,
  },
  {
    id: "skys-badge",
    name: "Sky's Badge",
    rarity: "Legendary",
    itemType: "Accessory",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Sky's_Badge.png",
    enabled: true,
  },
  {
    id: "speed-artifact",
    name: "Speed Artifact",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Speed_Artifact.png",
    enabled: true,
  },
  {
    id: "speed-ring",
    name: "Speed Ring",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Speed_Ring.png",
    enabled: true,
  },
  {
    id: "speed-talisman",
    name: "Speed Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Speed_Talisman.png",
    enabled: true,
  },
  {
    id: "squash-ring",
    name: "Squash Ring",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.4",
    obtaining: ["Crafting (no req.)"],
    image: "items/Squash_Ring.png",
    enabled: true,
  },
  {
    id: "vaccine-talisman",
    name: "Vaccine Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Vaccine_Talisman.png",
    enabled: true,
  },
  {
    id: "village-affinity-talisman",
    name: "Village Affinity Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Purchasable"],
    image: "items/Village_Affinity_Talisman.png",
    enabled: true,
  },
  {
    id: "wolf-ring",
    name: "Wolf Ring",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.3.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Wolf_Ring.png",
    enabled: true,
  },
  {
    id: "wolf-talisman",
    name: "Wolf Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.3.5",
    obtaining: ["Drop"],
    image: "items/Wolf_Talisman.png",
    enabled: true,
  },
  {
    id: "wood-affinity-talisman",
    name: "Wood Affinity Talisman",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.1.0",
    obtaining: ["Foraging Collections"],
    image: "items/Wood_Affinity_Talisman.png",
    enabled: true,
  },
  {
    id: "zombie-artifact",
    name: "Zombie Artifact",
    rarity: "Rare",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Zombie_Artifact.png",
    enabled: true,
  },
  {
    id: "zombie-ring",
    name: "Zombie Ring",
    rarity: "Uncommon",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Zombie_Ring.png",
    enabled: true,
  },
  {
    id: "zombie-talisman",
    name: "Zombie Talisman",
    rarity: "Common",
    itemType: "Accessory",
    addedVersion: "0.2",
    obtaining: ["Purchasable"],
    image: "items/Zombie_Talisman.png",
    enabled: true,
  },
  {
    id: "lapis-pickaxe",
    name: "Lapis Pickaxe",
    rarity: "Uncommon",
    itemType: "Tool",
    addedVersion: "0.4",
    obtaining: ["Mining Collections"],
    image: "items/Lapis_Pickaxe.png",
    enabled: true,
  },
  {
    id: "stonk",
    name: "Stonk",
    rarity: "Epic",
    itemType: "Tool",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Stonk.png",
    enabled: true,
  },
  {
    id: "zombie-pickaxe",
    name: "Zombie Pickaxe",
    rarity: "Common",
    itemType: "Tool",
    addedVersion: "0.1.0",
    obtaining: ["Combat Collections"],
    image: "items/Zombie_Pickaxe.png",
    enabled: true,
  },
  {
    id: "bamboorang",
    name: "Bamboorang",
    rarity: "Epic",
    itemType: "Tool",
    addedVersion: "0.4",
    obtaining: ["Foraging Collections"],
    image: "items/Bamboorang.png",
    enabled: true,
  },
  {
    id: "cocoa-chopper",
    name: "Cocoa Chopper",
    rarity: "Epic",
    itemType: "Tool",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Cocoa_Chopper.png",
    enabled: true,
  },
  {
    id: "jungle-axe",
    name: "Jungle Axe",
    rarity: "Uncommon",
    itemType: "Tool",
    addedVersion: "0.1.0",
    obtaining: ["Foraging Collections"],
    image: "items/Jungle_Axe.png",
    enabled: true,
  },
  {
    id: "promising-axe",
    name: "Promising Axe",
    rarity: "Uncommon",
    itemType: "Tool",
    addedVersion: "0.1.0",
    obtaining: ["Crafting (no req.)"],
    image: "items/Promising_Axe.png",
    enabled: true,
  },
  {
    id: "treecapitator",
    name: "Treecapitator",
    rarity: "Epic",
    itemType: "Tool",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Treecapitator.png",
    enabled: true,
  },
  {
    id: "cactus-chainsaw",
    name: "Cactus Chainsaw",
    rarity: "Epic",
    itemType: "Tool",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Cactus_Chainsaw.png",
    enabled: true,
  },
  {
    id: "fungi-cutter",
    name: "Fungi Cutter",
    rarity: "Legendary",
    itemType: "Tool",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Fungi_Cutter.png",
    enabled: true,
  },
  {
    id: "hoe-of-great-tilling",
    name: "Hoe of Great Tilling",
    rarity: "Uncommon",
    itemType: "Tool",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Hoe of Great Tilling.png",
    enabled: true,
  },
  {
    id: "hoe-of-greater-tilling",
    name: "Hoe of Greater Tilling",
    rarity: "Rare",
    itemType: "Tool",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Hoe of Greater Tilling.png",
    enabled: true,
  },
  {
    id: "hoe-of-greatest-tilling",
    name: "Hoe of Greatest Tilling",
    rarity: "Epic",
    itemType: "Tool",
    addedVersion: "0.4",
    obtaining: ["Purchasable"],
    image: "items/Hoe of Greatest Tilling.png",
    enabled: true,
  },
  {
    id: "rookie-hoe",
    name: "Rookie Hoe",
    rarity: "Common",
    itemType: "Tool",
    addedVersion: "0.2",
    obtaining: ["Purchasable"],
    image: "items/Rookie_Hoe.png",
    enabled: true,
  },
  {
    id: "catalyst",
    name: "Catalyst",
    rarity: "Rare",
    itemType: "Minion Fuel",
    itemGroup: "Minion",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Catalyst.png",
    enabled: true,
  },
  {
    id: "enchanted-bread",
    name: "Enchanted Bread",
    rarity: "Common",
    itemType: "Minion Fuel",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Farming Collections"],
    image: "items/Enchanted_Bread.png",
    enabled: true,
  },
  {
    id: "enchanted-charcoal",
    name: "Enchanted Charcoal",
    rarity: "Uncommon",
    itemType: "Minion Fuel",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Enchanted_Charcoal.png",
    enabled: true,
  },
  {
    id: "enchanted-coal",
    name: "Enchanted Coal",
    rarity: "Uncommon",
    itemType: "Minion Fuel",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Enchanted_Coal.png",
    enabled: true,
  },
  {
    id: "enchanted-lava-bucket",
    name: "Enchanted Lava Bucket",
    rarity: "Epic",
    itemType: "Minion Fuel",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Enchanted_Lava_Bucket.png",
    enabled: true,
  },
  {
    id: "foul-flesh",
    name: "Foul Flesh",
    rarity: "Rare",
    itemType: "Minion Fuel",
    itemGroup: "Minion",
    addedVersion: "0.2",
    obtaining: ["Drop"],
    image: "items/Foul_Flesh.png",
    enabled: true,
  },
  {
    id: "hamster-wheel",
    name: "Hamster Wheel",
    rarity: "Rare",
    itemType: "Minion Fuel",
    itemGroup: "Minion",
    addedVersion: "0.2",
    obtaining: ["Drop"],
    image: "items/Hamster_Wheel.png",
    enabled: true,
  },
  {
    id: "hyper-catalyst",
    name: "Hyper Catalyst",
    rarity: "Epic",
    itemType: "Minion Fuel",
    itemGroup: "Minion",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Hyper_Catalyst.png",
    enabled: true,
  },
  {
    id: "budget-hopper",
    name: "Budget Hopper",
    rarity: "Uncommon",
    itemType: "Minion Automated Shipping",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Budget_Hopper.png",
    enabled: true,
  },
  {
    id: "enchanted-hopper",
    name: "Enchanted Hopper",
    rarity: "Rare",
    itemType: "Minion Automated Shipping",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Enchanted_Hopper.png",
    enabled: true,
  },
  {
    id: "minion-auto-smelter",
    name: "Minion Auto Smelter",
    rarity: "Common",
    itemType: "Minion Upgrade",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Minion_Auto_Smelter.png",
    enabled: true,
  },
  {
    id: "compactor",
    name: "Compactor",
    rarity: "Uncommon",
    itemType: "Minion Upgrade",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Compactor.png",
    enabled: true,
  },
  {
    id: "super-compactor",
    name: "Super Compactor 3000",
    rarity: "Rare",
    itemType: "Minion Upgrade",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Super_Compactor_3000.png",
    enabled: true,
  },
  {
    id: "diamond-spreading",
    name: "Diamond Spreading",
    rarity: "Rare",
    itemType: "Minion Upgrade",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Mining Collections"],
    image: "items/Diamond_Spreading.png",
    enabled: true,
  },
  {
    id: "potato-spreading",
    name: "Potato Spreading",
    rarity: "Epic",
    itemType: "Minion Upgrade",
    itemGroup: "Minion",
    addedVersion: "0.4",
    obtaining: ["Drop"],
    image: "items/Potato_Spreading.png",
    enabled: true,
  },
  {
    id: "enchanted-duck-egg",
    name: "Enchanted Duck Egg",
    rarity: "Rare",
    itemType: "Minion Upgrade",
    itemGroup: "Minion",
    addedVersion: "0.3",
    obtaining: ["Farming Collections"],
    image: "items/Enchanted_Duck_Egg.png",
    enabled: true,
  },
  {
    id: "small-minion-backpack",
    name: "Small Minion Backpack",
    rarity: "Common",
    itemType: "Minion Storage",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Foraging Collections"],
    image: "items/Small_Minion_Backpack.png",
    enabled: true,
  },
  {
    id: "medium-minion-backpack",
    name: "Medium Minion Backpack",
    rarity: "Uncommon",
    itemType: "Minion Storage",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Foraging Collections"],
    image: "items/Medium_Minion_Backpack.png",
    enabled: true,
  },
  {
    id: "large-minion-backpack",
    name: "Large Minion Backpack",
    rarity: "Rare",
    itemType: "Minion Storage",
    itemGroup: "Minion",
    addedVersion: "0.1.0",
    obtaining: ["Foraging Collections"],
    image: "items/Large_Minion_Backpack.png",
    enabled: true,
  },
  {
    id: "huge-minion-backpack",
    name: "Huge Minion Backpack",
    rarity: "Epic",
    itemType: "Minion Storage",
    itemGroup: "Minion",
    addedVersion: "0.3",
    obtaining: ["Crafting (no req.)"],
    image: "items/Huge_Minion_Backpack.png",
    enabled: true,
  },
  {
    id: "giant-minion-backpack",
    name: "Giant Minion Backpack",
    rarity: "Special",
    itemType: "Minion Storage",
    itemGroup: "Minion",
    addedVersion: "0.3",
    obtaining: ["Crafting (no req.)"],
    image: "items/Giant_Minion_Backpack.png",
    enabled: true,
  },
  {
    id: "simple-beetroot-candy",
    name: "Simple Beetroot Candy",
    rarity: "Uncommon",
    itemType: "Pet Candy",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Farming Collections"],
    image: "items/Simple_Beetroot_Candy.png",
    enabled: true,
  },
  {
    id: "great-beetroot-candy",
    name: "Great Beetroot Candy",
    rarity: "Rare",
    itemType: "Pet Candy",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Farming Collections"],
    image: "items/Great_Beetroot_Candy.png",
    enabled: true,
  },
  {
    id: "superb-beetroot-candy",
    name: "Superb Beetroot Candy",
    rarity: "Epic",
    itemType: "Pet Candy",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Farming Collections"],
    image: "items/Superb_Beetroot_Candy.png",
    enabled: true,
  },
  {
    id: "ultimate-beetroot-candy",
    name: "Ultimate Beetroot Candy",
    rarity: "Special",
    itemType: "Pet Candy",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Crafting (no req.)"],
    image: "items/Ultimate_Beetroot_Candy.png",
    enabled: true,
  },
  {
    id: "big-teeth",
    name: "Big Teeth",
    rarity: "Common",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Purchasable"],
    image: "items/Big_Teeth.png",
    enabled: true,
  },
  {
    id: "iron-claws",
    name: "Iron Claws",
    rarity: "Common",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Purchasable"],
    image: "items/Iron_Claws.png",
    enabled: true,
  },
  {
    id: "hardened-scales",
    name: "Hardened Scales",
    rarity: "Uncommon",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Purchasable"],
    image: "items/Hardened_Scales.png",
    enabled: true,
  },
  {
    id: "sharpened-claws",
    name: "Sharpened Claws",
    rarity: "Uncommon",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Purchasable"],
    image: "items/Sharpened_Claws.png",
    enabled: true,
  },
  {
    id: "bubblegum",
    name: "Bubblegum",
    rarity: "Rare",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Purchasable"],
    image: "items/Bubblegum.png",
    enabled: true,
  },
  {
    id: "exp-share",
    name: "Exp Share",
    rarity: "Epic",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Crafting (no req.)"],
    image: "items/Exp_Share.png",
    enabled: true,
  },
  {
    id: "textbook",
    name: "Textbook",
    rarity: "Legendary",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Mining Collections"],
    image: "items/Textbook.png",
    enabled: true,
  },
  {
    id: "tier-boost",
    name: "Tier Boost",
    rarity: "Legendary",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Tier_Boost.png",
    enabled: true,
  },
  {
    id: "reaper-gem",
    name: "Reaper Gem",
    rarity: "Legendary",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.3",
    obtaining: ["Special"],
    image: "items/Reaper_Gem.png",
    enabled: true,
  },
  {
    id: "permafrost-core",
    name: "Permafrost Core",
    rarity: "Legendary",
    itemType: "Pet Augment",
    itemGroup: "Pet",
    addedVersion: "0.4",
    obtaining: ["Special"],
    image: "items/Permafrost Core.png",
    enabled: true,
  },
  {
    id: "wand-of-healing",
    name: "Wand of Healing",
    rarity: "Uncommon",
    itemType: "Wand",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Wand_of_Healing.png",
    enabled: true,
  },
  {
    id: "wand-of-mending",
    name: "Wand of Mending",
    rarity: "Rare",
    itemType: "Wand",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Wand_of_Mending.png",
    enabled: true,
  },
  {
    id: "wand-of-restoration",
    name: "Wand of Restoration",
    rarity: "Epic",
    itemType: "Wand",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Wand_of_Restoration.png",
    enabled: true,
  },
  {
    id: "wand-of-atonement",
    name: "Wand of Atonement",
    rarity: "Legendary",
    itemType: "Wand",
    addedVersion: "0.2",
    obtaining: ["Slayer Collections"],
    image: "items/Wand_of_Atonement.png",
    enabled: true,
  },
  {
    id: "ender-necklace",
    name: "Ender Necklace",
    rarity: "Epic",
    itemType: "Equipment",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Ender_Necklace.png",
    enabled: true,
  },
  {
    id: "dragonfade-cloak",
    name: "Dragonfade Cloak",
    rarity: "Epic",
    itemType: "Equipment",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Dragonfade_Cloak.png",
    enabled: true,
  },
  {
    id: "ender-cloak",
    name: "Ender Cloak",
    rarity: "Epic",
    itemType: "Equipment",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Ender_Cloak.png",
    enabled: true,
  },
  {
    id: "ender-belt",
    name: "Ender Belt",
    rarity: "Epic",
    itemType: "Equipment",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Ender_Belt.png",
    enabled: true,
  },
  {
    id: "dragonfade-gauntlet",
    name: "Dragonfade Gauntlet",
    rarity: "Epic",
    itemType: "Equipment",
    addedVersion: "0.5",
    obtaining: ["Crafting (no req.)"],
    image: "items/Dragonfade_Gauntlet.png",
    enabled: true,
  },
  {
    id: "ender-gauntlet",
    name: "Ender Gauntlet",
    rarity: "Epic",
    itemType: "Equipment",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Ender_Gauntlet.png",
    enabled: true,
  },
  {
    id: "andesite-whetstone",
    name: "Andesite Whetstone",
    rarity: "Epic",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Andesite_Whetstone.png",
    enabled: true,
  },
  {
    id: "blessed-fruşt",
    name: "Blessed Fruit",
    rarity: "Epic",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Blessed_Fruit.png",
    enabled: true,
  },
  {
    id: "dirt-bottle",
    name: "Dirt Bottle",
    rarity: "Rare",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Dirt_Bottle.png",
    enabled: true,
  },
  {
    id: "dragon-claw",
    name: "Dragon Claw",
    rarity: "Rare",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Dragon_Claw.png",
    enabled: true,
  },
  {
    id: "dragon-horn",
    name: "Dragon Horn",
    rarity: "Epic",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Dragon_Horn.png",
    enabled: true,
  },
  {
    id: "dragon-scale",
    name: "Dragon Scale",
    rarity: "Rare",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Dragon_Scale.png",
    enabled: true,
  },
  {
    id: "end-stone-geode",
    name: "End Stone Geode",
    rarity: "Rare",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/End_Stone_Geode.png",
    enabled: true,
  },
  {
    id: "moil-log",
    name: "Moil Log",
    rarity: "Uncommon",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Moil_Log.png",
    enabled: true,
  },
  {
    id: "toil-log",
    name: "Toil Log",
    rarity: "Epic",
    itemType: "Reforge Stone",
    addedVersion: "0.5",
    obtaining: ["Purchasable"],
    image: "items/Toil_Log.png",
    enabled: true,
  },
  {
    id: "rare-diamond",
    name: "Rare Diamond",
    rarity: "Rare",
    itemType: "Power Stone",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Rare_Diamond.png",
    enabled: true,
  },
  {
    id: "acacia-birdhouse",
    name: "Acacia Birdhouse",
    rarity: "Rare",
    itemType: "Power Stone",
    addedVersion: "0.5",
    obtaining: ["Foraging Collections"],
    image: "items/Acacia_Birdhouse.png",
    enabled: true,
  },
  {
    id: "end-stone-shulker",
    name: "End Stone Shulker",
    rarity: "Rare",
    itemType: "Power Stone",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/End_Stone_Shulker.png",
    enabled: true,
  },
  {
    id: "ender-monocle",
    name: "Ender Monocle",
    rarity: "Rare",
    itemType: "Power Stone",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Ender_Monocle.png",
    enabled: true,
  },
  {
    id: "furball",
    name: "Furball",
    rarity: "Rare",
    itemType: "Power Stone",
    addedVersion: "0.5",
    obtaining: ["Drop"],
    image: "items/Furball.png",
    enabled: true,
  },
  {
    id: "obsidian-tablet",
    name: "Obsidian Tablet",
    rarity: "Rare",
    itemType: "Power Stone",
    addedVersion: "0.5",
    obtaining: ["Mining Collections"],
    image: "items/Obsidian_Tablet.png",
    enabled: true,
  }
];

const RARITY_ORDER = [
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Mythic",
  "Special",
];

const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const helpBtn = document.getElementById("help-btn");
const helpModal = document.getElementById("help-modal");
const closeHelpBtn = document.getElementById("close-help-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");
const newGameBtn = document.getElementById("new-game-btn");
const confettiContainer = document.getElementById("confetti-container");

const statsBtn = document.getElementById("stats-btn");
const statsModal = document.getElementById("stats-modal");
const closeStatsBtn = document.getElementById("close-stats-btn");
const statsBackdrop = document.getElementById("stats-backdrop");

const statsPlayedEl = document.getElementById("stats-played");
const statsBestSolveEl = document.getElementById("stats-best-solve");

const statsPlayedCountEl = document.getElementById("stats-played-count");
const statsWinsEl = document.getElementById("stats-wins");
const statsLossesEl = document.getElementById("stats-losses");

const guessesLeftEl = document.getElementById("guesses-left");
const guessesEl = document.getElementById("guesses");
const suggestionsEl = document.getElementById("suggestions");
const errorBox = document.getElementById("error-box");
const winActions = document.getElementById("win-actions");
const playAgainBtn = document.getElementById("play-again-btn");
const answerReveal = document.getElementById("answer-reveal");
const MAX_GUESSES = 10;

let answer = null;
let guesses = [];
let won = false;
let lost = false;

const STATS_KEY = "Craftrdle-stats";
let stats = loadStats();

function openHelpModal() {
  helpModal.classList.remove("hidden");
}

function closeHelpModal() {
  helpModal.classList.add("hidden");
}

function normalizeText(value) {
  return value.trim().toLowerCase();
}

function getEnabledItems() {
  return ITEMS.filter((item) => item.enabled !== false);
}

function getRandomItem() {
  const enabledItems = getEnabledItems();
  if (!enabledItems.length) return null;
  return enabledItems[Math.floor(Math.random() * enabledItems.length)];
}

function getRarityIndex(rarity) {
  return RARITY_ORDER.indexOf(rarity);
}

function compareOrdered(guess, correct) {
  if (guess === correct) return "correct";
  return guess < correct ? "higher" : "lower";
}

function compareExact(guess, correct) {
  return guess === correct ? "correct" : "incorrect";
}

function compareItemType(guess, answer) {
  if (guess.itemType === answer.itemType) {
    return "correct";
  }

  if (
    guess.itemGroup &&
    answer.itemGroup &&
    guess.itemGroup === answer.itemGroup
  ) {
    return "close";
  }

  return "incorrect";
}

function isCollectionMethod(method) {
  return method.endsWith("Collections");
}

function compareObtaining(guessObtaining, answerObtaining) {
  for (const guessMethod of guessObtaining) {
    if (answerObtaining.includes(guessMethod)) {
      return {
        hint: "correct",
        display: guessMethod,
      };
    }
  }

  const guessHasCollection = guessObtaining.some(isCollectionMethod);
  const answerHasCollection = answerObtaining.some(isCollectionMethod);

  if (guessHasCollection && answerHasCollection) {
    return {
      hint: "close",
      display: guessObtaining.join(", "),
    };
  }

  return {
    hint: "incorrect",
    display: guessObtaining.join(", "),
  };
}

function compareVersions(guessVersion, answerVersion) {
  const guessParts = guessVersion.split(".").map(Number);
  const answerParts = answerVersion.split(".").map(Number);

  const maxLength = Math.max(guessParts.length, answerParts.length);

  for (let i = 0; i < maxLength; i++) {
    const guessPart = guessParts[i] ?? 0;
    const answerPart = answerParts[i] ?? 0;

    if (guessPart === answerPart) continue;

    return guessPart < answerPart ? "higher" : "lower";
  }

  return "correct";
}

function buildGuessResult(guess, correctAnswer) {
  const obtainingResult = compareObtaining(
    guess.obtaining,
    correctAnswer.obtaining
  );

  return {
    item: guess,

    rarityHint: compareOrdered(
      getRarityIndex(guess.rarity),
      getRarityIndex(correctAnswer.rarity)
    ),

    itemTypeHint: compareItemType(guess, correctAnswer),

    addedVersionHint: compareVersions(
      guess.addedVersion,
      correctAnswer.addedVersion
    ),

    obtainingHint: obtainingResult.hint,
    obtainingDisplay: obtainingResult.display,

    isCorrect: guess.id === correctAnswer.id,
  };
}

function hintClass(hint) {
  if (hint === "correct") return "hint-correct";
  if (hint === "close") return "hint-close";
  if (hint === "incorrect") return "hint-incorrect";
  if (hint === "higher") return "hint-higher";
  return "hint-lower";
}

function clearError() {
  errorBox.textContent = "";
}

function showError(message) {
  errorBox.textContent = message;
}

function renderGuessesLeft() {
  if (won) {
    guessesLeftEl.textContent =
      `Solved in ${guesses.length} guesses. 🎉`;
    return;
  }

  if (lost) {
    guessesLeftEl.textContent = "0 guesses left.";
    return;
  }

  guessesLeftEl.textContent =
    `${MAX_GUESSES - guesses.length} guesses left.`;
}

function startNewGame() {
  answer = getRandomItem();
  console.log("Current answer:", answer);
  guesses = [];
  won = false;
  lost = false;
  guessInput.value = "";
  clearError();
  suggestionsEl.innerHTML = "";
  winActions.classList.add("hidden");
  answerReveal.classList.add("hidden");
  answerReveal.textContent = "";
  renderGuesses();
  renderGuessesLeft();
}

function renderSuggestions() {
  const value = normalizeText(guessInput.value);
  suggestionsEl.innerHTML = "";

  if (!value || won) return;

  const matches = getEnabledItems()
    .filter((item) => normalizeText(item.name).includes(value))
    .slice(0, 8);

  for (const item of matches) {
    const btn = document.createElement("button");
    btn.className = "suggestion-btn";
    btn.textContent = item.name;
    btn.addEventListener("click", () => {
      submitGuess(item.name);
    });
    suggestionsEl.appendChild(btn);
  }
}

function createHintCard(label, display, state) {
  const div = document.createElement("div");

  div.className = `hint-card ${hintClass(state)}`;

  let displayState = state;

  if (state === "correct") displayState = "✓ CORRECT";
  if (state === "incorrect") displayState = "✕ INCORRECT";
  if (state === "close") displayState = "≈ CLOSE";
  if (state === "higher") displayState = "↑ HIGHER";
  if (state === "lower") displayState = "↓ LOWER";

  if (label === "Added Version") {
    if (state === "higher") displayState = "→ AFTER";
    if (state === "lower") displayState = "← BEFORE";
  }

  div.innerHTML = `
    <div class="hint-label">${label}</div>
    <div class="hint-value">${display}</div>
    <div class="hint-state">${displayState}</div>
  `;

  return div;
}


function loadStats() {
  const raw = localStorage.getItem(STATS_KEY);

  if (!raw) {
    return {
      played: 0,
      wins: 0,
      losses: 0,
      bestSolve: null,
    };
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {
      played: 0,
      wins: 0,
      losses: 0,
      bestSolve: null,
    };
  }
}

function saveStats() {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function renderStats() {
  statsPlayedCountEl.textContent = stats.played;
  statsWinsEl.textContent = `${stats.wins}W`;
  statsLossesEl.textContent = `${stats.losses}L`;

statsBestSolveEl.textContent =
  `⭐ Best solve: in ${
    stats.bestSolve === null ? "—" : stats.bestSolve
  } ${
    stats.bestSolve === 1 ? "guess" : "guesses"
  }`;
}

function openStatsModal() {
  renderStats();
  statsModal.classList.remove("hidden");
}

function closeStatsModal() {
  statsModal.classList.add("hidden");
}

function launchConfetti() {
  if (!confettiContainer) return;

  confettiContainer.innerHTML = "";

  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    piece.style.left = Math.random() * 100 + "%";
    piece.style.animationDelay = Math.random() * 0.4 + "s";
    piece.style.animationDuration = 2 + Math.random() * 1.5 + "s";

    confettiContainer.appendChild(piece);
  }

  setTimeout(() => {
    confettiContainer.innerHTML = "";
  }, 4500);
}

function renderGuesses() {
  guessesEl.innerHTML = "";

  if (!guesses.length) {
    const empty = document.createElement("div");
    empty.className = "empty-box";
    empty.textContent = "No guesses yet.";
    guessesEl.appendChild(empty);
    return;
  }

  for (const guess of guesses) {
    const card = document.createElement("div");

    card.className = `guess-card ${guess.isCorrect ? "guess-card-correct" : ""}`;

    card.classList.add("guess-card-enter");

    const itemCard = document.createElement("div");

    itemCard.className = `item-card ${guess.isCorrect ? "correct-item" : ""}`;

    itemCard.innerHTML = `
      <div class="item-main">
        <div class="item-image-wrap">
          <img src="${guess.item.image}" alt="${guess.item.name}">
        </div>
        <div>
          <div class="item-name">${guess.item.name}</div>
          <div class="item-sub">${guess.isCorrect ? "Correct item" : "Guess"}</div>
        </div>
      </div>
    `;

    card.appendChild(itemCard);
    card.appendChild(
  createHintCard(
    "Rarity",
    `<span class="rarity-text rarity-${guess.item.rarity.toLowerCase()}">${guess.item.rarity}</span>`,
    guess.rarityHint
  )
);
    card.appendChild(createHintCard("Item Type", guess.item.itemType, guess.itemTypeHint));
    card.appendChild(createHintCard("Obtaining", guess.obtainingDisplay, guess.obtainingHint));
    card.appendChild(createHintCard("Added Version", String(guess.item.addedVersion), guess.addedVersionHint));

    guessesEl.appendChild(card);
  }
}

function submitGuess(name) {
  if (!answer || won || lost) return;

  const found = getEnabledItems().find(
    (item) => normalizeText(item.name) === normalizeText(name)
  );

  if (!found) {
    showError("Item not found.");
    return;
  }

  const alreadyGuessed = guesses.some((guess) => guess.item.id === found.id);
  if (alreadyGuessed) {
    showError("You already guessed that item.");
    return;
  }

  clearError();
  guessInput.value = "";
  suggestionsEl.innerHTML = "";

  const result = buildGuessResult(found, answer);
  guesses.unshift(result);

if (result.isCorrect) {
  won = true;

  stats.played += 1;
  stats.wins += 1;

  const guessesUsed = guesses.length;
  if (stats.bestSolve === null || guessesUsed < stats.bestSolve) {
    stats.bestSolve = guessesUsed;
  }

  saveStats();

  winActions.classList.remove("hidden");
  renderGuesses();
  renderGuessesLeft();
  launchConfetti();
  return;
}

if (guesses.length >= MAX_GUESSES) {
  lost = true;

  stats.played += 1;
  stats.losses += 1;
  saveStats();

  winActions.classList.remove("hidden");
  playAgainBtn.textContent = `Play Again`;

  answerReveal.textContent = `The correct answer was ${answer.name}.`;
  answerReveal.classList.remove("hidden");
}

renderGuesses();
renderGuessesLeft();
}

guessInput.addEventListener("input", renderSuggestions);

guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitGuess(guessInput.value);
  }
});

guessBtn.addEventListener("click", () => {
  submitGuess(guessInput.value);
});

newGameBtn.addEventListener("click", startNewGame);
playAgainBtn.addEventListener("click", startNewGame);

statsBtn.addEventListener("click", openStatsModal);
closeStatsBtn.addEventListener("click", closeStatsModal);
statsBackdrop.addEventListener("click", closeStatsModal);

helpBtn.addEventListener("click", openHelpModal);
closeHelpBtn.addEventListener("click", closeHelpModal);
modalBackdrop.addEventListener("click", closeHelpModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeHelpModal();
    closeStatsModal();
  }
});

renderStats();
startNewGame();