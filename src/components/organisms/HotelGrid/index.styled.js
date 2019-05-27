import styled from 'styled-components'
import gutter from '../../../styles/tools/gutter'
import media from '../../../styles/tools/media'

export const Grid = styled.div`
  display: grid;
  grid-gap: ${gutter(3)};

  ${media.above('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}
`
