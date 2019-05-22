import React from 'react'
import PropTypes from 'prop-types'

import StarRating from '../../atoms/StarRating'
import Facilities from '../../atoms/Facilities'

const Hotel = ({ name, starRating, facilities, ...props }) => (
  <div data-test="hotel-card" {...props}>
    <h2>{name}</h2>
    <StarRating rating={starRating} />
    {facilities.length > 0 && <Facilities facilities={facilities} />}
  </div>
)

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
}
Hotel.displayName = 'Hotel'

export default Hotel
