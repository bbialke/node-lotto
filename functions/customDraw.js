const random = require('random')
async function customDraw(guess, count) {

  //Before even checking the guess, get the winning numbers
  let winningNumbers=[];
  let i = 0;
  while(i < count){
    winningNumbers.push(random.int(min = 1, max = 15));
    i++;
  }

  //Check if guess is a valid array
  if(!Array.isArray(guess)) {
    throw new Error ('customDraw expects guess to be an array');
  }
  //Check length of guess
  if(guess.length != count){
    throw new Error ('customDraw expects guess to have the same length as the winning number count');
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


module.exports = customDraw;
