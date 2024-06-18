/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from './maths-utils'

describe('When calling the Add function', () => {
  it('should add two integers', () => {
    // Arrange: Setup variables here
    const dummyVar1 = 10;
    const dummyVar2  = 20;
    const dummyVar3 = 'Hello'
    const expectedResult = 30;
   
    // Act: Call function here
    const result = add(dummyVar1, dummyVar2)

    // Assert: Check results here
    expect(result).toEqual(expectedResult)
  })

  it('will add strings and numbers', () => {
    // Arrange: Setup variables here
    const dummyVar1 = 'Hello'
    const dummyVar2  = 20;
    const expectedResult = 'Hello20';
    // Act: Call function here
    const result = add(dummyVar1, dummyVar2)

    // Assert: Check results here
    expect(result).toEqual(expectedResult)
    console.log("result_add>>",result);
  })
})

describe('When calling the safeMultiply function', () => {

  it('should multiply two integers', () => {
    // Arrange: Setup variables here
    // Hint: happy case
    const dummyVar1 = 30
    const dummyVar2  = 20;
    const expectedResult = 600;
    // Act: Call function here
    const result = safeMultiply(dummyVar1, dummyVar2)

    // Assert: Check results here
    expect(result).toEqual(expectedResult)
    console.log("result_multuply>>",result);

  })

  it('will throw an error when parameter a is bad', () => {
    // Arrange: Setup variables here
    const dummyVar1 = ''
    const dummyVar2  = 20;
    const expectedResult = 'error';
    // Act: Call function here + Assert: Check results here
    // Hint: add a wrapper function
    const result = safeMultiply(dummyVar1, dummyVar2)
        
   // Assert
   // Hint: use "toThrow()"
   expect(result).toEqual(expectedResult)
   console.log("result_multuply>>",result);
  })
    
  it('will throw an error when parameter b is bad', () => {
    // Arrange: Setup variables here
    const dummyVar1 = 20
    const dummyVar2  = '';
    const expectedResult = 'error';
        
    // Act: Call function here
    const result = safeMultiply(dummyVar1, dummyVar2)
        
    // Assert: Check results here
    expect(result).toEqual(expectedResult)
    // You can either do this with a wrapper function and .toThrow, or you can try using a try/catch block
  })
})
