import styled from 'styled-components'
import gutter from '../../../styles/tools/gutter'

import Logo from '../../atoms/Logo'

export const StyledLogo = styled(Logo)`
  margin: ${gutter(4)} auto;
`

export const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 ${gutter(2.5)};
`
