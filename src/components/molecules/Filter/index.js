import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../../atoms/Checkbox'

const Filter = ({ id, label, ...props }) => (
  <label htmlFor={id}>
    <Checkbox id={id} {...props} />
    {label}
  </label>
)

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

Filter.defaultProps = {}

export default Filter
