/*
Run this with
> npm install
> npm test zoo-animals
*/

import { addDolphinToPool, petThePenguins } from './zoo-animals'

describe('When adding a dolphin to the pool', () => {

  test('And speed is over 30 we get Speedy Alice', () => {
    // Arrange
    const speedInKph = 45;
    const expectedResult = 'Speedy Alice';
    // Act 
    const result = addDolphinToPool(speedInKph);
    // Assert
    // Hint: expect.objectContaining on name only
    expect(result.name).toStrictEqual(expectedResult)
  })

  test('And speed is under 30 we get Slow Bob', () => {
    // Arrange
    const speedInKph = 25;
    const expectedResult = 'Slow Bob';
    // Act 
    const result = addDolphinToPool(speedInKph);
    // Assert
    // Hint: expect.objectContaining on name only
    expect(result.name).toStrictEqual(expectedResult)
  })

  test('Speedy Alice is a fast mammal with two flippers', () => {
    // Arrange

    // Act 

    // Assert
    // Hint: toStrictEqual the whole object
  })

  test('Slow Bob is a slow mammal with two flippers', () => {
    // Arrange

    // Act 

    // Assert
    // Hint: toStrictEqual the whole object
  })
})

describe('When petting the penguins', () => {

  test('One penguin with one fish will be fed', () => {
    // Arrange
    const numberOfPenguins = 1;
    const numberOfFish = 1;
    const expectedResult = [{ name: 'A', hungry: false, flippers: 2, mammal: false }]
    // Act 
    const result = petThePenguins(numberOfPenguins,numberOfFish);
    console.log("output>>",result);
    // Assert
    // Hint: toStrictEqual the whole array
     expect(result).toEqual(expectedResult);
  })

  test('One penguin with no fish will be hungry', () => {
        // Arrange
        const numberOfPenguins = 1;
        const numberOfFish = 1;
        const expectedResult = [{ name: 'A', hungry: false, flippers: 2, mammal: false }]
        // Act 
        const result = petThePenguins(numberOfPenguins,numberOfFish);
        console.log("output>>",result);
        // Assert
        // Hint: toStrictEqual the whole array
         expect(result).toEqual(expectedResult);
  })

  describe('And there are not enough fish', () => {

    test('At least one penguin will be hungry', () => {
      // Arrange
      const numberOfPenguins = 1;
      const numberOfFish = 0;
      const expectedResult = [{ name: 'A', hungry: true, flippers: 2, mammal: false }]
      // Act 
      const result = petThePenguins(numberOfPenguins,numberOfFish);
      console.log("output>>",result);
      // Assert
      // Hint: toStrictEqual the whole array
       expect(result).toEqual(expectedResult);
    })
  })

})
