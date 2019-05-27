import React from 'react'
import PropTypes from 'prop-types'

import FilterForm from '../../organisms/FilterForm'
import FilteredHotelGrid from '../../containers/FilteredHotelGrid'

import { Wrapper, StyledLogo } from './index.styled'

const HotelPage = ({ className, ...props }) => (
  <Wrapper {...props}>
    <StyledLogo />
    <FilterForm />
    <FilteredHotelGrid />
  </Wrapper>
)

HotelPage.propTypes = {
  className: PropTypes.string,
}

HotelPage.defaultProps = {}

export default HotelPage
