import React from 'react'
import PropTypes from 'prop-types'

const StarRating = ({ rating, total, ...props }) => (
  <p {...props}>{`Rating: ${rating}`}</p>
)

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  total: PropTypes.number,
}

StarRating.defaultProps = {
  total: 5,
}

export default StarRating
