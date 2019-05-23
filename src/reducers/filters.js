import * as types from '../actions/actionTypes'
import initialState from './initialState'

const filters = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.SET_FACILITY_FILTER: {
      const filterAlreadySet = state.facilities.indexOf(action.filter) > -1

      if (filterAlreadySet) {
        return {
          facilities: state.facilities.filter(
            filter => filter !== action.filter
          ),
        }
      }

      return {
        facilities: [...state.facilities, action.filter],
      }
    }

    default:
      return state
  }
}

export default filters
