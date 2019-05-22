import * as actions from '../actions/filterActions'
import filtersReducer from './filters'

describe('filtersReducer', () => {
  it('Should add a facility filter to the state', () => {
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
      actions.addFacilityFilterAction('car park')
    )
    expect(initialState).toEqual(expectedState)
  })
})
