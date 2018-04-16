// querySelectorAll
var objAll = {
  skillContainer : document.querySelectorAll('.options-list > p'),
  selectBall : document.querySelectorAll('.selectBall'),
}

// querySelector
var obj = {
  optionsSelect : document.querySelector('.options-select > p'),
  selectBall : document.querySelector('.selectBall'),
}


// SKILLS

var skill = function(name, damage) {
  this.name = name;
  this.damage = damage;
  //console.log(this);
}

var skillList = [
  scratch = new skill('Scratch', '10'),
  tackle = new skill('Tackle', '10'),
  thundershock = new skill('Thundershock', '20'),
  waterGun = new skill('Water Gun', '20'),
  ember = new skill('Ember', '20'),
  razorLeaf = new skill('Razor Leaf', '20'),
  hyperFang = new skill('Hyper Fang', '20'),
  rockTomb = new skill('Rock Tomb', '20')
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
  Pikachu = new monster('Pikachu', 'Electrik', skillList.scratch, skillList.hundershock),
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
  this.monster = [monsterOne, monsterTwo, monsterThree];
  //console.log(this);
}

var red = new trainer('Red', selectedMonster[0], selectedMonster[1]);

var blue = new trainer('Blue', monsterList.Carapuce, monsterList.Salameche, monsterList.Bulbizarre);


// METHODS =)

// FOR SELECT



function initBall() {
  for (var i = 0; i < objAll.selectBall.length; i++) {
     var getRandom = Math.floor(Math.random() * monsterList.length);
     var random = monsterList[getRandom];
     objAll.selectBall[i].textContent = random.name;
     monsterList.splice(getRandom, 1);
  }
}

function selectMonster(el) {
  selectedMonster.push(el.textContent);
}

// FOR FIGHT
function displaySkill(monster, objAll) {
 for (i = 0; i < objAll.skillContainer.length; i++) {
   for (a = 0; a < monster.skills.length; a++) {
     if (i === a) {
       objAll.skillContainer[i].textContent = monster.skills[a].name;
     }
   }
 }
}

// EVENT LISTENER

for (var i = 0; i < objAll.selectBall.length; i++) {
  objAll.selectBall[i].addEventListener('click', function() {

  });
}

initBall();

//console.log(objAll.skillList[0]);
