let data;
let enemiesData = [
  {
	"weakness": "none",
	"drops": [{
	  "item": "giant_bones",
	  "min": 1,
	  "chance": 0,
	  "max": 1,
	  "unique": false
	},
	{
	  "item": "banana",
	  "min": 1,
	  "chance": 1,
	  "max": 1,
	  "unique": false
	},
	{
	  "item": "dotted_green_leaf",
	  "min": 1,
	  "chance": 5,
	  "max": 1,
	  "unique": false
	},
	{
	  "item": "green_leaf",
	  "min": 1,
	  "chance": 9,
	  "max": 1,
	  "unique": false
	},
	{
	  "item": "lime_leaf",
	  "min": 1,
	  "chance": 19,
	  "max": 1,
	  "unique": false
	},
	{
	  "item": "gold_leaf",
	  "min": 1,
	  "chance": 29,
	  "max": 1,
	  "unique": false
	}],
	"defence": 10,
	"magic_defence": 0,
	"name": "gorilla",
	"collection_log": "normal",
	"hp": 70,
	"accuracy": 12,
	"max_hit": 10
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "raw_chicken",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "feathers",
		"min": 2,
		"chance": 0,
		"max": 6,
		"unique": false
	  },
	  {
		"item": "wheat_seeds",
		"min": 1,
		"chance": 2,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "chicken",
	"collection_log": "normal",
	"hp": 5,
	"accuracy": 0,
	"max_hit": 0
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "feathers",
		"min": 20,
		"chance": 0,
		"max": 40,
		"unique": false
	  },
	  {
		"item": "raw_sardine",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "seagull",
	"collection_log": "normal",
	"hp": 15,
	"accuracy": 0,
	"max_hit": 1
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
	  "item": "sand",
	  "min": 10,
	  "chance": 9,
	  "max": 20,
	  "unique": false
	  },
	  {
		"item": "seashroom",
		"min": 1,
		"chance": 9,
		"max": 5,
		"unique": false
	  },
	  {
		"item": "seashroom_seeds",
		"min": 1,
		"chance": 39,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "raw_lobster",
		"min": 1,
		"chance":39,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "seaweed",
		"min": 1,
		"chance": 49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silver_scimitar",
		"min": 1,
		"chance":49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "cooked_lobster",
		"min": 1,
		"chance":69,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "scimitar_handle",
		"min": 1,
		"chance":499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "raw_blue_lobster",
		"min": 1,
		"chance":999999,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 7,
	"magic_defence": 7,
	"name": "pirate",
	"collection_log": "normal",
	"hp": 100,
	"accuracy": 18,
	"max_hit": 4
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
	  "item": "sand",
	  "min": 20,
	  "chance": 9,
	  "max": 40,
	  "unique": false
	  },
	  {
		"item": "seashroom",
		"min": 1,
		"chance": 9,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "seashroom_seeds",
		"min": 1,
		"chance": 39,
		"max": 2,
		"unique": false
	  },
	  {
		"item": "raw_lobster",
		"min": 1,
		"chance":39,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "seaweed",
		"min": 1,
		"chance": 49,
		"max": 2,
		"unique": false
	  },
	  {
		"item": "promethium_scimitar",
		"min": 1,
		"chance":49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "cooked_lobster",
		"min": 1,
		"chance":69,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "scimitar_handle",
		"min": 1,
		"chance":299,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "raw_blue_lobster",
		"min": 1,
		"chance":999999,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 8,
	"magic_defence": 15,
	"name": "upper_pirate",
	"collection_log": "normal",
	"hp": 300,
	"accuracy": 23,
	"max_hit": 10
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "coins",
		"min": 10,
		"chance": 3,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "vial",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "shovel",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "matches",
		"min": 1,
		"chance": 9,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "bronze_sword",
		"min": 1,
		"chance": 9,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "bronze_bar",
		"min": 1,
		"chance": 19,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf",
		"min": 1,
		"chance": 39,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "green_leaf",
		"min": 1,
		"chance": 59,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 1,
	"magic_defence": 0,
	"name": "everbrook_guard",
	"collection_log": "normal",
	"hp": 5,
	"accuracy": 0,
	"max_hit": 2
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "bread",
		"min": 5,
		"chance": 0,
		"max": 5,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "raccoon",
	"collection_log": "normal",
	"hp": 2,
	"accuracy": 0,
	"max_hit": 0
  },
  {
	"weakness": "air",
	"drops": [
	  {
		"item": "air_orb",
		"min": 10,
		"chance": 1,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "sand",
		"min": 10,
		"chance": 4,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "milk_bucket",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 1,
	"magic_defence": 0,
	"name": "dust_devil",
	"collection_log": "normal",
	"hp": 350,
	"accuracy": 10,
	"max_hit": 10
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "raw_rat_meat",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "rat",
	"collection_log": "normal",
	"hp": 3,
	"accuracy": 0,
	"max_hit": 1
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "thieves_hood",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "coins",
		"min": 10,
		"chance": 1,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "iron_knife",
		"min": 1,
		"chance": 9,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf",
		"min": 1,
		"chance": 19,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "thief",
	"collection_log": "normal",
	"hp": 15,
	"accuracy": 5,
	"max_hit": 5
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "harpoon",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "raw_tuna",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "trible_fishermen",
	"collection_log": "normal",
	"hp": 20,
	"accuracy": 0,
	"max_hit": 5
  },
  {
	"weakness": "none",
	"drops": [{
	  "item": "snakeskin",
	  "min": 1,
	  "chance": 0,
	  "max": 1,
	  "unique": false
	}],
	"defence": 0,
	"magic_defence": 0,
	"name": "snake",
	"collection_log": "normal",
	"hp": 10,
	"accuracy": 1,
	"max_hit": 3
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "thieves_hood",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "coins",
		"min": 35,
		"chance": 1,
		"max": 50,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf",
		"min": 1,
		"chance": 14,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "gold_knife",
		"min": 1,
		"chance": 19,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "great_thief",
	"collection_log": "normal",
	"hp": 25,
	"accuracy": 10,
	"max_hit": 5
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "raw_steak",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "cow",
	"collection_log": "normal",
	"hp": 10,
	"accuracy": 0,
	"max_hit": 1
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "tiger_fur",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "tiger",
	"collection_log": "normal",
	"hp": 40,
	"accuracy": 7,
	"max_hit": 15
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "crocodile_hides",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 8,
	"magic_defence": 0,
	"name": "crocodile",
	"collection_log": "normal",
	"hp": 50,
	"accuracy": 12,
	"max_hit": 20
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "raw_rat_meat",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "giant_bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "giant_rat",
	"collection_log": "normal",
	"hp": 30,
	"accuracy": 1,
	"max_hit": 2
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "coal",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "copper",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "rockshroom",
		"min": 3,
		"chance": 9,
		"max": 9,
		"unique": false
	  },
	  {
		"item": "iron",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silver",
		"min": 1,
		"chance": 99,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "gold",
		"min": 1,
		"chance": 199,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 1,
	"magic_defence": 0,
	"name": "rocky",
	"collection_log": "normal",
	"hp": 10,
	"accuracy": 0,
	"max_hit": 1
  },
  {
	"weakness": "water",
	"drops": [
	  {
		"item": "ashes",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "coal",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "copper",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "rockshroom",
		"min": 1,
		"chance": 9,
		"max": 9,
		"unique": false
	  },
	  {
		"item": "iron",
		"min": 1,
		"chance": 19,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silver",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "gold",
		"min": 1,
		"chance": 39,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "rockshroom_seeds",
		"min": 1,
		"chance": 49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "promethium",
		"min": 1,
		"chance": 99,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "charcoal",
		"min": 1,
		"chance": 99,
		"max": 5,
		"unique": false
	  },
	  {
		"item": "fire_pages",
		"min": 1,
		"chance": 9999,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 50,
	"magic_defence": 5,
	"name": "lava_rocky",
	"collection_log": "normal",
	"hp": 250,
	"accuracy": 15,
	"max_hit": 5
  },
  {
	"weakness": "water",
	"drops": [
	  {
		"item": "ashes",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf",
		"min": 1,
		"chance": 9,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "green_leaf",
		"min": 1,
		"chance": 14,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "mangrove_logs",
		"min": 1,
		"chance": 19,
		"max": 5,
		"unique": false
	  },
	  {
		"item": "bronze_arrow_heads",
		"min": 50,
		"chance": 19,
		"max": 100,
		"unique": false
	  },
	  {
		"item": "iron_arrow_heads",
		"min": 25,
		"chance": 19,
		"max": 50,
		"unique": false
	  },
	  {
		"item": "stone_boots",
		"min": 1,
		"chance": 69,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "fire_pages",
		"min": 1,
		"chance": 9999,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "hell_goblin",
	"collection_log": "normal",
	"hp": 100,
	"accuracy": 12,
	"max_hit": 7
  },
  {
	"weakness": "archery",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "stardust",
		"min": 10,
		"chance": 1,
		"max": 50,
		"unique": false
	  },
	  {
		"item": "blue_mage_silk",
		"min": 1,
		"chance": 1,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "air_orb",
		"min": 10,
		"chance": 4,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "fire_orb",
		"min": 10,
		"chance": 4,
		"max": 40,
		"unique": false
	  },
	  {
		"item": "blue_mushroom_seeds",
		"min": 1,
		"chance": 9,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "willow_staff",
		"min": 1,
		"chance": 14,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "stardust_seeds",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "deranged_mage_key",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": true
	  },
	  {
		"item": "deranged_mask",
		"min": 1,
		"chance": 99,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "baby_deranged_mage_pet",
		"min": 1,
		"chance": 9999,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 5,
	"name": "deranged_mage",
	"collection_log": "boss",
	"hp": 300,
	"accuracy": 10,
	"max_hit": 5
  },
  {
	"weakness": "archery",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "blue_mage_silk",
		"min": 1,
		"chance": 1,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "coins",
		"min": 5,
		"chance": 4,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "water_orb",
		"min": 10,
		"chance": 4,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "oak_staff",
		"min": 1,
		"chance": 14,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "stardust",
		"min": 5,
		"chance": 19,
		"max": 25,
		"unique": false
	  },
	  {
		"item": "stardust_seeds",
		"min": 1,
		"chance": 99,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 5,
	"name": "guard_mage",
	"collection_log": "normal",
	"hp": 50,
	"accuracy": 5,
	"max_hit": 5
  },
  {
	"weakness": "archery",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "earth_orb",
		"min": 10,
		"chance": 4,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "desert_mage_silk",
		"min": 1,
		"chance": 9,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "stardust",
		"min": 100,
		"chance": 19,
		"max": 150,
		"unique": false
	  },
	  {
		"item": "stardust_seeds",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "desert_mage_coif",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "desert_mage_top",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "desert_mage_skirt",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "desert_mage_gloves",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "desert_mage_boots",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 10,
	"magic_defence": 17,
	"name": "desert_mage",
	"collection_log": "normal",
	"hp": 400,
	"accuracy": 20,
	"max_hit": 20
  },
  {
	"weakness": "archery",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "grass_orb",
		"min": 10,
		"chance": 4,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "druid_silk",
		"min": 1,
		"chance": 9,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "bamboo",
		"min": 20,
		"chance": 9,
		"max": 30,
		"unique": false
	  },
	  {
		"item": "stardust",
		"min": 60,
		"chance": 19,
		"max": 110,
		"unique": false
	  },
	  {
		"item": "stardust_seeds",
		"min": 1,
		"chance": 39,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "druid_headband",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "druid_top",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "druid_skirt",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "druid_gloves",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "druid_boots",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 17,
	"name": "druid",
	"collection_log": "normal",
	"hp": 400,
	"accuracy": 30,
	"max_hit": 20
  },
  {
	"weakness": "archery",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "fire_orb",
		"min": 10,
		"chance": 4,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "red_mage_silk",
		"min": 1,
		"chance": 9,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "stardust",
		"min": 30,
		"chance": 19,
		"max": 60,
		"unique": false
	  },
	  {
		"item": "stardust_seeds",
		"min": 1,
		"chance": 49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "red_mage_hat",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  }
	  ,
	  {
		"item": "red_mage_top",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  }
	  ,
	  {
		"item": "red_mage_skirt",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  }
	  ,
	  {
		"item": "red_mage_gloves",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  }
	  ,
	  {
		"item": "red_mage_boots",
		"min": 1,
		"chance": 499,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 10,
	"name": "red_mage",
	"collection_log": "normal",
	"hp": 150,
	"accuracy": 14,
	"max_hit": 10
  },
  {
	"weakness": "crush",
	"drops": [
	  {
		"item": "string",
		"min": 5,
		"chance": 0,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf_seeds",
		"min": 2,
		"chance": 9,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "green_leaf_seeds",
		"min": 1,
		"chance": 19,
		"max": 2,
		"unique": false
	  },
	  {
		"item": "lime_leaf_seeds",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "maple_bow",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "mangrove_bow",
		"min": 1,
		"chance": 39,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silkfang_hide",
		"min": 1,
		"chance": 49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "gold_leaf_seeds",
		"min": 1,
		"chance": 49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silkfang_mask",
		"min": 1,
		"chance": 199,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silkfang_body",
		"min": 1,
		"chance": 199,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silkfang_legs",
		"min": 1,
		"chance": 199,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silkfang_gloves",
		"min": 1,
		"chance": 199,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silkfang_boots",
		"min": 1,
		"chance": 199,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silkfang_string",
		"min": 1,
		"chance": 299,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "silkfang_pet",
		"min": 1,
		"chance": 9999,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 100,
	"name": "silkfang",
	"collection_log": "boss",
	"hp": 500,
	"accuracy": 16,
	"max_hit": 20
  },
  {
	"weakness": "crush",
	"drops": [
	  {
		"item": "bait",
		"min": 5,
		"chance": 0,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "moldshroom",
		"min": 5,
		"chance": 9,
		"max": 10,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "beetle",
	"collection_log": "normal",
	"hp": 20,
	"accuracy": 7,
	"max_hit": 4
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "arrow_shafts",
		"min": 1,
		"chance": 4,
		"max": 5,
		"unique": false
	  },
	  {
		"item": "bronze_arrows",
		"min": 10,
		"chance": 4,
		"max": 25,
		"unique": false
	  },
	  {
		"item": "iron_arrows",
		"min": 5,
		"chance": 9,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "bow",
		"min": 1,
		"chance": 9,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "archer_thief",
	"collection_log": "normal",
	"hp": 20,
	"accuracy": 3,
	"max_hit": 4
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "damage_orb_1",
		"min": 10,
		"chance": 5,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "air_orb",
		"min": 10,
		"chance": 10,
		"max": 20,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "ghost",
	"collection_log": "normal",
	"hp": 15,
	"accuracy": 3,
	"max_hit": 3
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "coins",
		"min": 1,
		"chance": 1,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "willow_logs",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "bronze_arrows",
		"min": 5,
		"chance": 4,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf",
		"min": 1,
		"chance": 14,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "willow_bow",
		"min": 1,
		"chance": 19,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "archer_goblin",
	"collection_log": "normal",
	"hp": 20,
	"accuracy": 3,
	"max_hit": 4
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "wheat_seeds",
		"min": 1,
		"chance": 1,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "red_mushroom_seeds",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "green_mushroom_seeds",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "blue_mushroom_seeds",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "bonemeal",
		"min": 1,
		"chance": 4,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf",
		"min": 1,
		"chance": 7,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "bonecrusher",
		"min": 1,
		"chance": 9,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "green_leaf",
		"min": 1,
		"chance": 14,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf_seeds",
		"min": 1,
		"chance": 19,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "green_leaf_seeds",
		"min": 1,
		"chance": 39,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "farmer",
	"collection_log": "normal",
	"hp": 5,
	"accuracy": 2,
	"max_hit": 2
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "red_mushroom_seeds",
		"min": 1,
		"chance": 2,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "green_mushroom_seeds",
		"min": 1,
		"chance": 2,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "blue_mushroom_seeds",
		"min": 1,
		"chance": 2,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "bonemeal",
		"min": 1,
		"chance": 2,
		"max": 3,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf",
		"min": 1,
		"chance": 4,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "green_leaf",
		"min": 1,
		"chance": 9,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "lime_leaf",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "gold_leaf",
		"min": 1,
		"chance": 149,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf_seeds",
		"min": 1,
		"chance": 14,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "green_leaf_seeds",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "straw_hat",
		"min": 1,
		"chance": 99,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "lime_leaf_seeds",
		"min": 1,
		"chance": 199,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "gold_leaf_seeds",
		"min": 1,
		"chance": 599,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "master_farmer",
	"collection_log": "normal",
	"hp": 50,
	"accuracy": 4,
	"max_hit": 4
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bear_fur",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "giant_bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "bear",
	"collection_log": "normal",
	"hp": 30,
	"accuracy": 5,
	"max_hit": 1
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 1000,
	"name": "lochness_monster",
	"collection_log": "none",
	"hp": 30,
	"accuracy": 0,
	"max_hit": 0
  },
  {
	"weakness": "water",
	"drops": [
	  {
		"item": "ashes",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "fire_orb",
		"min": 10,
		"chance": 9,
		"max": 20,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "flufflare",
	"collection_log": "normal",
	"hp": 150,
	"accuracy": 20,
	"max_hit": 3
  },
  {
	"weakness": "axes",
	"drops": [
	  {
		"item": "logs",
		"min": 10,
		"chance": 5,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "oak_logs",
		"min": 10,
		"chance": 9,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "willow_logs",
		"min": 10,
		"chance": 9,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "maple_logs",
		"min": 10,
		"chance": 9,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "mangrove_logs",
		"min": 10,
		"chance": 29,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "haunted_logs",
		"min": 10,
		"chance": 49,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "birdnest",
		"min": 1,
		"chance": 49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "woodchips",
		"min": 250,
		"chance": 199,
		"max": 500,
		"unique": false
	  }
	],
	"defence": 6,
	"magic_defence": 1000,
	"name": "ent",
	"collection_log": "normal",
	"hp": 500,
	"accuracy": 16,
	"max_hit": 12
  },
  {
	"weakness": "water",
	"drops": [
	  {
		"item": "ashes",
		"min": 10,
		"chance": 0,
		"max": 20,
		"unique": false
	  },
	  {
		"item": "fire_orb",
		"min": 50,
		"chance": 9,
		"max": 100,
		"unique": false
	  },
	  {
		"item": "damage_orb_1",
		"min": 50,
		"chance": 9,
		"max": 100,
		"unique": false
	  },
	  {
		"item": "damage_orb_2",
		"min": 50,
		"chance": 19,
		"max": 100,
		"unique": false
	  },
	  {
		"item": "fireshroom_seeds",
		"min": 1,
		"chance": 39,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "fireshroom",
		"min": 3,
		"chance": 29,
		"max": 7,
		"unique": false
	  },
	  {
		"item": "damage_orb_3",
		"min": 50,
		"chance": 49,
		"max": 100,
		"unique": false
	  },
	  {
		"item": "fire_pages",
		"min": 1,
		"chance": 49,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "fire_emblem",
		"min": 1,
		"chance": 299,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "flufflare_pet",
		"min": 1,
		"chance": 9999,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 0,
	"magic_defence": 0,
	"name": "giant_flufflare",
	"collection_log": "boss",
	"hp": 1500,
	"accuracy": 10,
	"max_hit": 15
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "coins",
		"min": 1,
		"chance": 1,
		"max": 10,
		"unique": false
	  },
	  {
		"item": "cooked_shrimp",
		"min": 1,
		"chance": 9,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "dotted_green_leaf",
		"min": 1,
		"chance": 19,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 2,
	"magic_defence": 0,
	"name": "goblin",
	"collection_log": "normal",
	"hp": 20,
	"accuracy": 0,
	"max_hit": 3
  },
  {
	"weakness": "none",
	"drops": [
	  {
		"item": "mummified_bones",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  },
	  {
		"item": "mummified_skull",
		"min": 1,
		"chance": 29,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 10,
	"magic_defence": 15,
	"name": "mummy",
	"collection_log": "normal",
	"hp": 250,
	"accuracy": 15,
	"max_hit": 7
  },
  {
	"weakness": "crush",
	"drops": [
	  {
		"item": "bait",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 10,
	"magic_defence": 30,
	"name": "scorpion",
	"collection_log": "normal",
	"hp": 200,
	"accuracy": 20,
	"max_hit": 3
  },
  {
	"weakness": "crush",
	"drops": [
	  {
		"item": "scorpions_tail",
		"min": 1,
		"chance": 0,
		"max": 1,
		"unique": false
	  }
	],
	"defence": 10,
	"magic_defence": 30,
	"name": "poison_scorpion",
	"collection_log": "normal",
	"hp": 200,
	"accuracy": 20,
	"max_hit": 3
  },
  {
	"weakness": "magic",
	"drops": [{
	  "item": "demon_bones",
	  "min": 1,
	  "chance": 0,
	  "max": 1,
	  "unique": false
	},
	{
	  "item": "unpowered_orb",
	  "min": 1,
	  "chance": 9,
	  "max": 10,
	  "unique": false
	},
	{
	  "item": "damage_orb_1",
	  "min": 1,
	  "chance": 9,
	  "max": 10,
	  "unique": false
	},
	{
	  "item": "damage_orb_2",
	  "min": 1,
	  "chance": 9,
	  "max": 10,
	  "unique": false
	},
	{
	  "item": "damage_orb_3",
	  "min": 1,
	  "chance": 99,
	  "max": 10,
	  "unique": false
	}],
	"defence": 6,
	"magic_defence": 0,
	"name": "demon",
	"collection_log": "normal",
	"hp": 100,
	"accuracy": 28,
	"max_hit": 20
  },
  {
	"weakness": "crush",
	"drops": [{
	  "item": "silkfang_baby_hide",
	  "min": 1,
	  "chance": 50,
	  "max": 1,
	  "unique": false
	},{
	  "item": "string",
	  "min": 1,
	  "chance": 0,
	  "max": 1,
	  "unique": false
	}],
	"defence": 0,
	"magic_defence": 0,
	"name": "baby_silkfang",
	"collection_log": "normal",
	"hp": 3,
	"accuracy": 100,
	"max_hit": 10
  },
  {
	"weakness": "crush",
	"drops": [{
	  "item": "string",
	  "min": 1,
	  "chance": 0,
	  "max": 1,
	  "unique": false
	}],
	"defence": 0,
	"magic_defence": 0,
	"name": "spider",
	"collection_log": "normal",
	"hp": 3,
	"accuracy": 0,
	"max_hit": 1
  },
  {
	"weakness": "crush",
	"drops": [{
	  "item": "string",
	  "min": 5,
	  "chance": 0,
	  "max": 15,
	  "unique": false
	}],
	"defence": 0,
	"magic_defence": 0,
	"name": "giant_spider",
	"collection_log": "normal",
	"hp": 30,
	"accuracy": 1,
	"max_hit": 2
  },
  {
	"weakness": "stab",
	"drops": [{
	  "item": "giant_bones",
	  "min": 1,
	  "chance": 0,
	  "max": 1,
	  "unique": false
	},{
	  "item": "cake",
	  "min": 1,
	  "chance": 4,
	  "max": 1,
	  "unique": false
	}],
	"defence": 10,
	"magic_defence": 10,
	"name": "bully_thief",
	"collection_log": "normal",
	"hp": 300,
	"accuracy": 1,
	"max_hit": 2
  },{
	"weakness": "stab",
	"drops": [{
	  "item": "raw_crab_meat",
	  "min": 1,
	  "chance": 0,
	  "max": 1,
	  "unique": false
	},
	{
	  "item": "sand",
	  "min": 10,
	  "chance": 9,
	  "max": 20,
	  "unique": false
	},
	{
	  "item": "seashroom",
	  "min": 1,
	  "chance": 9,
	  "max": 5,
	  "unique": false
	}],
	"defence": 4,
	"magic_defence": 4,
	"name": "crab",
	"collection_log": "normal",
	"hp": 30,
	"accuracy": 3,
	"max_hit": 3
  }
];

const equipmentData = {
	titanium_helmet: {
		name: "Titanium Helmet",
		defence: 7,
		level: 65
	},
	titanium_body: {
		name: "Titanium Body",
		defence: 7,
		level: 65
	},
	titanium_legs: {
		name: "Titanium Legs",
		defence: 7,
		level: 65
	},
	crocodile_legs: {
		name: "Crocodile Legs",
		magic_defence: 4,
		archery_damage: 4,
		level: 40
	},
	titanium_gloves: {
		name: "Titanium Gloves",
		defence: 7,
		level: 65
	},
	titanium_boots: {
		name: "Titanium Boots",
		defence: 7,
		level: 65
	},
	straw_hat: {
		name: "Straw Hat",
		bonus: "+10 farming levels on harvesting"
	},
	sapphire_necklace: {
		name: "Sapphire Necklace",
		accuracy: 2
	},
	titanium_mace: {
		name: "Titanium Mace",
		damage: 10,
		accuracy: 8,
		level: 70
	},
	tree_sigil: {
		name: "Tree Sigil"
	}
}

const tooltipStats = ["damage","archery_damage","magic_damage","accuracy","defence","magic_defence","level","sell_price", "bonus"]
const quests = ["lost_cat","heating_homes","chicken_slaughter","shrimp_sandwich","sewer_doll","thieves_hideout_1","thieves_hideout_2","thieves_hideout_3","let_there_be_light","the_3_gemstones","plunder_the_pirate_ship"];

const achievements = [
	["travel","mine_it","forge_bronze","feather_drop","forge_arrow_heads","finalize_arrows","kill_raccoon"],
	["level_10","drink_potion","mine_iron","chop_craft_fill_bucket","chicken_wheat_seeds","make_bronze_arrows","slay_giant_rat","bury_10_giant_bones_bank","sand_bait","vandalized_cemetery_bones","finding_the_hunter","examine_algae","examine_rotten_logs","examine_mold_rock","run","gather_milk","right_click_item","right_click_player","door"],
	["mummified_skull_jafa","expensive_water","camel_back","badge_it_up","auto_bury_1000","taste_the_scimitar","3_fishing_cages","4_seaweed","lochness_20","lochness_colors","lochness_magnetless","level_20","hell","chop_bamboo","beetle_kill_silver_mace","thieves_guild_entry2","high_five_tiger","boss_kill","enchant_gem_mayor","grass_orb_tiger","three_eyed_fish","double_cakes","giant_iron","make_500_water_orbs","firebond_10_streak","fast_fire","insta_x2_gold_bars","hell_shovel_dig","hell_shovel_sand_dig"],
	["meteor_expert","no_reflect_required","giant_flufflare_rain","weaponless_giant_flufflare","500_titanium_damage_orbs","3_hit_firefluff","the_lochness_mvp","lochness_bad_cannon","hit_40_hell","level_40","the_multitasker","sand_baited_seed","100_deranged_mage_streak","tit_pickaxe_charcoal_wall","5_charcoal_mined","plunder_the_shark","shining_titanium_arrow","poison_cactus","gem_to_sd"],
	["silkfang_solo_foodless","flawless_quick_deranged_mage","grow_a_cactus","level_60","hunting_mask_kill","100_deranged_mage_hungry_streak","lochness_solo","woodenstaff_giant_flufflare","heating_the_desert","ancient_pickaxe_meteor"],
	["level_80"],
]
const slots = ["head", "body", "legs", "boots", "gloves", "hat", "necklace", "weapon", "sigil"];
const playerStats = ["hp","damage","arrow_damage","magic_damage","max_sleep_value","accuracy","defence","magic_defence"]

let currentTab = "skills";
let tooltipPiece = "";
let questsCompleted = 0;
let achievementsCompleted = [0, 0, 0, 0, 0, 0];

async function getData(username) {
	// const response = await fetch('https://flatmmo.com/api/player/', {
	//     method: 'POST',
	//     headers: {
	//         'Content-Type': 'application/json',
	//         'X-API-Key': 'dounford-the-goat'
	//     },
	//     body: JSON.stringify({
	//         'username': username
	//     })
	// });
	// data = await response.text();
	const dataText = `{"username":"thebacon","inventory_items":"bait~100~bait~100~bait~100~bait~100~bait~100~bait~44~raw_sardine~100~algae~1~raw_sardine~100~raw_sardine~100~titanium_axe~1~raw_sardine~100~raw_sardine~100~raw_sardine~100~raw_sardine~41","bank_items":"coins~28343~1~stardust~24797~1~arrow_shafts~15157~1~willow_logs~9293~1~bronze_arrow_heads~5757~1~bronze_arrows~3637~1~raw_sardine~3276~1~fire_orb~2805~1~feathers~2655~1~iron_arrows~1636~1~copper~1249~1~gold_arrows~1000~1~iron_arrow_heads~995~1~seashroom~814~1~string~768~1~coal~509~1~logs~478~1~moldshroom~452~1~air_orb~443~1~cooked_eel~400~1~cooked_tuna~389~1~cooked_anchovy~379~1~fishing_net~354~1~wheat~332~1~cooked_shrimp~320~1~damage_orb_1~313~1~cooked_piranha~260~1~vial~244~1~green_mushroom~241~1~woodchips~178~1~raw_lobster~177~1~blue_mushroom~165~1~cooked_lobster~165~1~sand~155~1~seaweed~113~1~blue_mage_silk~105~1~cooked_chicken~102~1~bronze_bar~101~1~wheat_seeds~97~1~water_orb~95~1~burnt_tuna~92~1~fireshroom~90~1~bonemeal~90~1~red_mage_silk~76~1~blue_mushroom_seeds~75~1~silver~67~1~water_bucket~62~1~bear_fur~62~1~rockshroom~56~1~cooked_crab_meat~55~1~melee_potion~54~1~red_mushroom_seeds~45~1~green_mushroom_seeds~42~1~thieves_hood~39~1~iron~39~1~green_leaf~37~1~unpowered_orb~35~1~tiger_fur~32~1~gold~32~1~damage_orb_2~30~1~haunted_logs~30~1~algae~30~1~dotted_green_leaf~27~1~red_mushroom~27~1~sugarcane~18~1~bonecrusher~18~1~cooked_rat_meat~17~1~bucket~17~1~cake~15~1~maple_logs~14~1~archery_potion~14~1~burnt_crab_meat~13~1~barbed_wire~13~1~bow~12~1~hell_shovel~11~1~silver_bar~10~1~oak_staff~10~1~cooked_three_eyed_fish~9~1~willow_staff~8~1~seashroom_seeds~7~1~matches~7~1~magic_potion~6~1~bronze_sword~6~1~snakeskin_body~6~1~gold_bar~6~1~shovel~5~1~mangrove_logs~5~1~burnt_piranha~5~1~rotten_logs~5~1~red_mage_boots~4~1~oak_logs~3~1~bronze_boots~3~1~large_vial~3~1~gold_knife~3~1~iron_bar~3~1~bronze_body~3~1~cooked_sardine~3~1~red_mage_gloves~3~1~woodcutting_potion~3~1~milk_bucket~2~1~stone_boots~2~1~bronze_gloves~2~1~hatching_chicken_sigil~2~1~maple_bow~2~1~silver_pickaxe~2~1~bronze_helmet~2~1~iron_knife~2~1~straw_hat~2~1~iron_body~2~1~red_mage_hat~2~1~moldshroom_seeds~2~1~pyro_matches~2~1~mad_bunny_sigil~1~1~reindeer_sigil~1~1~bronze_knife~1~1~snakeskin_mask~1~1~snakeskin_gloves~1~1~snakeskin_boots~1~1~iron_mace~1~1~bear_fur_boots~1~1~bear_fur_legs~1~1~bear_fur_body~1~1~bear_fur_gloves~1~1~silver_mace~1~1~willow_bow~1~1~oak_bow~1~1~staff~1~1~snakeskin_legs~1~1~bear_fur_mask~1~1~tiger_fur_boots~1~1~tiger_fur_gloves~1~1~tiger_fur_legs~1~1~tiger_fur_body~1~1~silver_axe~1~1~silver_boots~1~1~silver_helmet~1~1~silver_body~1~1~silver_legs~1~1~silver_gloves~1~1~gold_mace~1~1~mummy_sigil~1~1~firecook_potion~1~1~tnt~1~1~crocodile_gloves~1~1~crocodile_boots~1~1~gold_boots~1~1~crocodile_body~1~1~raw_shark~1~1~bronze_scimitar~1~1~crocodile_mask~1~1~crocodile_legs~1~1~iron_sword~1~1~fishing_cage~1~1~gold_axe~1~1~pyro_gloves~1~1~silver_sword~1~1~thick_fishing_net~1~1~chefs_hat~1~1~blue_mage_top~1~1~lime_leaf~1~1~gold_leaf~1~1~harpoon~1~1~gold_scimitar~1~1~silver_scimitar~1~1~tiger_fur_mask~1~1~grass_orb~1~1~silkfang_mask~1~1~silkfang_legs~1~1~silkfang_gloves~1~1~silkfang_boots~1~1~silkfang_body~1~1~promethium_knife~1~1~mangrove_bow~1~1~promethium_mace~1~1~iron_legs~1~1~iron_helmet~1~1~iron_gloves~1~1~iron_boots~1~1~reflect_emblem~1~1~scimitar_handle~1~1~red_mage_top~1~1~deranged_mask~1~1~red_mage_skirt~1~1~promethium_axe~1~1~titanium_knife~1~1~gold_pickaxe~1~1","vars":"ach_examine_algae~1~ach_grass_orb_tiger~1~demon_killed~28~health_xp~851428~hp~70~ach_mine_iron~1~lava_rocky_killed~15~accuracy~2~global_xp~12404072~everbrook_guard_killed~79~snake_killed~109~playtime~41041~ach_bury_bones~1~cow_killed~19~hunting_monster_goal~75~shrimp_sandwich~-1~looted_pirates_chest~0~legs~gold_legs~sleep_value~76~ach_boss_kill~1~melee_xp~2447504~crafting_xp~364645~great_thief_killed~35~plunder_the_pirate_ship~-1~ach_hunting_mask_kill~1~energy~1000~magic_xp~54456~ach_fast_fire~1~vial_of_gunpowder_ocean~0~ach_vandalized_cemetery_bones~1~brewing_xp~2230~seagull_killed~5~deranged_mage_best_killtime~35~bondfire_points~0~ghost_killed~272~farming_patch_3_planted~none~farming_patch_2_timer~0~sigil~faradox_sigil~ach_examine_rotten_logs~1~lochness_points~0~spell_damage~-13~thief_killed~5~ach_mine_coal~1~bondfire_points_total~216~ach_lochness_mvp~1~feeding_the_dead_unlocked~1~farmer_killed~226~ach_run~1~damage~7~archery_xp~903752~trible_fishermen_killed~2~defence~23~alt_trading_login_warning~1~farming_patch_1_planted~none~max_hp~70~spider_killed~32~witch_tutorial~1~enchantment_xp~3763~melee_potion_timer~0~hunting_xp~23589~farming_patch_1_timer~0~ach_camel_back~1~charcoal_produced~0~global_level~743~boots~stone_boots~heating_homes~-1~lochness_fishing_xp~1610~unlocked_teleport_dock_haven~1~let_there_be_light~-1~deranged_mage_killed~57~hunting_points~244~ach_plunder_the_shark~1~archer_goblin_killed~4~giant_spider_killed~5475~ach_thieves_guild_entry2~1~beach_fixed~1~lochness_completed~2~ach_firebond_10_streak~1~beetle_killed~126~ach_hell~1~unlocked_teleport_desert~1~ach_right_click_monster~1~ach_make_bronze_arrows~1~thieves_hideout_unlocked~1~worship_points~15~ach_high_five_tiger~1~woodcutting_xp~1522370~first_login~1~lochness_points_total~2~max_sleep_value~126~fishing_potion_timer~0~ach_4_seaweed~1~ach_examine_mold_rock~1~hunting_points_total~544~chicken_slaughter_slain~6~deranged_mage_key_used~1~rat_killed~18~deep_jungle_map_read~1~hunting_monster~hell_goblin~hunting_cooldown~1~ach_sand_bait~1~attempt_thief_hideout_walk~1~ach_beetle_kill_silver_mace~1~woodcutting_potion_timer~0~chicken_killed~84~arrows~none~ach_gather_milk~1~ach_slay_giant_rat~1~examined_dead_marin~2~crab_killed~2373~ach_3_fishing_cages~1~body~gold_body~farming_patch_2_planted~none~ach_bury_10_giant_bones_bank~1~unlocked_teleport_everbrook~1~mining_xp~230690~pirate_ship_access~1~ach_hell_shovel_sand_dig~1~pirate_killed~18~bully_thief_killed~93~current_premium~none~hat~straw_hat~hunting_points_post_update_flag~1~fishing_xp~1519693~mystic_vale_sd_chest_opened~1~lost_cat~-1~ach_drink_potion~1~hell_goblin_killed~196~feeding_the_dead_toggled~1~deranged_mage_key_chest_opened~1~poisoned~0~magic_orb~none~ach_chop_bamboo~1~tab_off~0~fishing_cage_3_timer~3061~hunting_expeditions_completed~16~ach_hell_shovel_dig~1~ach_taste_the_scimitar~1~woodchips_timer~0~arrow_damage~6~ach_level_10~1~swim~1~farming_xp~41315~guard_mage_killed~166~weapon_type~SLASH~flufflare_killed~43~ach_chicken_wheat_seeds~1~head~gold_helmet~weapon~fishing_rod~fishing_cage_collect~126~bear_killed~97~ach_finding_the_hunter~1~gloves~gold_gloves~unlocked_teleport_omboko~1~master_farmer_killed~85~red_mage_killed~522~firemake_xp~344910~rocky_killed~66~ach_double_cakes~1~smashed_sandstone~1~fishing_cage_1_timer~3306~primary_magic_orb~none~tiger_killed~36~thieves_hideout_2~-1~thieves_hideout_3~-1~magic_potion_timer~0~thieves_hideout_1~-1~magic_defence~0~ach_right_click_player~1~cooking_xp~3955410~sewer_doll~-1~farming_patch_3_timer~0~necklace~sapphire_necklace~archer_thief_killed~55~ach_right_click_item~1~forging_xp~90986~ach_bank_spider~1~unlocked_teleport_mystic_vale~1~ach_expensive_water~1~fishing_cage_2_timer~2883~worship_xp~47331~hunting_monster_at~0~chicken_slaughter~-1~ach_chop_craft_fill_bucket~1~ach_hit_40_hell~1~ach_door~1~goblin_killed~126","playtime":41041,"global_level":743,"global_xp":12404072,"health_level":61,"health_xp":851428,"melee_level":77,"melee_xp":2447504,"archery_level":62,"archery_xp":903752,"magic_level":31,"magic_xp":54456,"worship_level":30,"worship_xp":47331,"mining_level":45,"mining_xp":230690,"forging_level":36,"forging_xp":90986,"crafting_level":51,"crafting_xp":364645,"fishing_level":69,"fishing_xp":1519693,"woodcutting_level":70,"woodcutting_xp":1522370,"firemake_level":50,"firemake_xp":344910,"cooking_level":84,"cooking_xp":3955410,"brewing_level":11,"brewing_xp":2230,"farming_level":29,"farming_xp":41315,"hunting_level":24,"hunting_xp":23589,"enchantment_level":13,"enchantment_xp":3763}`

	data = JSON.parse(dataText)

	parseData("vars")
	parseData("bank_items")
	parseData("inventory_items")
	data.vars.hair = "none";
	
	// const monstersResponse = await fetch('https://flatmmo.com/data/monsters.json', {
	//     method: 'GET',
	//     headers: {
	//         'Content-Type': 'application/json',
	//     },
	// });
	// enemiesData = await monstersResponse.json();

	init();
}

function parseData(key) {
	const split = data[key].split("~");
	data[key] = {};
	for(let i = 0; i < split.length; i++) {
		data[key][split[i]] = split[++i];
	}
}

function switchTab(tab) {
	Array.from(document.getElementById("tabs").children).forEach(el => el.style.display = "none");
	document.getElementById(currentTab + "Btn").classList.remove("activeTab");

	currentTab = tab;
	document.getElementById("tab-" + tab).style.display = "block";
	document.getElementById(tab + "Btn").classList.add("activeTab");
}

function updateTooltip(slot, piece) {
	if(tooltipPiece === piece) return;
	tooltipPiece = piece;
	const equipment = equipmentData[piece] || {};
	document.getElementById("equipmentTooltipName").innerText = equipment.name || titleCase(piece);
	document.getElementById("equipmentTooltipImage").src = `https://flatmmo.com/images/items/${piece}.png`;
	tooltipStats.forEach(stat => {
		const parentDiv = document.getElementById("equipmentTooltipDiv_" + stat);
		if(equipment[stat]) {
			parentDiv.style.display = "block";
			document.getElementById("equipmentTooltip_" + stat).innerText = equipment[stat];
		} else {
			parentDiv.style.display = "none";
		}
	})
	document.getElementById("equipmentTooltip")
}

function updatePremium() {
	let url;
	switch(data.vars.current_premium) {
		case "bronze":
			url = "https://flatmmo.com/images/ui/f_bronze_32.png";
			break;
		case "silver":
			url = "https://flatmmo.com/images/ui/f_silver_32.png";
			break;
		case "gold":
			url = "https://flatmmo.com/images/ui/f_gold_32.png";
			break;
		default:
			url = "https://flatmmo.com/images/items/diamond.png";
	}
	document.getElementById("profileIcon").src = url;
}

function updateHeader() {
	const icon = document.getElementById("profileIcon");
	icon.src = data.vars.current_premium === null || data.vars.current_premium === "none" ? "https://flatmmo.com/images/items/diamond.png" : `https://flatmmo.com/images/ui/f_${data.vars.current_premium}_32.png`;
	document.getElementById("username").innerText = data.username;
	document.getElementById("level").innerText = data.global_level;

	//TBD ask Smitty to add a way to track quests
	quests.forEach(quest => {
		if(data.vars[quest] === "-1") {
			questsCompleted++
		}
	})
	document.getElementById("quests").innerText = `${questsCompleted}/${quests.length}`

	achievements.forEach((difficult, index) => {
		difficult.forEach(achievement => {
			if(data.vars["ach_" + achievement] === "1") {
				achievementsCompleted[index]++
			}
		})
	})
	const achievementsCompletedTotal = achievementsCompleted.reduce((a, b)=>a + b);
	document.getElementById("achievements").innerText = `${achievementsCompletedTotal}/${achievements.flat().length}`
}

function updateEquipmentSlots() {
	slots.forEach(slot => {
		try {
		const equipment = data.vars[slot] || "none";
		document.getElementById(slot + "SlotDiv").setAttribute("data-equipment", equipment)
		document.getElementById(slot + "Slot").src = `https://flatmmo.com/images/items/${equipment}.png`;
		const equipmentName = equipmentData[equipment]?.name || titleCase(equipment)
		document.getElementById(slot + "SlotName").innerText = equipmentName;
		document.getElementById(slot + "SlotName").setAttribute("href", "https://flatmmo.wiki/index.php/" + equipmentName.replaceAll(" ", "_"));
		} catch(error) {
			console.log(error.message, slot)
		}
	})
}

function updateStats() {
	playerStats.forEach(stat => {
		document.getElementById(stat).innerText = data.vars[stat] || 0;
	})
}

function updateLevels() {
	const skills = ["melee", "archery", "magic", "health", "worship", "mining", "forging", "crafting", "enchantment", "fishing", "woodcutting", "firemake", "cooking", "brewing", "farming", "hunting"];

	skills.forEach(skill=>{
		document.getElementById(skill + "Level").innerText = data[skill + "_level"]
	})
}

function updateAchievementsProgress() {
	const questProgress = (questsCompleted / quests.length * 100).toFixed() + "%";
	const questProgressDiv = document.getElementById("questsProgress");
	questProgressDiv.innerText = questProgress
	questProgressDiv.style.setProperty("--progress", questProgress);
	document.getElementById("questsProgressTotal").innerText = questsCompleted;

	const achievementsDifficults = ["tutorial","easy","medium","hard","elite","champion"];
	achievementsDifficults.forEach((difficult, index) => {
		const achievementsProgress = (achievementsCompleted[index] / achievements[index].length * 100).toFixed() + "%";
		const achievementsProgressDiv = document.getElementById(difficult + "AchievementProgress");
		achievementsProgressDiv.innerText = achievementsProgress
		achievementsProgressDiv.style.setProperty("--progress", achievementsProgress);
		document.getElementById(difficult + "AchievementProgressTotal").innerText = achievementsCompleted[index];
	})
}

function updateMinigames() {
	//Bondfire
	const bondfirePointsTotal = parseInt(data.vars.bondfire_points_total) || 0;
	if(bondfirePointsTotal !== 0) {
		const bondfireData = `<span>${bondfirePointsTotal.toLocaleString("en-US")} <b>Total Bondfire Points</b></span>`;
		document.getElementById("minigame-bondfire").insertAdjacentHTML("beforeend", bondfireData);
	} else {
		document.getElementById("minigame-bondfire").insertAdjacentHTML("beforeend", "<span>YET TO BE COMPLETED</span>");
	}
	
	//Deranged Mage
	const derangedBestKill = parseInt(data.vars.deranged_mage_best_killtime) || 0;
	const derangedTotal = parseInt(data.vars.deranged_mage_killed) || 0;
	if(derangedTotal !== 0) {
		const derangedData = `<span><b>Best Kill Time:</b> ${derangedBestKill} seconds</span>
			<span><b>Total Kills:</b> ${derangedTotal.toLocaleString("en-US")}</span>`;
		document.getElementById("minigame-deranged").insertAdjacentHTML("beforeend", derangedData);
	} else {
		document.getElementById("minigame-deranged").insertAdjacentHTML("beforeend", "<span>YET TO BE COMPLETED</span>");
	}
	
	//Silkfang
	const silkfangBestKill = parseInt(data.vars.silkfang_best_killtime) || 0;
	const silkfangTotal = parseInt(data.vars.silkfang_killed) || 0;
	if(silkfangTotal !== 0) {
		const silkfangeData = `<span><b>Best Kill Time:</b> ${silkfangBestKill.toLocaleString("en-US")} seconds</span>
			<span><b>Total Kills:</b> ${silkfangTotal.toLocaleString("en-US")}</span>`;
		document.getElementById("minigame-silkfang").insertAdjacentHTML("beforeend", silkfangeData);
	} else {
		document.getElementById("minigame-silkfang").insertAdjacentHTML("beforeend", "<span>YET TO BE COMPLETED</span>");
	}
	
	//Lochness
	const lochnessPointsTotal = parseInt(data.vars.lochness_points_total) || 0;
	const lochnessBestXp = parseInt(data.vars.lochness_fishing_xp) || 0;
	const lochnessTotal = parseInt(data.vars.lochness_completed) || 0;
	if(lochnessPointsTotal !== 0) {
		const lochnessData = `<span><b>Total Lochness Points:</b> ${lochnessPointsTotal.toLocaleString("en-US")}</span>
			<span><b>Highest Fishing XP:</b> ${lochnessBestXp.toLocaleString("en-US")}</span>
			<span><b>Lochness Events Completed:</b> ${lochnessTotal.toLocaleString("en-US")}</span>`;
		document.getElementById("minigame-lochness").insertAdjacentHTML("beforeend", lochnessData);
	} else {
		document.getElementById("minigame-lochness").insertAdjacentHTML("beforeend", "<span>YET TO BE COMPLETED</span>");
	}
	
	//Giant Flufflare
	const flufflareBestKill = parseInt(data.vars.giant_flufflare_best_killtime) || 0;
	const flufflareTotal = parseInt(data.vars.giant_flufflare_killed) || 0;
	if(flufflareTotal !== 0) {
		const flufflareData = `<span><b>Best Kill Time:</b> ${flufflareBestKill} seconds</span>
			<span><b>Total Kills:</b> ${flufflareTotal.toLocaleString("en-US")}</span>`;
		document.getElementById("minigame-flufflare").insertAdjacentHTML("beforeend", flufflareData);
	} else {
		document.getElementById("minigame-flufflare").insertAdjacentHTML("beforeend", "<span>YET TO BE COMPLETED</span>");
	}
}

function updateEnemies() {
	const enemiesDiv = document.querySelector(".enemies");
	enemiesData.forEach(enemy => {
		let enemyName = titleCase(enemy.name);
		if(enemy.collection_log === "boss") {
			enemyName = "☠️" + enemyName.toUpperCase();
		}
		const enemyDiv = `<div class="enemy">
			<div><span>${enemyName}</span></div>
			<div><img src="https://flatmmo.com/images/npcs/${enemy.name}_stand1.png"></img></div>
			<div>
				<span>${data.vars[enemy.name + "_killed"] || 0} Killed</span>
			</div>
		</div>`
		enemiesDiv.insertAdjacentHTML("beforeend", enemyDiv)
	})
}

function init() {
  	updatePremium();
	updateHeader();
	setEquipment();
	drawCharacter();
	updateEquipmentSlots();
	updateStats();
	updateLevels();
	updateAchievementsProgress();
	updateMinigames();
	updateEnemies();
	console.log("page loaded")
}

document.addEventListener("mousemove", e=> {
	const equipment = e.target.closest("[data-equipment]");
	const slot = e.target.closest("[data-equipment]");
	if(equipment && slot) {
		const tooltip = document.querySelector(".equipmentTooltip");
		if(window.innerWidth > e.x + tooltip.clientWidth) {
			tooltip.style.left = e.x + "px";
		} else {
			tooltip.style.left = "unset";
			tooltip.style.right = (window.innerWidth - e.x) + "px";
		}
		if(window.innerHeight > e.y + tooltip.clientHeight) {
			tooltip.style.top = e.y + "px";
			tooltip.style.bottom = "unset";
		} else {
			tooltip.style.top = "unset";
			tooltip.style.bottom = (window.innerHeight - e.y) + "px";
		}

		updateTooltip(slot.dataset.slot, equipment.dataset.equipment);
	}
})


const titleCase = (s) => {
	return s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())
	.replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
}

window.onload = getData
//getData("felipewolf");