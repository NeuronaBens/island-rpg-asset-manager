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
  static mapData(data) {
    const mappedData = [];
    const lines = data.split("\n");
    for (const line of lines) {
      const parts = line.split(" | ");
      if (parts.length === 3) {
        mappedData.push(new Encounter(parts));
      }
    }
    return mappedData;
  }
  getHTMLToShow() {
    const html = `
        <h3>${this.enemy}</h3>
        <p>${this.description}</p>
    `;
    return html;
  }
  getConsoleShow() {
    return this.id + " | " + this.enemy + " | " + this.description;
  }
  static createByString(mystring) {
    const mylist = mystring.split("\n");
    if (mylist.length !== 3) {
      throw new Error(
        "Invalid input string. It should contain exactly three values separated by a comma."
      );
    }
    const encounter = new Encounter(mylist);
    return encounter;
  }
}
class SpecificEncounter {
  constructor(encounter, chance) {
    this.encounter = encounter;
    this.chance = chance;
  }
  getHTMLToShow() {
    const html = `
      <div class="specific-encounter">
        <h3>${this.encounter.enemy} - <span>Chance: ${this.chance}%</span></h3>
        <p>${this.encounter.description}</p>
      </div>
    `;
    return html;
  }
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
    mylist[0] = Number(mylist[0]);
    mylist[3] = toList(mylist[3]);

