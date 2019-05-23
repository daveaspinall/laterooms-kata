import * as types from '../actions/actionTypes'
import initialState from './initialState'

const filters = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.ADD_FACILITY_FILTER:
      return {
        facilities: [...state.facilities, action.filter],
      }

    case types.REMOVE_FACILITY_FILTER:
      return {
        facilities: state.facilities.filter(filter => filter !== action.filter),
      }

    default:
      return state
  }
}

export default filters
