const creatures = [
  {
    id: 1,
    name: "Sea Serpent",
    hp_range: "300-500",
    velocity: "Fast",
    basic_attack: "Bite (50-70 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Sea",
    is_boss: false,
    other_skills: "Water Spit (80-100 damage, ranged attack)",
  },
  {
    id: 2,
    name: "Siren Enchantress",
    hp_range: "200-300",
    velocity: "Medium",
    basic_attack: "Song of Luring (40-60 damage)",
    attack_range: "Ranged (sonic attack)",
    relative_difficulty: "Moderate",
    area: "Sea",
    is_boss: false,
    other_skills: "Charm (temporarily stuns the player)",
  },
  {
    id: 3,
    name: "Kraken Spawn",
    hp_range: "600-800",
    velocity: "Slow",
    basic_attack: "Tentacle Slam (80-100 damage)",
    attack_range: "Melee",
    relative_difficulty: "High",
    area: "Sea",
    is_boss: false,
    other_skills: "Ink Cloud (creates a temporary blindness effect)",
  },
  {
    id: 4,
    name: "Forest Nymph",
    hp_range: "150-250",
    velocity: "Fast",
    basic_attack: "Thorny Vine Whip (30-50 damage)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Lake",
    is_boss: false,
    other_skills: "Healing Touch (restores HP to nearby creatures)",
  },
  {
    id: 5,
    name: "Water Elemental",
    hp_range: "400-600",
    velocity: "Medium",
    basic_attack: "Aqua Burst (60-80 damage)",
    attack_range: "Ranged (water projectiles)",
    relative_difficulty: "Moderate",
    area: "Lake",
    is_boss: false,
    other_skills: "Water Shield (increases defense temporarily)",
  },
  {
    id: 6,
    name: "Giant Leech",
    hp_range: "100-150",
    velocity: "Slow",
    basic_attack: "Bloodsuck (20-40 damage, drains player's health)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Lake",
    is_boss: false,
    other_skills: "None",
  },
  {
    id: 7,
    name: "River Pirate Captain",
    hp_range: "500-700",
    velocity: "Medium",
    basic_attack: "Cutlass Strike (70-90 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "River",
    is_boss: false,
    other_skills: "Summon River Bandits (calls for reinforcements)",
  },
  {
    id: 8,
    name: "Waterlogged Specter",
    hp_range: "300-450",
    velocity: "Slow",
    basic_attack: "Drowning Grasp (40-60 damage, reduces player's mobility)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "River",
    is_boss: false,
    other_skills: "Haunting Wail (causes fear in the player)",
  },
  {
    id: 9,
    name: "River Guardian",
    hp_range: "800-1000",
    velocity: "Slow",
    basic_attack: "Crushing Rapids (90-110 damage)",
    attack_range: "Melee (area attack)",
    relative_difficulty: "High",
    area: "River",
    is_boss: false,
    other_skills: "Water Barrier (creates a protective shield)",
  },
  {
    id: 10,
    name: "Elven Ranger",
    hp_range: "250-350",
    velocity: "Medium",
    basic_attack: "Arrow Shot (40-60 damage)",
    attack_range: "Ranged (bows)",
    relative_difficulty: "Moderate",
    area: "Forest",
    is_boss: false,
    other_skills: "Stealth (temporary invisibility)",
  },
  {
    id: 11,
    name: "Treant Guardian",
    hp_range: "800-1000",
    velocity: "Slow",
    basic_attack: "Branch Slam (90-110 damage)",
    attack_range: "Melee (area attack)",
    relative_difficulty: "High",
    area: "Forest",
    is_boss: false,
    other_skills: "Root Entangle (immobilizes players)",
  },
  {
    id: 12,
    name: "Wolf Pack Alpha",
    hp_range: "200-300",
    velocity: "Fast",
    basic_attack: "Bite (30-50 damage)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Forest",
    is_boss: false,
    other_skills: "Call of the Pack (summons additional wolves)",
  },
  {
    id: 13,
    name: "Sand Viper",
    hp_range: "100-150",
    velocity: "Medium",
    basic_attack: "Poisonous Bite (20-40 damage, inflicts poison)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Desert",
    is_boss: false,
    other_skills: "Burrow (disappears underground briefly)",
  },
  {
    id: 14,
    name: "Fire Djinn",
    hp_range: "500-700",
    velocity: "Fast",
    basic_attack: "Fireball (70-90 damage)",
    attack_range: "Ranged (fire projectiles)",
    relative_difficulty: "Moderate",
    area: "Desert",
    is_boss: false,
    other_skills: "Flame Shield (resistant to fire attacks)",
  },
  {
    id: 15,
    name: "Desert Scorpion King",
    hp_range: "1000-1200",
    velocity: "Slow",
    basic_attack: "Stinger Strike (120-140 damage)",
    attack_range: "Melee",
    relative_difficulty: "High",
    area: "Desert",
    is_boss: true,
    other_skills: "Venom Nova (poisonous gas cloud)",
  },
  {
    id: 16,
    name: "Mountain Troll",
    hp_range: "600-800",
    velocity: "Medium",
    basic_attack: "Club Swing (80-100 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Mountains",
    is_boss: false,
    other_skills: "Rock Throw (projectile attack)",
  },
  {
    id: 17,
    name: "Harpy Matriarch",
    hp_range: "400-600",
    velocity: "Fast",
    basic_attack: "Talon Slash (60-80 damage)",
    attack_range: "Melee",
    relative_difficulty: "High",
    area: "Mountains",
    is_boss: false,
    other_skills: "Aerial Dive (swoops down with a powerful strike)",
  },
  {
    id: 18,
    name: "Stone Golem",
    hp_range: "1000-1200",
    velocity: "Slow",
    basic_attack: "Earthquake Slam (120-140 damage)",
    attack_range: "Melee (area attack)",
    relative_difficulty: "High",
    area: "Mountains",
    is_boss: false,
    other_skills: "Stone Skin (increased defense)",
  },
  {
    id: 19,
    name: "Bog Troll",
    hp_range: "400-600",
    velocity: "Medium",
    basic_attack: "Sludge Swipe (60-80 damage)",
    attack_range: "Melee",
    relative_difficulty: "High",
    area: "Swamp",
    is_boss: false,
    other_skills: "Toxic Spit (poisonous projectile)",
  },
  {
    id: 20,
    name: "Marsh Wraith",
    hp_range: "300-450",
    velocity: "Fast",
    basic_attack: "Haunting Grasp (40-60 damage)",
    attack_range: "Melee",
    relative_difficulty: "High",
    area: "Swamp",
    is_boss: false,
    other_skills: "Ethereal Phase (briefly becomes immune to damage)",
  },
  {
    id: 21,
    name: "Giant Mosquito Swarm",
    hp_range: "150-250",
    velocity: "Very Fast",
    basic_attack: "Proboscis Pierce (20-40 damage, drains player's health)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Swamp",
    is_boss: false,
    other_skills: "Bloodsuck (restores health)",
  },
  {
    id: 22,
    name: "Magma Elemental",
    hp_range: "800-1000",
    velocity: "Slow",
    basic_attack: "Magma Burst (90-110 damage)",
    attack_range: "Melee (area attack)",
    relative_difficulty: "High",
    area: "Volcano",
    is_boss: false,
    other_skills: "Lava Form (temporary invulnerability)",
  },
  {
    id: 23,
    name: "Fire Imp",
    hp_range: "250-350",
    velocity: "Very Fast",
    basic_attack: "Flame Strike (40-60 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Volcano",
    is_boss: false,
    other_skills: "Fireball Volley (rapid ranged fireballs)",
  },
  {
    id: 24,
    name: "Obsidian Drake",
    hp_range: "1000-1200",
    velocity: "Slow",
    basic_attack: "Obsidian Claw (120-140 damage)",
    attack_range: "Melee",
    relative_difficulty: "High",
    area: "Volcano",
    is_boss: false,
    other_skills: "Molten Breath (area of fiery breath)",
  },
  {
    id: 25,
    name: "Underdark Dweller",
    hp_range: "300-450",
    velocity: "Medium",
    basic_attack: "Shadow Strike (40-60 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Underdark",
    is_boss: false,
    other_skills: "Shadow Cloak (temporary invisibility)",
  },
  {
    id: 26,
    name: "Cave Lurker",
    hp_range: "600-800",
    velocity: "Slow",
    basic_attack: "Boulder Hurl (80-100 damage)",
    attack_range: "Ranged (projectile)",
    relative_difficulty: "High",
    area: "Underdark",
    is_boss: false,
    other_skills: "Earthen Barrier (creates protective walls)",
  },
  {
    id: 27,
    name: "Glowing Fungoid",
    hp_range: "200-300",
    velocity: "Very Slow",
    basic_attack: "Spore Release (30-50 damage, inflicts poison)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Underdark",
    is_boss: false,
    other_skills: "Bioluminescent Glow (illuminates the surroundings)",
  },
  {
    id: 28,
    name: "Street Thug",
    hp_range: "150-250",
    velocity: "Medium",
    basic_attack: "Brass Knuckles (20-40 damage)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "City",
    is_boss: false,
    other_skills: "Gang Ambush (calls for allies)",
  },
  {
    id: 29,
    name: "Corrupt Politician",
    hp_range: "300-450",
    velocity: "Slow",
    basic_attack: "Bribery (40-60 damage)",
    attack_range: "Ranged (money pouch throw)",
    relative_difficulty: "Moderate",
    area: "City",
    is_boss: false,
    other_skills: "Deception (disguises as an ally)",
  },
  {
    id: 30,
    name: "City Guard Captain",
    hp_range: "800-1000",
    velocity: "Medium",
    basic_attack: "Guardian's Strike (90-110 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "City",
    is_boss: false,
    other_skills: "Call for Reinforcements (summons city guards)",
  },
  {
    id: 31,
    name: "Tomb Guardian",
    hp_range: "400-600",
    velocity: "Medium",
    basic_attack: "Desecration Slam (60-80 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Ruins",
    is_boss: false,
    other_skills: "Summon Undead Minions (raises skeletons)",
  },
  {
    id: 32,
    name: "Ancient Specter",
    hp_range: "600-800",
    velocity: "Slow",
    basic_attack: "Haunting Gaze (80-100 damage)",
    attack_range: "Ranged (ethereal projectiles)",
    relative_difficulty: "High",
    area: "Ruins",
    is_boss: false,
    other_skills: "Phantom Phase (briefly becomes intangible)",
  },
  {
    id: 33,
    name: "Lost Archaeologist",
    hp_range: "200-300",
    velocity: "Fast",
    basic_attack: "Desperation Strike (30-50 damage)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Ruins",
    is_boss: false,
    other_skills: "Artifact Discovery (may unearth valuable items)",
  },
  {
    id: 34,
    name: "Yeti Brute",
    hp_range: "800-1000",
    velocity: "Medium",
    basic_attack: "Blizzard Swing (90-110 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Arctic Tundra",
    is_boss: false,
    other_skills: "Frost Aura (slows nearby players)",
  },
  {
    id: 35,
    name: "Arctic Fox Spirit",
    hp_range: "150-250",
    velocity: "Very Fast",
    basic_attack: "Icy Bite (20-40 damage, inflicts frostbite)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Arctic Tundra",
    is_boss: false,
    other_skills: "Arctic Dash (quick charge attack)",
  },
  {
    id: 36,
    name: "Ice Elemental",
    hp_range: "600-800",
    velocity: "Slow",
    basic_attack: "Frost Nova (80-100 damage, area attack)",
    attack_range: "Melee (area attack)",
    relative_difficulty: "High",
    area: "Arctic Tundra",
    is_boss: false,
    other_skills: "Glacial Armor (increased defense)",
  },
  {
    id: 37,
    name: "Poison Dart Frog",
    hp_range: "100-150",
    velocity: "Very Fast",
    basic_attack: "Toxic Dart (20-40 damage, inflicts poison)",
    attack_range: "Ranged (dart shot)",
    relative_difficulty: "Low",
    area: "Jungle",
    is_boss: false,
    other_skills: "Jumping Evasion (dodges attacks)",
  },
  {
    id: 38,
    name: "Wild Boar",
    hp_range: "250-350",
    velocity: "Fast",
    basic_attack: "Tusk Strike (40-60 damage)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Jungle",
    is_boss: false,
    other_skills: "Charge (rushes towards players)",
  },
  {
    id: 39,
    name: "Tribal Shaman",
    hp_range: "400-600",
    velocity: "Medium",
    basic_attack: "Spirit Hex (60-80 damage, inflicts debuffs)",
    attack_range: "Ranged (spirit magic)",
    relative_difficulty: "Moderate",
    area: "Jungle",
    is_boss: false,
    other_skills: "Summon Nature's Allies (calls animals for assistance)",
  },
  {
    id: 40,
    name: "Stampeding Bison",
    hp_range: "800-1000",
    velocity: "Very Fast",
    basic_attack: "Hoof Smash (90-110 damage)",
    attack_range: "Melee (area attack)",
    relative_difficulty: "High",
    area: "Plains",
    is_boss: false,
    other_skills: "Stampede (charges players)",
  },
  {
    id: 41,
    name: "Nomadic Hunter",
    hp_range: "300-450",
    velocity: "Medium",
    basic_attack: "Arrow Shot (40-60 damage)",
    attack_range: "Ranged (bows)",
    relative_difficulty: "Moderate",
    area: "Plains",
    is_boss: false,
    other_skills: "Tracking Expertise (follows players)",
  },
  {
    id: 42,
    name: "Giant Eagle",
    hp_range: "200-300",
    velocity: "Fast",
    basic_attack: "Talon Strike (30-50 damage)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Plains",
    is_boss: false,
    other_skills: "Aerial Dive (swoops down with a powerful strike)",
  },
  {
    id: 43,
    name: "Deep Sea Leviathan",
    hp_range: "1000-1200",
    velocity: "Medium",
    basic_attack: "Whirlpool Crush (120-140 damage)",
    attack_range: "Melee (area attack)",
    relative_difficulty: "High",
    area: "Underwater Caverns",
    is_boss: false,
    other_skills: "Abyssal Roar (deafens and disorients players)",
  },
  {
    id: 44,
    name: "Aquatic Archaeologist",
    hp_range: "300-450",
    velocity: "Slow",
    basic_attack: "Harpoon Strike (40-60 damage)",
    attack_range: "Ranged (harpoon gun)",
    relative_difficulty: "Moderate",
    area: "Underwater Caverns",
    is_boss: false,
    other_skills: "Treasure Hunter (may uncover valuable relics)",
  },
  {
    id: 45,
    name: "Glowing Anglerfish",
    hp_range: "150-250",
    velocity: "Fast",
    basic_attack: "Angler Bite (20-40 damage, blinds players)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Underwater Caverns",
    is_boss: false,
    other_skills: "Phosphorescent Light (illuminates surroundings)",
  },
  {
    id: 46,
    name: "Cloud Guardian",
    hp_range: "600-800",
    velocity: "Fast",
    basic_attack: "Storm Strike (80-100 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Skyrealm",
    is_boss: false,
    other_skills: "Lightning Charge (rapid movement and attack)",
  },
  {
    id: 47,
    name: "Harpy Sky Pirate",
    hp_range: "400-600",
    velocity: "Medium",
    basic_attack: "Screeching Blade (60-80 damage)",
    attack_range: "Melee",
    relative_difficulty: "High",
    area: "Skyrealm",
    is_boss: false,
    other_skills: "Aerial Raid (attacks from above)",
  },
  {
    id: 48,
    name: "Storm Elemental",
    hp_range: "800-1000",
    velocity: "Slow",
    basic_attack: "Thunderbolt Slam (90-110 damage)",
    attack_range: "Melee (area attack)",
    relative_difficulty: "High",
    area: "Skyrealm",
    is_boss: false,
    other_skills: "Storm Shield (resistant to lightning attacks)",
  },
  {
    id: 49,
    name: "Fey Sprite",
    hp_range: "100-150",
    velocity: "Very Fast",
    basic_attack: "Fey Sparkle (20-40 damage)",
    attack_range: "Ranged (magical sparkles)",
    relative_difficulty: "Low",
    area: "Feywild",
    is_boss: false,
    other_skills: "Enchantment (temporarily confuses players)",
  },
  {
    id: 50,
    name: "Unicorn Guardian",
    hp_range: "400-600",
    velocity: "Medium",
    basic_attack: "Horn Strike (60-80 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Feywild",
    is_boss: false,
    other_skills: "Healing Aura (restores health to nearby creatures)",
  },
  {
    id: 51,
    name: "Cheshire Cat",
    hp_range: "300-450",
    velocity: "Fast",
    basic_attack: "Grin Slash (40-60 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Feywild",
    is_boss: false,
    other_skills: "Disappear (temporary invisibility)",
  },
  {
    id: 52,
    name: "Shadow Wraith",
    hp_range: "200-300",
    velocity: "Fast",
    basic_attack: "Shadow Strike (30-50 damage)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Shadowfell",
    is_boss: false,
    other_skills: "Shadowstep (teleports short distances)",
  },
  {
    id: 53,
    name: "Dread Knight",
    hp_range: "800-1000",
    velocity: "Medium",
    basic_attack: "Dark Blade (90-110 damage)",
    attack_range: "Melee",
    relative_difficulty: "Moderate",
    area: "Shadowfell",
    is_boss: false,
    other_skills: "Unholy Aura (causes fear in nearby players)",
  },
  {
    id: 54,
    name: "Shade Assassin",
    hp_range: "400-600",
    velocity: "Fast",
    basic_attack: "Assassin's Dagger (60-80 damage)",
    attack_range: "Melee",
    relative_difficulty: "High",
    area: "Shadowfell",
    is_boss: false,
    other_skills: "Shadow Cloak (temporary invisibility)",
  },
  {
    id: 55,
    name: "Cyber Sentinel",
    hp_range: "600-800",
    velocity: "Medium",
    basic_attack: "Laser Beam (80-100 damage)",
    attack_range: "Ranged (laser)",
    relative_difficulty: "Moderate",
    area: "Technology",
    is_boss: false,
    other_skills: "Digital Shield (blocks incoming attacks)",
  },
  {
    id: 56,
    name: "Dwemer-Spider",
    hp_range: "20-40",
    velocity: "Fast",
    basic_attack: "Hit (5-10 damage)",
    attack_range: "Melee",
    relative_difficulty: "Low",
    area: "Technology",
    is_boss: false,
    other_skills: "Web Shooter (immobilizes players)",
  },
];

