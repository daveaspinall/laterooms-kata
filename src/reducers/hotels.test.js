import * as actions from '../actions/hotelActions'
import hotelsReducer from './filters'

import mockState from './initialState'

describe('hotelsReducer', () => {
  it('Should update the visible hotels when a filter is added', () => {
    const expectedState = {
      ...mockState,
      hotels: {
        ...mockState.hotels.entities,
        visibleById: ['hotel1', 'hotel2'],
      },
    }

    let initialState = {
      ...mockState,
      hotels: {
        ...mockState.hotels.entities,
        visibleById: ['hotel1', 'hotel2', 'hotel3'],
      },
    }

    initialState = hotelsReducer(
      initialState,
      actions.updateVisibleHotelsAction()
    )
    expect(initialState).toEqual(expectedState)
  })
})
