function toList(mystring) {
  const mylist = mystring.split(",");
  return mylist;
}
class Encounter {
  constructor(mylist) {
    this.id = mylist[0];
    this.enemy = mylist[1];
    this.description = mylist[2];
  }
  static createByString(mystring) {
    const mylist = mystring.split("\n");
    if (mylist.length !== 3) {
      throw new Error(
        "Invalid input string. It should contain exactly three values separated by a comma."
      );
    }
    return new Encounter(Number(mylist[0]), mylist[1], mylist[2]);
  }
}
class SpecificEncounter {
  constructor(encounter, chance) {
    this.encounter = encounter;
    this.chance = chance;
  }
}

function EE(encounter, chance) {
  return new SpecificEncounter(encounter, chance);
}

class Zone {
  constructor(mylist) {
    this.id = mylist[0];
    this.title = mylist[1];
    this.description = mylist[2];
    this.connections = mylist[3];
    this.possibleEncounters = mylist[4];
  }
  static createByString(mystring) {
    const mylist = mystring.split("\n");
    if (mylist.length !== 4) {
      throw new Error(
        "Invalid input string. It should contain exactly three values separated by a comma."
      );
    }
    return new Zone(Number(mylist[0]), mylist[1], mylist[2], toList(mylist[3]));
  }
  addEncounter(encounter, chance) {
    this.possibleEncounters.push(new SpecificEncounter(encounter, chance));
  }
  setEncounters(encounterList) {
    this.possibleEncounters = encounterList;
  }
}

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

const noEncounter = [new Encounter([0, "Nothing", "nothing happens"])];

const lootEncounter = [
  new Encounter([
    0,
    "Lotable Body",
    "A body with usable armour of some kind (related to the zone or back story).",
  ]),
  new Encounter([1, "Empty Chest", "A chest with nothing valuable inside."]),
  new Encounter([2, "Gold Chest", "A chest with gold or other gems."]),
  new Encounter([3, "Weapon Chest", "A chest with a weapon inside"]),
  new Encounter([
    4,
    "Weapon Altar",
    "An altar with a special weapon displayed.",
  ]),
  new Encounter([5, "Armour Crate", "A crate with a special armour inside."]),
  new Encounter([
    6,
    "Ship loot",
    "Loot that may improve the current ship, or give reparations to it.",
  ]),
  new Encounter([
    7,
    "Common pit with dressed people",
    "A common pit with the corpses dressed with their original attires.",
  ]),
  Encounter.createByString(
    `8
    cursed relic
    a cursed relic relative to the current zone of the current zone.`
  ),
];

const junkEncounter = [
  new Encounter([
    0,
    "rotten corpse (unlootable)",
    "A corpse with nothing useful on it.",
  ]),
  new Encounter([
    1,
    "Naked bodies Pit",
    "A common pit of bodies that are already looted or undressed for some reason.",
  ]),
  new Encounter([
    2,
    "Random Junk",
    "A random junk find, relative to the zone.",
  ]),
];

const animalEncounter = [
  new Encounter([
    0,
    "Flock of birds",
    "You stumble apun a flock of angry birds that attack you.",
  ]),
  new Encounter([
    1,
    "Wolf Pack",
    "You stumble upon a pack of wild wolves in the forest. They seem agitated and hungry.",
  ]),
  new Encounter([
    2,
    "Lion",
    "While exploring the savanna, you come across a solitary lion. It stares at you with a mix of curiosity and caution.",
  ]),
  new Encounter([
    3,
    "Lion Pack",
    "In the heart of the African plains, you find yourself in the territory of a pride of lions. They appear to be resting, but you need to pass through their territory.",
  ]),
  new Encounter([
    4,
    "Boar Pack",
    "As you venture deep into the dense forest, you encounter a group of wild boars. They seem protective of their young and are ready to defend them at any cost.",
  ]),
  new Encounter([
    5,
    "Bear",
    "Hiking in the remote wilderness, you spot a massive brown bear in the distance. It's foraging for food, unaware of your presence.",
  ]),
  new Encounter([
    6,
    "Tiger",
    "While exploring the dense jungles of Asia, you suddenly come face to face with a rare Bengal tiger. It watches you with intense curiosity.",
  ]),
  new Encounter([
    7,
    "Elephant Herd",
    "In the vast grasslands of Africa, you encounter a large herd of elephants. They are peacefully grazing, but you must navigate your way around them carefully to avoid disturbing them.",
  ]),
  new Encounter([
    8,
    "Crocodile",
    "Near a riverbank, you spot a massive crocodile basking in the sun. It doesn't seem to have noticed your presence, but you need to be cautious as you pass by.",
  ]),
  new Encounter([
    9,
    "Giant Squid",
    "While sailing the open ocean, your boat is suddenly surrounded by the tentacles of a massive giant squid. It's a rare and awe-inspiring sight, but also a potential danger.",
  ]),
  new Encounter([
    10,
    "Shark Attack",
    "While snorkeling in the deep blue sea, you find yourself in the vicinity of a hungry and aggressive shark. Your heart races as it circles you.",
  ]),
  new Encounter([
    11,
    "Eel pool",
    "A part of a sea, river or lake where there is a big concentration of eels, makeing it very dangerous and electric.",
  ]),
  new Encounter([
    12,
    "Piranhas",
    "A School of piranhas that attack the players.",
  ]),
  new Encounter([13, "Giant Spider", "A abnormally big spider."]),
  Encounter.createByString(
    `14
    Giant Frog
    A frog that is abnormally big, capable of using his tong to eat humans, for example.`
  ),
  Encounter.createByString(
    `15
    Jumping Larvea
    Larvaes on the trees or walls, that jump to attack the players, suking their blood.`
  ),
];

