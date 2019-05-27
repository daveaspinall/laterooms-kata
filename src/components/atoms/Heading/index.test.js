import React from 'react'
import { shallow } from 'enzyme'
import Heading from '.'

const wrap = (props = {}) => shallow(<Heading {...props} />)

describe('Heading component', () => {
  it('Displays heading with level 1 by default', () => {
    const wrapper = wrap()
    expect(wrapper.prop('level')).toBe(1)
  })

  it('Displays children when passed in', () => {
    const wrapper = wrap({ children: 'Foo' })
    expect(wrapper.contains('Foo')).toBe(true)
  })
})
