import React from 'react'
import PropTypes from 'prop-types'

import {
  Form,
  Legend,
  Fieldset,
  FilterRow,
  StyledFacilityFilter,
} from './index.styled'

const FilterForm = ({ legend, ...props }) => (
  <Form {...props}>
    <Fieldset>
      <Legend>{legend}</Legend>
      <FilterRow>
        <StyledFacilityFilter
          id="pool-filter"
          label="Pool"
          name="facilities"
          value="pool"
        />
        <StyledFacilityFilter
          id="car-park-filter"
          label="Car Park"
          name="facilities"
          value="car park"
        />
        <StyledFacilityFilter
          id="gym-filter"
          label="Gym"
          name="facilities"
          value="gym"
        />
      </FilterRow>
    </Fieldset>
  </Form>
)

FilterForm.propTypes = {
  legend: PropTypes.string,
}

FilterForm.defaultProps = {
  legend: 'Filter by Facilities',
}

export default FilterForm
