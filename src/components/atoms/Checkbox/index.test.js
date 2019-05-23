import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from '.'

const wrap = (props = {}) => shallow(<Checkbox {...props} />)

describe('Checkbox component', () => {
  it('Displays name attribute when passed in', () => {
    const wrapper = wrap({ name: 'Foo' })
    expect(wrapper.props().name).toBe('Foo')
  })

  it('Displays value attribute when passed in', () => {
    const wrapper = wrap({ value: 'Bar' })
    expect(wrapper.props().value).toBe('Bar')
  })

  it('Displays checked attribute when set to true', () => {
    const wrapper = wrap({ checked: true })
    expect(wrapper.props().checked).toBe(true)
  })

  it("Doesn't display checked attribute when set to false", () => {
    const wrapper = wrap({ checked: false })
    expect(wrapper.props().checked).toBe(false)
  })
})
