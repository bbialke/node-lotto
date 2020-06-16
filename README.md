# node-lotto

node-lotto is a simple, lightweight, customizable NodeJs module for quickly implementing a random lottery system

## Features
- QuickDraw, for one-line access to the random number generator
- CustomDraw, allowing for many settings to be configured, including guess size, winning number count, and more
- Allows for a bonus number to be drawn in addition to the regular winning numbers

## Installation
To clone and run this repository you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```bash # Clone this repository
git clone https://github.com/bbialke/node-lotto.git
# Go into the repository
cd node-lotto
# Install dependencies
npm install
# Run the app
node .
```
## Usage
This module uses promise-based returns, so results can be accessed as follows:
```js
lottery.customDraw(
  {
    guess: [27,91,18,32,66,34],
    count: 60,
    minValue: 1,
    maxValue: 99,
    bonus: true
  }
).then(response => {
    ...
}).catch(error => {
    ...
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)