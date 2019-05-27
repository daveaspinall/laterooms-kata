import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import theme from '../../../styles/settings/theme'
import Hotel from '.'

const wrap = (props = {}) =>
  mount(
    <ThemeProvider theme={theme}>
      <Hotel {...props} />
    </ThemeProvider>
  )

const mockHotel = {
  name: 'hoteltwo',
  starRating: 4,
  facilities: ['car park', 'gym'],
}

describe('Hotel component', () => {
  it('Displays name when passed in', () => {
    const wrapper = wrap({ ...mockHotel })
    expect(wrapper.contains('hotel two')).toBe(true)
  })

  it('Displays facilities when passed in', () => {
    const wrapper = wrap({ ...mockHotel })
    const facilities = wrapper.find('Facilities')
    expect(facilities.length).toBe(1)
  })
})
