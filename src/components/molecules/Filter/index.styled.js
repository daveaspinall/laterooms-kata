import styled from 'styled-components'
import hidden from '../../../styles/tools/hidden'
import gutter from '../../../styles/tools/gutter'
import media from '../../../styles/tools/media'

import Checkbox from '../../atoms/Checkbox'

export const StyledCheckbox = styled(Checkbox)`
  ${hidden}
`

export const Label = styled.label`
  padding: ${gutter(1)} 0;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.palette.grayscale.charlie};

  ${media.above('small')`
    font-size: 16px;
  `};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.grayscale.delta};
  }

  ${/* sc-selector */ StyledCheckbox}:checked + & {
    color: ${props => props.theme.palette.base.alpha};
  }
`
