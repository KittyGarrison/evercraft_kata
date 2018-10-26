// classes don't hoist
const {rollDie, flipCoin} = require('./util');

class Battle {
  static isCrit(roll){
    return roll === 20 ;
  }
  static hit(attacker, defender, roll){
    return defender.getArmorClass() <= roll
  }

}

module.exports = Battle;
