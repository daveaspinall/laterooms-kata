import React from 'react'
import { mount } from 'enzyme'
import StarRating from '.'

const wrap = (props = {}) => mount(<StarRating {...props} />)

describe('StarRating component', () => {
  it('Displays rating when passed in', () => {
    const wrapper = wrap({ rating: 1, total: 5 })
    expect(wrapper.find('FullStar').length).toBe(1)
    expect(wrapper.find('EmptyStar').length).toBe(4)
  })
})
