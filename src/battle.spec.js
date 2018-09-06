const Character = require('./main').Character ;
const Battle = require('./main').Battle ;
const chai = require('chai');
const expect = chai.expect;



describe('Battle', function () {
  describe('attack', function () {
    let attacker;
    let defender;
    beforeEach(function functionName() {
      attacker = Character.create();
      defender = Character.create();
    })
    it('should be capable of determining hit', function () {

    })

    it('should be capable of determining hit', function () {
      const roll = 20;
      expect(Battle.hit(attacker, defender, roll)).to.be.true;
    });


    it('should be capable of determining miss', function () {
      const roll = 1;
      expect(Battle.hit(attacker, defender, roll)).to.be.false;
    })
  });
  describe('damage', function () {
    let attacker;
    let defender;
    beforeEach(function functionName() {
      attacker = Character.create();
      defender = Character.create();
    })

    it('should be delt if hit', function () {
      const roll = 17;
      const startingHP = defender.getHP();
      attacker.hit(defender, roll, 1);
      const damagedHP = defender.getHP();
      expect(startingHP > damagedHP).to.be.true;
    });
    it('should be double on crit', function () {
      const roll = 20;
      const startingHP = defender.getHP();
      attacker.hit(defender, roll, 1);
      const damagedHP = defender.getHP();
      expect((startingHP - damagedHP) === 2).to.be.true;
    });
    it('should cause death when HP is 0 or fewer', function () {
      const roll = 15;
      attacker.hit(defender, roll, 5);
      expect(defender.isDead()).to.be.true;
    });
    it('will be a random roll if none is given')
  });

})
