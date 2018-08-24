module.exports = Character;
const abilities = require('./abilities') ;
const {rollDie, flipCoin} = require('./util');


// constructor function
function Character(name) {
  this.name = name || 'Fool';
  this.getName = getName;
  this.setName = setName;

  this.alignment = 'good';
  this.getAlignment = getAlignment;
  this.setAlignment = setAlignment;

  this.armorClass = 10;
  this.getArmorClass = getArmorClass;

  this.hitPoints = 5;
  this.getHP = getHP;
  this.reduseHitPoints = reduseHitPoints;
  this.isDead = isDead;

  this.hit = hit;
  this.rollDie = rollDie;

  this.getModifier = getModifier;
  this.abilities = abilities;
};

// static method on Character
Character.create = function create(name) {
  return new Character(name);
};

function getName(){
  return this.name;
}

function setName(name){
  this.name = name;
}

function getAlignment(){
  return this.alignment;
}

function setAlignment(alignment){
  alignment = alignment.toLowerCase();
  const validAlignments = ['good','neutral','evil'];
  if (validAlignments.includes(alignment)) {
    this.alignment = alignment;
  }else {
    throw Error('invalid alignment')
  };
};

function getArmorClass(){
  return this.armorClass;
};

function getHP(){
  return this.hitPoints;
};

function reduseHitPoints(damage){
  this.hitPoints = this.hitPoints - damage
};

function isDead() {
  return (this.hitPoints <= 0)
};

function hit(opponent, roll, damage){
  if (isNaN(roll)) {
    roll = this.rollDie(20);
  }

  if (roll === 20) {
    damage = damage*2
  };
  let modifier = getModifier(this.abilities.str.score);
  damage = damage + modifier;
  if (opponent.getArmorClass() <= roll) {
    opponent.reduseHitPoints(damage);
    return true
  }else {
    return false
  }
};

function getModifier(score) {
  const points = (Math.floor(score/2))-5;
  return points;
}
