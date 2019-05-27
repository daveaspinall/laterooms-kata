import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles } from './index.styled'

const Heading = styled(({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles};
`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
}

Heading.defaultProps = {
  level: 1,
}

export default Heading