function showMonsters() {
  const myDiv = document.createElement("div");
  for (let i = 0; i < creatures.length; i++) {
    const creature = creatures[i];
    // Create a div element to hold information about the creature
    const creatureDiv = document.createElement("div");
    creatureDiv.classList.add("creature-card"); // You can style this class with CSS
    // Create paragraphs for each attribute and add them to the creatureDiv
    const nameParagraph = document.createElement("h3");
    nameParagraph.textContent = `${creature.id} .  ${creature.name}`;
    creatureDiv.appendChild(nameParagraph);
    const hpParagraph = document.createElement("p");
    hpParagraph.textContent = `HP Range: ${creature.hp_range}`;
    creatureDiv.appendChild(hpParagraph);
    const velocityParagraph = document.createElement("p");
    velocityParagraph.textContent = `Velocity: ${creature.velocity}`;
    creatureDiv.appendChild(velocityParagraph);
    const basicAttackParagraph = document.createElement("p");
    basicAttackParagraph.textContent = `Basic Attack: ${creature.basic_attack}`;
    creatureDiv.appendChild(basicAttackParagraph);
    const attackRangeParagraph = document.createElement("p");
    attackRangeParagraph.textContent = `Attack Range: ${creature.attack_range}`;
    creatureDiv.appendChild(attackRangeParagraph);
    const difficultyParagraph = document.createElement("p");
    difficultyParagraph.textContent = `Relative Difficulty: ${creature.relative_difficulty}`;
    creatureDiv.appendChild(difficultyParagraph);
    const areaParagraph = document.createElement("p");
    areaParagraph.textContent = `Area: ${creature.area}`;
    creatureDiv.appendChild(areaParagraph);
    const isBossParagraph = document.createElement("p");
    isBossParagraph.textContent = `Is Boss: ${creature.is_boss ? "Yes" : "No"}`;
    creatureDiv.appendChild(isBossParagraph);
    const otherSkillsParagraph = document.createElement("p");
    otherSkillsParagraph.textContent = `Other Skills: ${creature.other_skills}`;
    creatureDiv.appendChild(otherSkillsParagraph);
    // Append the creatureDiv to the main container
    myDiv.appendChild(creatureDiv);
  }
  // Append the main container to the document
  document.body.appendChild(myDiv);
}