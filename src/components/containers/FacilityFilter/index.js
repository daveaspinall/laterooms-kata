import { connect } from 'react-redux'
import { addFacilityFilter, removeFacilityFilter } from '../../../actions'
import Filter from '../../molecules/Filter'

const mapStateToProps = (state, ownProps) => ({
  checked: state.filters.facilities.includes(ownProps.value),
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { checked } = stateProps
  const { dispatch } = dispatchProps
  const { value } = ownProps

  const toggle = checked ? removeFacilityFilter : addFacilityFilter

  return {
    ...ownProps,
    onChange: () => dispatch(toggle(value)),
  }
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Filter)
