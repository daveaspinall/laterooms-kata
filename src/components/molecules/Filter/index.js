import React from 'react'
import PropTypes from 'prop-types'

import { Label, StyledCheckbox } from './index.styled'

const Filter = ({ id, label, ...props }) => (
  <div {...props}>
    <StyledCheckbox id={id} {...props} />
    <Label htmlFor={id}>{label}</Label>
  </div>
)

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

Filter.defaultProps = {}

export default Filter
