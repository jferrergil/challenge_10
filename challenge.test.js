import {
  myPush,
  myFilter,
  myFind,
  myFindInd,
  mySome,
  myEvery,
} from './challenge.js';

// function myPush(arr, cosa) {
//   const newArray = arr.slice();
//   newArray[arr.length] = cosa;
//   return newArray.length;
// }

describe('que pushee', () => {
  test('test push', () => {
    const a = [1, 2, 3, 4];
    const b = 6;
    const result = myPush(a, b);
    expect(result).toEqual([1, 2, 3, 4, 6]);
  });
  test('test filter', () => {
    const a = [1, 2, 3, 4, 5, 6];
    const b = (e) => e > 2;
    expect(myFilter(a, b)).toEqual([3, 4, 5, 6]);
  });
  test('test find', () => {
    const a = [1, 2, 4, 5, 6, 7, 8, 9];
    const b = (e) => e > 4;
    expect(myFind(a, b)).toEqual(5);
  });

  test('test find', () => {
    const a = [1, 2, 4, 5, 6, 7, 8, 9];
    const b = (e) => e > 4;
    expect(myFindInd(a, b)).toEqual(3);
  });

  test('test find', () => {
    const a = [1, 2, 4, 5, 6, 7, 8, 9];
    const b = (e) => e > 4;
    expect(mySome(a, b)).toEqual(true);
  });

  test('test find', () => {
    const a = [1, 2, 4, 5, 6, 7, 8, 9];
    const b = (e) => e > 4;
    expect(myEvery(a, b)).toEqual(false);
  });

  test('test find', () => {
    const a = [1, 2, 4, 5, 6, 7, 8, 9];
    const b;
    expect(myReduce(a, b)).toEqual(10);
  });
});
