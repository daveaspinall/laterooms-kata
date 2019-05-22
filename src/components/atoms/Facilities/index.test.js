import React from 'react'
import { shallow } from 'enzyme'
import Facilities from '.'

const wrap = (props = {}) => shallow(<Facilities {...props} />)

const mockFacilities = ['foo', 'bar']

describe('Facilities component', () => {
  it('Displays facilities when passed in', () => {
    const wrapper = wrap({ facilities: mockFacilities })

    expect(wrapper.find('li')).toHaveLength(mockFacilities.length)
    expect(wrapper.contains('foo')).toBe(true)
  })
})
