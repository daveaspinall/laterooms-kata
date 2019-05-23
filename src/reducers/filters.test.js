import * as actions from '../actions'
import filtersReducer from './filters'
import initialState from './initialState'

describe('filtersReducer', () => {
  it('Should set a facility filter on the state', () => {
    const expectedState = {
      facilities: ['car park'],
    }

    const updatedState = filtersReducer(
      initialState.filters,
      actions.addFacilityFilter('car park')
    )

    expect(updatedState).toEqual(expectedState)
  })

  it("Should remove a facility filter if it's already set on the state", () => {
    const expectedState = {
      facilities: ['car park'],
    }

    const mockState = {
      facilities: ['car park', 'gym'],
    }

    const updatedState = filtersReducer(
      mockState,
      actions.removeFacilityFilter('gym')
    )

    expect(updatedState).toEqual(expectedState)
  })
})
