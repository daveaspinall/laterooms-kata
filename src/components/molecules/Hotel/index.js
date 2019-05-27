import React from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  Link,
  Media,
  Image,
  Details,
  StyledHeading,
  StyledStarRating,
  StyledFacilities,
} from './index.styled'

const Hotel = ({ name, starRating, facilities, ...props }) => {
  const hotelName = `hotel ${name.split('hotel')[1]}`

  return (
    <Card data-test="hotel-card" {...props}>
      <Link to="/">
        <Media>
          <Image src="https://via.placeholder.com/600x350" />
        </Media>
        <Details>
          <StyledHeading level={2}>{hotelName}</StyledHeading>
          <StyledStarRating rating={starRating} />
          {facilities.length > 0 && (
            <StyledFacilities facilities={facilities} />
          )}
        </Details>
      </Link>
    </Card>
  )
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Hotel
