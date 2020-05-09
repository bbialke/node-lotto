const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const customDraw = require('../functions/customDraw');
const assert = require('assert');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('testing errors in parameters- customDraw', () => {
  it('should be rejected with error because no guess was supplied', () => {
    return expect(customDraw([], 10)).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because guess is not an array', () => {
    return expect(customDraw('guess', 10)).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because count was not specified', () => {
    return expect(customDraw('guess')).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because minValue is not defined', () => {
    return expect(customDraw('guess', 10)).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because maxValue is not defined', () => {
    return expect(customDraw('guess', 10, 1)).to.be.rejectedWith(Error);
  });
});
describe('testing successful queries- customDraw', () => {
  it('should return JSON array without error', async () => {
    const data = await customDraw([1,2,3,4,5,6], 6, 1, 10, false);
    expect(data.winningNumbers.length).to.be.equals(6);
    expect(data.guess.length).to.be.equals(6);
  });
  it('should return bonusValue', async () => {
    const data = await customDraw([1,2,3,4,5,6], 6, 1, 10, true);
    expect(data.winningNumbers.length).to.be.equals(6);
    expect(data.guess.length).to.be.equals(6);
    expect(data.bonusNumber).to.not.be.undefined;
  });
});
