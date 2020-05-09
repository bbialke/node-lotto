const random = require('random')
async function customDraw({
  guess, count, minValue, maxValue, bonus
}) {

  //Check if bonus number should be drawn
  let drawBonus = false;
  let bonusNumber;
  if(bonus){
    drawBonus = true;
  }
  if(!count){
    throw new Error ('Please specifiy the number of numbers to be drawn');
  }
  //Before even checking the guess, get the winning numbers
  let winningNumbers=[];
  let i = 0;
  while(i < count){
    winningNumbers.push(random.int(min = minValue, max = maxValue));
    i++;
  }
  //Get bonus number if requested
  if(drawBonus){
    bonusNumber = random.int(min = minValue, max = maxValue);
  }

  //Check if guess is a valid array
  if(!Array.isArray(guess)) {
    throw new Error ('customDraw expects guess to be an array');
  }
  if(guess.length == 0){
    throw new Error ('Guess must be an array with at least 1 value');
  }
  //Check if min/max values are specified
  if(!minValue || !maxValue){
    throw new Error ('Please specifiy a minimum/maximum value for the customDraw');
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
  //Check bonus number matches
  let bonusMatch=[];
  if(drawBonus){
    guess.forEach((value) => {
      if(value == bonusNumber){
        bonusMatch.push(value);
      }
    });
  }
  if(bonusMatch.length == 0){
    bonusMatch = 'none';
  }
  var output = {
    winningNumbers: winningNumbers,
    guess: guess,
    matches: matches
  }
  if(drawBonus){
    output.bonusNumber = bonusNumber;
    output.bonusMatch = bonusMatch;
  }
  return output;
}


module.exports = customDraw;