const noticeEncounters = [
  new Encounter([
    0,
    "Notice secret zone",
    "The player notice entrance to a secret zone",
  ]),
  new Encounter([
    1,
    "Notice secret trapdoor",
    "The players notice a secret trap door.",
  ]),
  new Encounter([2, "Notice secret door", "The players notice a secret door."]),
  new Encounter([
    3,
    "Notice two secrete zones",
    "The players notice two secrete possible locations.",
  ]),
  new Encounter([
    4,
    "Notice secret zone south",
    "The players notice a secrete location to south.",
  ]),
  new Encounter([
    5,
    "Notice secret zone north",
    "The players notice a secrete location to north.",
  ]),
  new Encounter([
    6,
    "Notice secret zone east",
    "The players notice a secrete location to east.",
  ]),
  new Encounter([
    7,
    "Notice secret zone west",
    "The players notice a secrete location to west.",
  ]),
  Encounter.createByString(
    `8
    Elevator right
    The players notice an elevator to the right.`
  ),
  Encounter.createByString(
    `9
    Elevator left
    The players notice an elevator to the left.`
  ),
  Encounter.createByString(
    `10
    Notice Under Dock
    The players notice there is something under the dock.`
  ),
];

const techEncounter = [
  new Encounter([
    0,
    "Automata",
    "An automata that answers questions, does riddles, thretens the players.",
  ]),
  new Encounter([1, "Mechanical Spider", "A mechanical spider."]),
  new Encounter([
    2,
    "crew of mechanical spiders",
    "A crew of mechanical spiders.",
  ]),
  new Encounter([
    3,
    "Giant Mechanical Spider",
    "A abnormaly big mechanical spider.",
  ]),
  new Encounter([
    5,
    "Grotesque Bionical Beast Asleep",
    "The bionical beast but it is asleep. It is a rotten flesh with tubes and wires going in and out of its body.",
  ]),
  new Encounter([
    6,
    "Grotesque Bionical Beast Dead",
    "The bionical beast is Dead. It is a rotten flesh with tubes and wires going in and out of its body.",
  ]),
  new Encounter([
    7,
    "Grotesque Bionical Beast Awake",
    "It is a rotten flesh with tubes and wires going in and out of its body.",
  ]),
  new Encounter([
    8,
    "Spherical Automatron",
    "An automatron with blades instead of hands and a rapid movement based on its spherical movement mechanism.",
  ]),
  new Encounter([
    9,
    "Automatron Centinel",
    "A automata the size of a giant, with a crossbow on one hand, and a hammer on the other, a terminator of humans.",
  ]),
  new Encounter([
    10,
    "Lesser grotesque bionic beast",
    "A small aggresive bionic beast.",
  ]),
  new Encounter([
    11,
    "Crazy Scientist",
    "A crazy scientist, some interesting information on it, holds a dagger and a proto-pistol.",
  ]),
  Encounter.createByString(
    `12
    Tribal Reconstructed Sentinel
    A automatron sentinel that has been reconstructed by tribal people.`
  ),
];

const beastEncounter = [
  new Encounter([
    0,
    "OwlBear",
    "An OwlBear capable of displacing rapidly using its wings.",
  ]),
  Encounter.createByString(
    `1
    Spider Wolf
    A spider with wolf teeth and spider reflexes, jumps and size of a wolf, horrid creature.`
  ),
  Encounter.createByString(
    `2
    Giant Ground Worm
    A Giant Ground Worm the size of a house, very difficult to kill. `
  ),
  Encounter.createByString(
    `3
    Aswang (shapeshifter)
    Encounter with a shapeshifting creature with sinister intentions.`
  ),
  Encounter.createByString(
    `4
    Phatom
    A spectral ghost of some king, previously human or similar.`
  ),
  Encounter.createByString(
    `5
    Tall Hairless Biped	
    Encounter with a tall, hairless humanoid with unknown motives.`
  ),
  Encounter.createByString(
    `6
    Tentacle Deformity
    An entity or creature with unnatural, tentacle-like appendages.`
  ),
  Encounter.createByString(
    `7
    Bake Kujira
    An encounter with a supernatural entity, often a ghostly whale.`
  ),
  Encounter.createByString(
    `8
    Sirens
    Sirens sing to confuse the enemy and drag them down to the sea, or grab them and pull them to drown.`
  ),
  Encounter.createByString(
    `9
    Sea Serpent beast
    A giant sea serpent that jumps out of water to eat enemies.`
  ),
];

