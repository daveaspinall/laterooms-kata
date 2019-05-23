import * as types from './actionTypes'

export const addFacilityFilter = filter => ({
  type: types.ADD_FACILITY_FILTER,
  filter,
})

export const removeFacilityFilter = filter => ({
  type: types.REMOVE_FACILITY_FILTER,
  filter,
})
