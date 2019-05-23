import { connect } from 'react-redux'
import { setFacilityFilter } from '../../../actions'
import Filter from '../../molecules/Filter'

const mapStateToProps = (state, ownProps) => ({
  checked: state.filters.facilities.includes(ownProps.value),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setFacilityFilter(ownProps.value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
