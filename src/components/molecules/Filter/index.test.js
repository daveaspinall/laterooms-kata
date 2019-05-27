import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import theme from '../../../styles/settings/theme'
import Filter from '.'

const wrap = (props = {}) =>
  mount(
    <ThemeProvider theme={theme}>
      <Filter {...props} />
    </ThemeProvider>
  )

describe('Filter component', () => {
  it('Displays id attribute when passed in', () => {
    const wrapper = wrap({ id: 'Foo' })
    const checkbox = wrapper.find('Checkbox')
    expect(checkbox.prop('id')).toBe('Foo')
  })

  it('Displays label when passed in', () => {
    const wrapper = wrap({ label: 'Bar' })
    expect(wrapper.contains('Bar')).toBe(true)
  })
})
