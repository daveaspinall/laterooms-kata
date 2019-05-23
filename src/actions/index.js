import * as types from './actionTypes'

export const setFacilityFilter = filter => {
  return { type: types.SET_FACILITY_FILTER, filter }
}
