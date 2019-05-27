import React from 'react'
import PropTypes from 'prop-types'

import Hotel from '../../molecules/Hotel'
import { Grid } from './index.styled'

const HotelGrid = ({ hotels, dispatch, ...props }) => {
  if (hotels.length === 0) {
    return <p data-test="error-message">Ooops! No Hotels match those filters</p>
  }

  return (
    <Grid {...props}>
      {hotels.map(hotel => (
        <Hotel key={hotel.name} {...hotel} />
      ))}
    </Grid>
  )
}

HotelGrid.propTypes = {
  hotels: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
}

HotelGrid.defaultProps = {}

export default HotelGrid
