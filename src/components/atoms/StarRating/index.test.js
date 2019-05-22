import React from 'react'
import { shallow } from 'enzyme'
import StarRating from '.'

const wrap = (props = {}) => shallow(<StarRating {...props} />)

describe('StarRating component', () => {
  it('Displays rating when passed in', () => {
    const wrapper = wrap({ rating: 1 })
    expect(wrapper.contains('Rating: 1')).toBe(true)
  })
})
