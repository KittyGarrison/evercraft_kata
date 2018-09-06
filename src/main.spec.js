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
  describe('armor class',function () {
    it('should have a default armor class', function () {
      const character = Character.create();
      expect(character.getArmorClass()).to.equal(10);
    });
  });
  describe('hit points', function () {
    it('should have default a defult', function () {
      const character = Character.create();
      expect(character.getHP()).to.equal(5);
    });
    it('should be reduced if hit', function () {
      const character = Character.create();
      character.reduseHitPoints(3);
      const damagedHP = character.getHP();
      expect(character.getHP()).to.equal(2);
    });
  })
  describe('abilities', function () {
    const character = Character.create();
    const opponent = Character.create();
    it('should have modifiers given a score', function () {
      expect(character.getModifier(4)).to.equal(-3);
      expect(character.getModifier(11)).to.equal(0);
      expect(character.getModifier(20)).to.equal(5);
    }),
    it("should have a score that is a number", function () {
      expect(character.abilities.str.score).to.be.a('number')
    }),
    it('should add strength modifier to damage')

  })
});
