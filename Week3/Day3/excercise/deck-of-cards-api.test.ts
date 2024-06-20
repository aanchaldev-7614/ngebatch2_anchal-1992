import axios from 'axios'

jest.mock('axios')

import {
  shuffleDeck,
  drawCards,
  remainingCards,
} from './deck-of-cards-api'



// We need to tell our unit tests that 'axios.get' has been mocked
// This tells typescript that we have extra mocking functions available on the mock
const mockedGet = axios.get as jest.Mock

describe('when using the deck of cards API', () => {
  describe('when using shuffleDeck', () => {
    test('it will return a new deck ID', async () => {
      // Arrange
      const myServer = 'www.deckofcardsapi.com/api/'
      // See https://deckofcardsapi.com/#shuffle "Shuffle the Cards" section
      const dummyApiResponse = {
        success: true,
        deck_id: '3p40paa87x90',
        shuffled: true,
        remaining: 52,
      }
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      }
      mockedGet.mockResolvedValue(dummyAxiosResponse)

      // Act + Assert
      expect(await shuffleDeck(myServer)).toEqual('3p40paa87x90')

      // This could be in a separate test
      expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/new/shuffle/?deck_count=1`
      )
    })
  })

  describe('when using drawCards', () => {
    test('it will draw cards', async () => {
      // todo write a test for "drawCards"
      // See https://deckofcardsapi.com/#draw-card "Draw a Card" section
        // Arrange
        const myServer = 'www.deckofcardsapi.com/api/'
        // See https://deckofcardsapi.com/#shuffle "Shuffle the Cards" section
        const dummyApiResponse = {
          success: true,
          deck_id: 'kxozasf3edqu',
          cards: [
            {
                "code": "6H", 
                "image": "https://deckofcardsapi.com/static/img/6H.png", 
                "images": {
                              "svg": "https://deckofcardsapi.com/static/img/6H.svg", 
                              "png": "https://deckofcardsapi.com/static/img/6H.png"
                          }, 
                "value": "6", 
                "suit": "HEARTS"
            }, 
            {
                "code": "5S", 
                "image": "https://deckofcardsapi.com/static/img/5S.png", 
                "images": {
                              "svg": "https://deckofcardsapi.com/static/img/5S.svg", 
                              "png": "https://deckofcardsapi.com/static/img/5S.png"
                          }, 
                "value": "5", 
                "suit": "SPADES"
            }
        ], 
          remaining: 52,
        }
        const dummyAxiosResponse = {
          data: dummyApiResponse,
        }
        mockedGet.mockResolvedValue(dummyAxiosResponse)
  
        // Act + Assert
        expect(await drawCards(myServer,'kxozasf3edqu',2)).toEqual(dummyApiResponse.cards)
  
        // This could be in a separate test
        expect(mockedGet.mock.calls[0][0]).toEqual(
          `${myServer}deck/kxozasf3edqu/draw/?count=2`
        )
    })
  })

  describe('when using remainingCards', () => {
    test('todo', async () => {
      // todo write a test for "remainingCards"
      // See https://deckofcardsapi.com/#reshuffle "Reshuffle the Cards" section
         // Arrange
         const myServer = 'www.deckofcardsapi.com/api/'
         // See https://deckofcardsapi.com/#shuffle "Shuffle the Cards" section
         const dummyApiResponse = {
           success: true,
           deck_id: '3p40paa87x90',
           shuffled: true,
           remaining: 52,
         }
         const dummyAxiosResponse = {
           data: dummyApiResponse,
         }
         mockedGet.mockResolvedValue(dummyAxiosResponse)
   
         // Act + Assert
         expect(await shuffleDeck(myServer)).toEqual('3p40paa87x90')
   
         // This could be in a separate test
         expect(mockedGet.mock.calls[0][0]).toEqual(
           `${myServer}deck/new/shuffle/?deck_count=1`
         )
       })
     })
   
     describe('when using drawCards', () => {
       test('it will give remaining cards', async () => {
         // todo write a test for "drawCards"
         // See https://deckofcardsapi.com/#draw-card "Draw a Card" section
           // Arrange
           const myServer = 'www.deckofcardsapi.com/api/'
           // See https://deckofcardsapi.com/#shuffle "Shuffle the Cards" section
           const dummyApiResponse = {
             success: true,
             deck_id: 'kxozasf3edqu',
             cards: [], 
             remaining: 52,
           }
           const dummyAxiosResponse = {
             data: dummyApiResponse,
           }
           mockedGet.mockResolvedValue(dummyAxiosResponse)
     
           // Act + Assert
           expect(await remainingCards(myServer,'kxozasf3edqu')).toEqual(dummyApiResponse.remaining)
     
           // This could be in a separate test
           expect(mockedGet.mock.calls[0][0]).toEqual(
             `${myServer}deck/kxozasf3edqu/shuffle/?remaining=true`
           )
    })
  })
})
