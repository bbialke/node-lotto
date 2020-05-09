const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const quickDraw = require('../functions/quickDraw');
const assert = require('assert');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('testing errors in parameters- quickDraw', () => {
  it('should be rejected with error because no guess was supplied', () => {
    return expect(quickDraw()).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because guess is not an array', () => {
    return expect(quickDraw('guess')).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because guess_length is not 6', () => {
    return expect(quickDraw([1,2,3,4,5])).to.be.rejectedWith(Error);
  });
});
describe('testing successful queries- quickDraw', () => {
  it('should return JSON array without error', async () => {
    const data = await quickDraw([1,2,3,4,5,6]);
    expect(data.winningNumbers.length).to.be.equals(6);
    expect(data.guess.length).to.be.equals(6);
  });
});
