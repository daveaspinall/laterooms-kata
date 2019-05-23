import React from 'react'
import PropTypes from 'prop-types'

import FacilityFilter from '../../containers/FacilityFilter'

const FilterForm = ({ className, ...props }) => (
  <form {...props}>
    <FacilityFilter label="Car Park" name="facilities" value="car park" />
    <FacilityFilter label="Pool" name="facilities" value="pool" />
  </form>
)

FilterForm.propTypes = {
  className: PropTypes.string,
}

FilterForm.defaultProps = {}

export default FilterForm
