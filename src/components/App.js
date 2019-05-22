import React from 'react'
import PropTypes from 'prop-types'

import Hotel from './molecules/Hotel'

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

export default App
