// querySelectorAll
var ObjAll = {
  skillContainer : document.querySelectorAll('.options-list > p'),
  selectBall : document.querySelectorAll('.selectBall'),
}

// querySelector
var Obj = {
  optionsSelect : document.querySelector('.options-select > p'),
  selectScreen : document.querySelector('.selectScreen'),
  fightScreen : document.querySelector('.fightScreen')
}


// SKILLS

var skill = function(name, damage) {
  this.name = name;
  this.damage = damage;
  //console.log(this);
}

var skillList = [
  scratch = new skill('Scratch', 10),
  tackle = new skill('Tackle', 10),
  thundershock = new skill('Thundershock', 20),
  waterGun = new skill('Water Gun', 20),
  ember = new skill('Ember', 20),
  razorLeaf = new skill('Razor Leaf', 20),
  hyperFang = new skill('Hyper Fang', 20),
  rockTomb = new skill('Rock Tomb', 20)
]


// MONSTERS

var monster = function(name, type, life, skillOne, skillTwo) {
  this.name = name;
  this.level = 10;
  this.type = type;
  this.life = 100;
  this.skills = [skillOne, skillTwo];
  //console.log(this);
}

var monsterList = [
  Pikachu = new monster('Pikachu', 'Electrik', skillList.scratch, skillList.thundershock),
  Carapuce = new monster('Carapuce', 'Water', skillList.tackle, skillList.waterGun),
  Salameche = new monster('Salameche', 'Fire', skillList.scratch, skillList.ember),
  Bulbizarre = new monster('Bulbizarre', 'Plante', skillList.tackle, skillList.razorLeaf),
  Rattata = new monster('Rattata', 'Normal', skillList.scratch, skillList.hyperFang),
  Racaillou = new monster('Racaillou', 'Rock', skillList.tackle, skillList.rockTomb)
]

var selectedMonster = [];

// TRAINERS

var trainer = function(name, monsterOne, monsterTwo, monsterThree) {
  this.name = name;
  this.monsters = [monsterOne, monsterTwo, monsterThree];
  //console.log(this);
}

var blue = new trainer('Blue', monsterList.Carapuce, monsterList.Salameche, monsterList.Bulbizarre);

// TRAINER PLAYER

/*
class Player extends trainer {
  constructor() {

  }
}
*/


// METHODS =)

// FOR SELECT

var monsterMemory = [];

function initBall() {
  for (var i = 0; i < ObjAll.selectBall.length; i++) {
     var getRandom = Math.floor(Math.random() * monsterList.length);
     var random = monsterList[getRandom];
     monsterMemory.push(monsterList[getRandom]);
     monsterList.splice(getRandom, 1);
     ObjAll.selectBall[i].textContent = random.name;
  }
}

function selectMonster(el) {
  for (var i = 0; i < monsterList.length; i++) {
    if (monsterMemory[i].name == el.textContent) {
      red.monsters.push(monsterList[i]);
      console.log(red.monsters.length);
    }
  }

  if (red.monsters.length < 3) {
    initBall();
  } else {
    Obj.selectScreen.classList.add('close');
    Obj.fightScreen.classList.remove('close');
    console.log(red.monsters);
  }
}

// FOR FIGHT
function displaySkill(monster, ObjAll) {
 for (i = 0; i < ObjAll.skillContainer.length; i++) {
   for (a = 0; a < monster.skills.length; a++) {
     if (i === a) {
       ObjAll.skillContainer[i].textContent = monster.skills[a].name;
     }
   }
 }
}

function initFight() {

}

// EVENT LISTENER

for (var i = 0; i < ObjAll.selectBall.length; i++) {
  ObjAll.selectBall[i].addEventListener('click', function() {
    selectMonster(this);
  });
}

initBall();

//console.log(ObjAll.skillList[0]);
