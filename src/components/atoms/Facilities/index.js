import React from 'react'
import PropTypes from 'prop-types'

const Facilities = ({ facilities, ...props }) => (
  <ul {...props}>
    {facilities.map(facility => (
      <li key={facility}>{facility}</li>
    ))}
  </ul>
)

Facilities.propTypes = {
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Facilities
