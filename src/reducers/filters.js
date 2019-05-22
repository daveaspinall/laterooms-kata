const filters = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FACILITY_FILTER':
      return state
    case 'REMOVE_FACILITY_FILTER':
      return state
    default:
      return state
  }
}

export default filters
