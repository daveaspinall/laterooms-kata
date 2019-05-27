import React from 'react'
import PropTypes from 'prop-types'

import { List } from './index.styled'

const Facilities = ({ facilities, ...props }) => (
  <List {...props}>
    {`Facilities: `}
    {facilities.join(', ', facilities)}
  </List>
)

Facilities.propTypes = {
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Facilities
