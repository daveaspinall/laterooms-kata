import React from 'react'
import PropTypes from 'prop-types'

import FacilityFilter from '../../containers/FacilityFilter'

const FilterForm = ({ className, ...props }) => (
  <form {...props}>
    <FacilityFilter
      id="car-park-filter"
      label="Car Park"
      name="facilities"
      value="car park"
    />
    <FacilityFilter
      id="pool-filter"
      label="Pool"
      name="facilities"
      value="pool"
    />
    <FacilityFilter id="gym-filter" label="Gym" name="facilities" value="gym" />
  </form>
)

FilterForm.propTypes = {
  className: PropTypes.string,
}

FilterForm.defaultProps = {}

export default FilterForm
