import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const wrap = (props = {}) => shallow(<App {...props} />)

const mockHotels = [
  {
    name: 'hotelone',
    starRating: 2,
    facilities: ['car park', 'pool'],
  },
  {
    name: 'hoteltwo',
    starRating: 4,
    facilities: ['car park', 'gym'],
  },
  {
    name: 'hotelthree',
    starRating: 3,
    facilities: [],
  },
  {
    name: 'hotelfour',
    starRating: 5,
    facilities: ['car park'],
  },
  {
    name: 'hotelfive',
    starRating: 1,
    facilities: ['gym', 'pool'],
  },
]

describe('App component', () => {
  it('Displays hotels when passed in', () => {
    const wrapper = wrap({ hotels: mockHotels })
    expect(wrapper.find('Hotel')).toHaveLength(mockHotels.length)
  })
})
