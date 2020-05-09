const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const customDraw = require('../functions/customDraw');
const assert = require('assert');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('testing errors in parameters- customDraw', () => {
  it('should be rejected with error because no guess was supplied', () => {
    return expect(customDraw(
      {
        guess: [],
        count: 10
      }
    )).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because guess is not an array', () => {
    return expect(customDraw(
      {
        guess: 'guess',
        count: 10
      }
    )).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because count was not specified', () => {
    return expect(customDraw(
      {
        guess: 'guess'
      }
    )).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because minValue is not defined', () => {
    return expect(customDraw(
      {
        guess: 'guess',
        count: 10
      }
    )).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because maxValue is not defined', () => {
    return expect(customDraw(
      {
        guess: 'guess',
        count: 10,
        minValue: 1
      }
    )).to.be.rejectedWith(Error);
  });
  it('should be rejected with error because bonus is not a boolean', () => {
    return expect(customDraw(
      {
        guess: 'guess',
        count: 10,
        minValue: 1,
        bonus: 'sure'
      }
    )).to.be.rejectedWith(Error);
  });
});
describe('testing successful queries- customDraw', () => {
  it('should return JSON array without error', async () => {
    const data = await customDraw(
      {
        guess: [1,2,3,4,5,6],
        count: 6,
        minValue: 1,
        maxValue: 10,
        bonus: false
      }
    );
    expect(data.winningNumbers.length).to.be.equals(6);
    expect(data.guess.length).to.be.equals(6);
  });
  it('should return bonusValue', async () => {
    const data = await customDraw(
      {
        guess: [1,2,3,4,5,6],
        count: 6,
        minValue: 1,
        maxValue: 10,
        bonus: true
      }
    );
    expect(data.winningNumbers.length).to.be.equals(6);
    expect(data.guess.length).to.be.equals(6);
    expect(data.bonusNumber).to.not.be.undefined;
  });
});
