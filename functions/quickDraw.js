const random = require('random')
async function quickDraw(guess) {

  //Before even checking the guess, get the winning numbers
  let winningNumbers=[];
  let i = 0;
  while(i <= 6){
    winningNumbers.push(random.int(min = 1, max = 15));
    i++;
  }

  //Check if guess is a valid array
  if(!Array.isArray(guess)) {
    throw new Error ('quickDraw expects guess to be an array');
  }
  //Check length of guess
  if(guess.length != 6){
    throw new Error ('quickDraw expects guess to be an array of 6 numbers between 1 and 99');
  }
  let matches=[];
  guess.forEach((value) => {
    if(winningNumbers.indexOf(value) !== -1){
      matches.push(value);
    }
  });
  if(matches.length == 0){
    matches = 'none';
  }
  var output = {
    winningNumbers: winningNumbers,
    guess: guess,
    matches: matches
  }
  return output;
}


module.exports = quickDraw;
