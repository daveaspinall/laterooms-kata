import * as types from './actionTypes'

export const addFacilityFilterAction = payload => {
  return { type: types.ADD_FACILITY_FILTER, payload }
}

export const removeFacilityFilterAction = payload => {
  return { type: types.REMOVE_FACILITY_FILTER, payload }
}
