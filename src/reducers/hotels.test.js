import * as actions from '../actions'
import hotelsReducer from './filters'

describe('hotelsReducer', () => {
  it('Should update the visible property on hotels when a filter is added', () => {
    const expectedState = {
      hotels: [
        {
          name: 'hotelone',
          starRating: 5,
          facilities: ['car park', 'pool'],
        },
        {
          name: 'hoteltwo',
          starRating: 3,
          facilities: ['car park', 'gym'],
        },
        {
          name: 'hotelthree',
          starRating: 3,
          facilities: [],
          visible: false,
        },
      ],
    }

    let initialState = {
      hotels: [
        {
          name: 'hotelone',
          starRating: 5,
          facilities: ['car park', 'pool'],
        },
        {
          name: 'hoteltwo',
          starRating: 3,
          facilities: ['car park', 'gym'],
        },
        {
          name: 'hotelthree',
          starRating: 3,
          facilities: [],
        },
      ],
    }

    initialState = hotelsReducer(
      initialState,
      actions.addFacilityFilterAction('car park')
    )
    expect(initialState).toEqual(expectedState)
  })
})
