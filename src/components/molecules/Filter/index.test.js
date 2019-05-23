import React from 'react'
import { shallow } from 'enzyme'
import Filter from '.'

const wrap = (props = {}) => shallow(<Filter {...props} />)

describe('Filter component', () => {
  it('Displays id attribute when passed in', () => {
    const wrapper = wrap({ id: 'Foo' })
    const checkbox = wrapper.find('Checkbox').dive()
    expect(checkbox.prop('id')).toBe('Foo')
  })

  it('Displays label when passed in', () => {
    const wrapper = wrap({ label: 'Bar' })
    expect(wrapper.contains('Bar')).toBe(true)
  })
})
