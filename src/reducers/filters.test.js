import * as actions from '../actions'
import filtersReducer from './filters'

describe('filtersReducer', () => {
  it('Should set a facility filter on the state', () => {
    const expectedState = {
      filters: {
        facilities: ['car park'],
      },
    }

    let initialState = {
      filters: {
        facilities: [],
      },
    }

    initialState = filtersReducer(
      initialState,
      actions.setFacilityFilter('car park')
    )
    expect(initialState).toEqual(expectedState)
  })
})
