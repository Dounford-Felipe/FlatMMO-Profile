let data;
let enemiesData = [];

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
const playerStats = ["hp","damage","arrow_damage","spell_damage","max_sleep_value","accuracy","defence","magic_defence"]

let currentTab = "skills";
let tooltipPiece = "";
let questsCompleted = 0;
let achievementsCompleted = [0, 0, 0, 0, 0, 0];

async function getData(newUser) {
	let user;
	//flatmmo.com/profile?user=dounford
	const params = new URLSearchParams(window.location.search)
	const paramUser = params.get("user")
	
	//flatmmo.com/profile/dounford
	const split = document.location.pathname.split("/");
	let pathUser;
	if(split.length === 3) {
		pathUser = split.at(-1);
	}

	user = newUser || paramUser || pathUser || "smitty";

	const response = await fetch('https://flatmmo.com/api/player/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-API-Key': 'dounford-the-goat'
		},
		body: JSON.stringify({
			'username': user
		})
	});
	dataText = await response.text();

	data = JSON.parse(dataText)

	//In case the user doesn't exist
	if(data === null) {
		getData("smitty");
		return;
	}

	parseData("vars")
	parseData("bank_items")
	parseData("inventory_items")
	data.vars.hair = "none";
	
	const monstersResponse = await fetch('https://flatmmo.com/data/monsters.json', {
	    method: 'GET',
	    headers: {
	        'Content-Type': 'application/json',
	    },
	});
	enemiesData = await monstersResponse.json();

	init();
}

function parseData(key) {
	if(!data[key]) return;
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
		if(equipmentName === "None") {
			document.getElementById(slot + "SlotName").setAttribute("href", "javascript:void(0)");
		} else {
			document.getElementById(slot + "SlotName").setAttribute("href", "https://flatmmo.wiki/index.php/" + equipmentName.replaceAll(" ", "_"));
			document.getElementById(slot + "SlotName").setAttribute("target","_blank")
		}
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
	const derangedPet = parseInt(data.vars.deranged_mage_baby_deranged_mage_pet) || false;
	if(derangedTotal !== 0) {
		const derangedData = `<span><b>Best Kill Time:</b> ${derangedBestKill} seconds</span>
			<span><b>Total Kills:</b> ${derangedTotal.toLocaleString("en-US")}</span>
			${derangedPet ? `<span><b>Deranged Pet:</b> ${derangedPet}</span>` : ""}`;
		document.getElementById("minigame-deranged").insertAdjacentHTML("beforeend", derangedData);
	} else {
		document.getElementById("minigame-deranged").insertAdjacentHTML("beforeend", "<span>YET TO BE COMPLETED</span>");
	}
	
	//Silkfang
	const silkfangBestKill = parseInt(data.vars.silkfang_best_killtime) || 0;
	const silkfangTotal = parseInt(data.vars.silkfang_killed) || 0;
	const silkfangPet = parseInt(data.vars.silkfang_silkfang_pet) || false;
	if(silkfangTotal !== 0) {
		const silkfangeData = `<span><b>Best Kill Time:</b> ${silkfangBestKill.toLocaleString("en-US")} seconds</span>
			<span><b>Total Kills:</b> ${silkfangTotal.toLocaleString("en-US")}</span>
			${silkfangPet ? `<span><b>Deranged Pet:</b> ${silkfangPet}</span>` : ""}`;
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
	const flufflarePet = parseInt(data.vars.giant_flufflare_flufflare_pet) || false;
	if(flufflareTotal !== 0) {
		const flufflareData = `<span><b>Best Kill Time:</b> ${flufflareBestKill} seconds</span>
			<span><b>Total Kills:</b> ${flufflareTotal.toLocaleString("en-US")}</span>
			${flufflarePet ? `<span><b>Deranged Pet:</b> ${flufflarePet}</span>` : ""}`;
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
		const enemyDiv = `<div class="enemy" data-enemy="${enemy.name}">
			<div><span>${enemyName}</span></div>
			<div><img src="https://flatmmo.com/images/npcs/${enemy.name}_stand1.png"></img></div>
			<div>
				<span>${data.vars[enemy.name + "_killed"] || 0} Killed</span>
			</div>
		</div>`
		enemiesDiv.insertAdjacentHTML("beforeend", enemyDiv)
	})
}

function updateEnemyModal(enemy = "chicken") {
	const enemyIndex = enemiesData.findIndex(enemyData => enemyData.name === enemy)
	const dropsDiv = document.getElementById("enemyDrops");
	document.getElementById("enemyModalImage").src = `https://flatmmo.com/images/npcs/${enemy}_stand1.png`;
	enemiesData[enemyIndex].drops.forEach(drop => {
		const dropDiv = `<tr>
			<td><img src="https://flatmmo.com/images/items/${drop.item}.png"></td>
			<td><span>${data.vars[enemy + "_" + drop.item] || 0}</span></td>
		</tr>`
		dropsDiv.insertAdjacentHTML("beforeend", dropDiv);
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
	updateEnemyModal()
	console.log("page loaded")
}

function changeProfile() {
	const searchPlayerInput = document.getElementById("searchPlayer");
	if(searchPlayerInput.value === "") return;
	window.open(`./?user=${searchPlayerInput.value}`)
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

document.getElementById("searchPlayer").addEventListener("keydown", function(e) {
	if(e.key === "Enter") {
		changeProfile()
	}
})
document.getElementById("searchPlayerBtn").addEventListener("click",()=>{
	changeProfile();
})

const titleCase = (s) => {
	return s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())
	.replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
}

window.onload = () => getData();