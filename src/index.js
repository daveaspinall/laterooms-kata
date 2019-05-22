import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

const hotels = [
  {
    name: 'hotelone',
    starRating: 5,
    facilities: ['car park', 'pool'],
  },
  {
    name: 'hoteltwo',
    starRating: 3,
    facilities: ['car park', 'gym'],
  },
  {
    name: 'hotelthree',
    starRating: 3,
    facilities: [],
  },
]

render(<App hotels={hotels} />, document.getElementById('root'))