    if (mylist.length !== 4) {
      throw new Error(
        "Invalid input string. It should contain exactly 4 values separated by a comma."
      );
    }
    mylist.push([]);
    return new Zone(mylist);
  }
  addEncounter(encounter, chance) {
    this.possibleEncounters.push(new SpecificEncounter(encounter, chance));
  }
  setEncounters(encounterList) {
    this.possibleEncounters = encounterList;
  }
  getHTMLToShow() {
    let line1 = "<h3>" + this.id + ". " + this.title + "</h3>\n";
    let line2 = "<p>" + this.description + "</p>\n";
    let line3 = "<p>" + this.connections + "<p>\n";
    let line4 = "";
    try {
      for (let i = 0; i < this.possibleEncounters.length; i++) {
        line4 += this.possibleEncounters[i].getHTMLToShow();
      }
    } catch {}
    return line1 + line2 + line3 + line4 + "<hr />";
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

const eprov = `
0-no | Nothing | nothing happens
0-loot | Lotable Body | A body with usable armour of some kind (related to the zone or back story).
1-loot | Empty Chest | A chest with nothing valuable inside.
2-loot | Gold Chest | A chest with gold or other gems.
3-loot | Weapon Chest | A chest with a weapon inside
4-loot | Weapon Altar | An altar with a special weapon displayed.
5-loot | Armour Crate | A crate with a special armour inside.
6-loot | Ship loot | Loot that may improve the current ship, or give reparations to it.
7-loot | Common pit with dressed people | A common pit with the corpses dressed with their original attires.
8-loot |     cursed relic |     a cursed relic relative to the current zone of the current zone.
0-junk | rotten corpse (unlootable) | A corpse with nothing useful on it.
1-junk | Naked bodies Pit | A common pit of bodies that are already looted or undressed for some reason.
2-junk | Random Junk | A random junk find, relative to the zone.
0-animals | Flock of birds | You stumble apun a flock of angry birds that attack you.
1-animals | Wolf Pack | You stumble upon a pack of wild wolves in the forest. They seem agitated and hungry.
2-animals | Lion | While exploring the savanna, you come across a solitary lion. It stares at you with a mix of curiosity and caution.
3-animals | Lion Pack | In the heart of the African plains, you find yourself in the territory of a pride of lions. They appear to be resting, but you need to pass through their territory.
4-animals | Boar Pack | As you venture deep into the dense forest, you encounter a group of wild boars. They seem protective of their young and are ready to defend them at any cost.
5-animals | Bear | Hiking in the remote wilderness, you spot a massive brown bear in the distance. It's foraging for food, unaware of your presence.
6-animals | Tiger | While exploring the dense jungles of Asia, you suddenly come face to face with a rare Bengal tiger. It watches you with intense curiosity.
7-animals | Elephant Herd | In the vast grasslands of Africa, you encounter a large herd of elephants. They are peacefully grazing, but you must navigate your way around them carefully to avoid disturbing them.
8-animals | Crocodile | Near a riverbank, you spot a massive crocodile basking in the sun. It doesn't seem to have noticed your presence, but you need to be cautious as you pass by.
9-animals | Giant Squid | While sailing the open ocean, your boat is suddenly surrounded by the tentacles of a massive giant squid. It's a rare and awe-inspiring sight, but also a potential danger.
10-animals | Shark Attack | While snorkeling in the deep blue sea, you find yourself in the vicinity of a hungry and aggressive shark. Your heart races as it circles you.
11-animals | Eel pool | A part of a sea, river or lake where there is a big concentration of eels, makeing it very dangerous and electric.
12-animals | Piranhas | A School of piranhas that attack the players.
13-animals | Giant Spider | A abnormally big spider.
14-animals |     Giant Frog |     A frog that is abnormally big, capable of using his tong to eat humans, for example.
15-animals |     Jumping Larvea |     Larvaes on the trees or walls, that jump to attack the players, suking their blood.
0-notice | Notice secret zone | The player notice entrance to a secret zone
1-notice | Notice secret trapdoor | The players notice a secret trap door.
2-notice | Notice secret door | The players notice a secret door.
3-notice | Notice two secrete zones | The players notice two secrete possible locations.
4-notice | Notice secret zone south | The players notice a secrete location to south.
5-notice | Notice secret zone north | The players notice a secrete location to north.
6-notice | Notice secret zone east | The players notice a secrete location to east.
7-notice | Notice secret zone west | The players notice a secrete location to west.
8-notice |     Elevator right |     The players notice an elevator to the right.
9-notice |     Elevator left |     The players notice an elevator to the left.
10-notice |     Notice Under Dock |     The players notice there is something under the dock.
0-techbeast | Automata | An automata that answers questions, does riddles, thretens the players.
1-techbeast | Mechanical Spider | A mechanical spider.
2-techbeast | crew of mechanical spiders | A crew of mechanical spiders.
3-techbeast | Giant Mechanical Spider | A abnormaly big mechanical spider.
4-techbeast | Grotesque Bionical Beast Asleep | The bionical beast but it is asleep. It is a rotten flesh with tubes and wires going in and out of its body.
5-techbeast | Grotesque Bionical Beast Dead | The bionical beast is Dead. It is a rotten flesh with tubes and wires going in and out of its body.
6-techbeast | Grotesque Bionical Beast Awake | It is a rotten flesh with tubes and wires going in and out of its body.
7-techbeast | Spherical Automatron | An automatron with blades instead of hands and a rapid movement based on its spherical movement mechanism.
8-techbeast | Automatron Centinel | A automata the size of a giant, with a crossbow on one hand, and a hammer on the other, a terminator of humans.
9-techbeast | Lesser grotesque bionic beast | A small aggresive bionic beast.
10-techbeast | Crazy Scientist | A crazy scientist, some interesting information on it, holds a dagger and a proto-pistol.
11-techbeast |     Tribal Reconstructed Sentinel |     A automatron sentinel that has been reconstructed by tribal people.
0-beast | OwlBear | An OwlBear capable of displacing rapidly using its wings.
1-beast |     Spider Wolf |     A spider with wolf teeth and spider reflexes, jumps and size of a wolf, horrid creature.
2-beast |     Giant Ground Worm |     A Giant Ground Worm the size of a house, very difficult to kill. 
3-beast |     Aswang (shapeshifter) |     Encounter with a shapeshifting creature with sinister intentions.
4-beast |     Phatom |     A spectral ghost of some king, previously human or similar.
5-beast |     Tall Hairless Biped	 |     Encounter with a tall, hairless humanoid with unknown motives.
6-beast |     Tentacle Deformity |     An entity or creature with unnatural, tentacle-like appendages.
7-beast |     Bake Kujira |     An encounter with a supernatural entity, often a ghostly whale.
8-beast |     Sirens |     Sirens sing to confuse the enemy and drag them down to the sea, or grab them and pull them to drown.
9-beast |     Sea Serpent beast |     A giant sea serpent that jumps out of water to eat enemies.
0-humanally | Survivor | A survivor relative to the current zone, or closeby zones.
1-humanally | Wounded Warrior | A warrior wounded by a fight relative to the current zone, or closeby zones.
2-humanally | town person | A town person that lives relative to the current zone, or closeby zones.
3-humanally | town people | A group of people that live relative to the current zone, or closeby zones.
4-humanally |     translator |     a translator for the relative language of the current zone.
0-humanenemy | Tribal warrior | A tribal warrior that lives relative to the current zone, or closeby zones.
1-humanenemy | Tribal warriors | tribal warriors crew that live relative to the current zone, or closeby zones.
2-humanenemy | Tribal Champion | A tribal Champion (because of strength) that lives relative to the current zone, or closeby zones.
0-trap | pit | A hole in which if one falls, it is difficult to come out.
1-trap | Spider Web | A Giant Spider Web, that traps the players.
2-trap | Electrocution trap | A trap that electrocutes player upon activation (entering, level pulling, etc).
0-plant |     toxic Fungi |     a toxic fungi relative of the current zone.
1-plant |     glowing mushrooms |     gloowing mushrooms with some cool properties on alchemy.
2-plant |     Carnivorous Plant |     A plant that very unsuspectly grabs the players to eat them.
`;

const encounters = Encounter.mapData(eprov);

function getById(id) {
  return encounters.find((encounter) => encounter.id === id);
}

function GSE(id, chance) {
  enc = getById(id);
  return new SpecificEncounter(enc, chance);
}
function showEncountersNicely() {
  const l = encounters.length;
  let t = "";
  for (let i = 0; i < l; i++) {
    t += encounters[i].getConsoleShow() + "\n";
  }
  console.log(t);
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

z1.setEncounters([
  GSE("0-no", 0.6),
  GSE("10-notice", 0.3),
  GSE("8-beast", 0.05),
  GSE("9-beast", 0.05),
]);

z2.setEncounters([
  GSE("0-no", 0.3),
  GSE("0-loot", 0.3),
  GSE("0-junk", 0.3),
  GSE("8-beast", 0.05),
  GSE("9-beast", 0.05),
]);

///////////////////////////////////////////////////

const TechIslandZones = [
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

///////////////////////////////////////////////////

showEncountersNicely();
let html = "";
TechIslandZones.forEach((zone) => {
  html += zone.getHTMLToShow();
});
document.getElementById("app").innerHTML = html;
