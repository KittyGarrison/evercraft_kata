module.exports = {rollDie, flipCoin};

function rollDie(sides) {
  // some loop can add up more than 1 die
  return Math.floor(Math.random()*sides+1);
}

function flipCoin() {
  // some loop can add up more than 1 die
  let side = Math.floor(Math.random()*2+1);
  if (side === 1) {
    return "heads";
  }
  return "tails";
}
