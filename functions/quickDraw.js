const random = require('random')
function quickDraw(guess) {

  //Before even checking the guess, get the winning numbers
  let winningNumbers=[];
  let i = 0;
  while(i <= 6){
    winningNumbers.push(random.int(min = 1, max = 99));
    i++;
  }

  //Check if guess is a valid array
  if(!Array.isArray(guess)) {
    throw new Error ('Guess must be formatted as an array');
  }
  //Check length of guess
  if(guess.length != 6){
    throw new Error ('quickDraw expects an array of 6 numbers between 1 and 99');
  }
  console.log(`Guess was ${guess}. Winning numbers were ${winningNumbers}`);
}


module.exports = quickDraw;
