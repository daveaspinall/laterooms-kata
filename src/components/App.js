import React from 'react'
import PropTypes from 'prop-types'

const Hotel = ({ name, starRating, facilities, ...props }) => (
  <div data-test="hotel-card" {...props}>
    <h2>{name}</h2>
    <p>{`Rating: ${starRating}`}</p>
    {facilities.length > 0 && (
      <ul>
        {facilities.map(facility => (
          <li key={facility}>{facility}</li>
        ))}
      </ul>
    )}
  </div>
)

const App = ({ hotels, ...props }) => (
  <div {...props}>
    {hotels.map(hotel => (
      <Hotel key={hotel.name} {...hotel} />
    ))}
  </div>
)

App.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
}
Hotel.displayName = 'Hotel'

export default App
