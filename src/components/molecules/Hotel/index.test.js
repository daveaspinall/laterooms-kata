import React from 'react'
import { shallow } from 'enzyme'
import Hotel from '.'

const wrap = (props = {}) => shallow(<Hotel {...props} />)

const mockHotel = {
  name: 'hoteltwo',
  starRating: 4,
  facilities: ['car park', 'gym'],
}

describe('Hotel component', () => {
  it('Displays name when passed in', () => {
    const wrapper = wrap({ ...mockHotel })
    expect(wrapper.contains('hoteltwo')).toBe(true)
  })

  it('Displays rating when passed in', () => {
    const wrapper = wrap({ ...mockHotel })
    const starRating = wrapper.find('StarRating').dive()
    expect(starRating.contains('Rating: 4')).toBe(true)
  })

  it('Displays facilities when passed in', () => {
    const wrapper = wrap({ ...mockHotel })
    const facilities = wrapper.find('Facilities').dive()
    expect(facilities.contains('car park')).toBe(true)
    expect(facilities.contains('gym')).toBe(true)
  })
})
