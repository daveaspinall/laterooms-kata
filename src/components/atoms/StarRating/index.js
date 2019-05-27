import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Star = styled.svg`
  margin-right: 4px;
  width: 16px;
`

const EmptyStar = () => (
  <Star
    width="20"
    height="18.7"
    viewBox="0 0 20 18.7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.69 8.12a1 1 0 0 0-.55-1.71L14 5.68a1 1 0 0 1-.75-.54L10.93.54a1.07 1.07 0 0 0-1.86 0l-2.31 4.6a1 1 0 0 1-.76.54l-5.14.73a.94.94 0 0 0-.58.3 1 1 0 0 0 0 1.41L4 11.64a1 1 0 0 1 .3.9l-.88 5a1 1 0 0 0 .1.63 1 1 0 0 0 1.34.43l4.65-2.38a1.06 1.06 0 0 1 1 0l4.65 2.38a1 1 0 0 0 1.34-.43 1 1 0 0 0 .1-.63l-.88-5a1 1 0 0 1 .3-.9z"
      fill="#f0f0f1"
      fillrule="evenodd"
    />
  </Star>
)

const FullStar = () => (
  <Star
    width="20"
    height="18.7"
    viewBox="0 0 20 18.7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.69 8.12a1 1 0 0 0-.55-1.71L14 5.68a1 1 0 0 1-.75-.54L10.93.54a1.07 1.07 0 0 0-1.86 0l-2.31 4.6a1 1 0 0 1-.76.54l-5.14.73a.94.94 0 0 0-.58.3 1 1 0 0 0 0 1.41L4 11.64a1 1 0 0 1 .3.9l-.88 5a1 1 0 0 0 .1.63 1 1 0 0 0 1.34.43l4.65-2.38a1.06 1.06 0 0 1 1 0l4.65 2.38a1 1 0 0 0 1.34-.43 1 1 0 0 0 .1-.63l-.88-5a1 1 0 0 1 .3-.9z"
      fill="#ffd47c"
      fillrule="evenodd"
    />
  </Star>
)

const StarRating = ({ rating, total, ...props }) => {
  const fullStars = rating
  const emptyStars = total - rating

  const fullStarsArray = Array.from(Array(fullStars).keys())
  const emptyStarsArray = Array.from(Array(emptyStars).keys())

  return (
    <div {...props}>
      {fullStarsArray.map(i => (
        <FullStar className="rating__star" key={i} />
      ))}
      {emptyStarsArray.map(i => (
        <EmptyStar className="rating__star" key={i} />
      ))}
    </div>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  total: PropTypes.number,
}

StarRating.defaultProps = {
  total: 5,
}

export default StarRating
