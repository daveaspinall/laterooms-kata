import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ ...props }) => <input type="checkbox" {...props} />

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

Checkbox.defaultProps = {}

export default Checkbox
