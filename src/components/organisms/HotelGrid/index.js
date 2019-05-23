import React from 'react'
import PropTypes from 'prop-types'

import Hotel from '../../molecules/Hotel'

const HotelGrid = ({ hotels, dispatch, ...props }) => (
  <div {...props}>
    {hotels.map(hotel => (
      <Hotel key={hotel.name} {...hotel} />
    ))}
  </div>
)

HotelGrid.propTypes = {
  hotels: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
}

HotelGrid.defaultProps = {}

export default HotelGrid
