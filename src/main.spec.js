const Character = require('./main').Character ;
const chai = require('chai');
const expect = chai.expect;

describe('Character', function() {

    describe('creation', function() {
      it('should let us get a name', function() {
        const character = Character.create('Russ');
        expect(character.getName()).to.equal('Russ');
      });
      it('should let us set a name', function() {
        const character = Character.create('Russ');
        character.setName('Lisa');
        expect(character.getName()).to.equal('Lisa');
      });
      it('should use a defult name if none is given', function() {
        const character = Character.create();
        expect(character.getName()).to.equal('Fool');
      });
    });
    describe('alignment', function() {
      it('should let us get an alignment', function() {
        const character = Character.create('Russ');
        expect(character.getAlignment()).to.equal('good');
      });
      it('should let us set an alignment', function() {
        const character = Character.create('Russ');
        character.setAlignment('evil')
        expect(character.getAlignment()).to.equal('evil');
      });
      it('should NOT let us set an invalid alignment', function() {
        const character = Character.create('Russ');
        expect(function(){character.setAlignment('banana')}).to.throw();
        expect(character.getAlignment()).to.equal('good');
      });
    });
    describe('armor class and hit pts',function () {
      it('should have a default armor class', function () {
        const character = Character.create();
        expect(character.getArmorClass()).to.equal(10);
      });
      it('should have default hit points', function () {
        const character = Character.create();
        expect(character.getHP()).to.equal(5);
      });
    });
    describe('attack', function () {
      const character = Character.create();
      const opponent = Character.create();
      it('should be capable of determining hit', function () {
        const roll = 20;
        expect(character.hit(opponent, roll)).to.be.true;
      });
      it('should be capable of determining miss', function () {
        const roll = 1;
        expect(character.hit(opponent, roll)).to.be.false;
      })
    });
    describe('damage', function () {
      const character = Character.create();
      const opponent = Character.create();
      let roll;
      it('should be delt if hit', function () {
        roll = 17;
        const startingHP = opponent.getHP();
        character.hit(opponent, roll, 1);
        const damagedHP = opponent.getHP();
        expect(startingHP > damagedHP).to.be.true;
      });
      it('should be double on crit', function () {
        roll = 20;
        const startingHP = opponent.getHP();
        character.hit(opponent, roll, 1);
        const damagedHP = opponent.getHP();
        expect((startingHP - damagedHP) === 2).to.be.true;
      });
      it('should cause death when HP is 0 or fewer', function () {
        roll = 15;
        character.hit(opponent, roll, 5);
        expect(opponent.isDead()).to.be.true;
      });
    })
});
