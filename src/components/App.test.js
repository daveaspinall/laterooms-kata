import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const wrap = (props = {}) => shallow(<App {...props} />)

describe('App component', () => {
  it('Renders "Hello World" by default', () => {
    const wrapper = wrap()
    expect(wrapper.contains('Hello World')).toBe(true)
  })
})