const goodHumanEncounter = [
  new Encounter([
    0,
    "Survivor",
    "A survivor relative to the current zone, or closeby zones.",
  ]),
  new Encounter([
    1,
    "Wounded Warrior",
    "A warrior wounded by a fight relative to the current zone, or closeby zones.",
  ]),
  new Encounter([
    2,
    "town person",
    "A town person that lives relative to the current zone, or closeby zones.",
  ]),
  new Encounter([
    3,
    "town people",
    "A group of people that live relative to the current zone, or closeby zones.",
  ]),
  Encounter.createByString(
    `4
    translator
    a translator for the relative language of the current zone.`
  ),
];

const badHumanEncounter = [
  new Encounter([
    0,
    "Tribal warrior",
    "A tribal warrior that lives relative to the current zone, or closeby zones.",
  ]),
  new Encounter([
    1,
    "Tribal warriors",
    "tribal warriors crew that live relative to the current zone, or closeby zones.",
  ]),
  new Encounter([
    2,
    "Tribal Champion",
    "A tribal Champion (because of strength) that lives relative to the current zone, or closeby zones.",
  ]),
];

const trapEncounter = [
  new Encounter([
    0,
    "pit",
    "A hole in which if one falls, it is difficult to come out.",
  ]),
  new Encounter([
    1,
    "Spider Web",
    "A Giant Spider Web, that traps the players.",
  ]),
  new Encounter([
    2,
    "Electrocution trap",
    "A trap that electrocutes player upon activation (entering, level pulling, etc).",
  ]),
];

const plantEncounter = [
  Encounter.createByString(
    `0
    toxic Fungi
    a toxic fungi relative of the current zone.`
  ),
  Encounter.createByString(
    `1
    glowing mushrooms
    gloowing mushrooms with some cool properties on alchemy.`
  ),
  Encounter.createByString(
    `2
    Carnivorous Plant
    A plant that very unsuspectly grabs the players to eat them.`
  ),
];

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

const z1 = new Zone([
  1,
  "Dock",
  "A simple dock, connecting the shore and the sea.",
  [2, 3],
  [],
]);

const z2 = new Zone([
  2,
  "Under the Dock",
  "The players look under the dock to find something",
  [1],
  [],
]);

const z3 = Zone.createByString(
  `3
  Storage Room
  Storage for apparently boat equipment.
  1, 4, 5`
);

const z4 = Zone.createByString(
  `4
  Cabin one
  Cabin with an automata.
  1, 3, 5`
);
const z5 = Zone.createByString(
  `5
  Cabin two
  Spacious cabin with a mirror.
  4, 6`
);
const z6 = Zone.createByString(
  `6
  Cabin three
  Cabin in disarray, hints at a struggle.
  5, 7, 8, 9`
);
const z7 = Zone.createByString(
  `7
  Cabin Four
  Locked cabin with muffled sounds.
  5, 6, 8, 9`
);
const z8 = Zone.createByString(
  `8
  Structure
  Location of the last fight.
  -`
);
const z9 = Zone.createByString(
  `9
  Jungle fall
  Hidden waterfall in the dense jungle. With chance of falling.
  10, 11, 8`
);
const z10 = Zone.createByString(
  `10
  Jungle one
  Dense jungle with teeming wildlife.
  9, 11`
);
const z11 = Zone.createByString(
  `11
  Jungle two
  Mysterious jungle with ancient ruins.
  9, 10, 14`
);
const z12 = Zone.createByString(
  `12
  Jungle Inhabitants dungeon
  A prison you are taken is captured by the tribal people
  13`
);
const z13 = Zone.createByString(
  `13
  Jungle Inhabitants city
  A city with tribal people, very unlikely to beat, you must scape
  12, 14, 15`
);
const z14 = Zone.createByString(
  `14
  Jungle Inhabitants outskirts
  Filled with archer towers and maybe some guardian animals
  11, 13`
);
const z15 = Zone.createByString(
  `15
  Jungle Inhabitants King Room
  A room with the tribal king, guarded by his strongest champions; it is a divine place, so city people cannot enter.
  13`
);
const z16 = Zone.createByString(
  `16
  Grotesque Laboratory
  A grotesque lab with terrifying experiments on creatures.
  -`
);
const z17 = Zone.createByString(
  `17
  Underground Forest 1
  Larvae Swamp
  -`
);
const z18 = Zone.createByString(
  `18
  Underground Forest 2
  Eel river
  -`
);
const z19 = Zone.createByString(
  `19
  Underground Forest 3, 4, 5
  Dense Forest. Be wary, you could get lost.
  -`
);
const z20 = Zone.createByString(
  `20
  Underground Forest 8, 7, 6
  A giagantic lake, which end cannot be seen
  -`
);

///////////////////////////////////////////////////

z1.setEncounters([EE(noticeEncounters[10], 0.25)]);

///////////////////////////////////////////////////

TechIslandZones = [
  z1,
  z2,
  z3,
  z4,
  z5,
  z6,
  z7,
  z8,
  z9,
  z10,
  z11,
  z12,
  z13,
  z14,
  z15,
  z16,
  z17,
  z18,
  z19,
  z20,
];
