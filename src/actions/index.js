import * as types from './actionTypes'

export const addFacilityFilterAction = filter => {
  return { type: types.ADD_FACILITY_FILTER, filter }
}

export const removeFacilityFilterAction = filter => {
  return { type: types.REMOVE_FACILITY_FILTER, filter }
}
