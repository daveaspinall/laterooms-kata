import styled from 'styled-components'
import gutter from '../../../styles/tools/gutter'
import media from '../../../styles/tools/media'

import FacilityFilter from '../../containers/FacilityFilter'

export const Form = styled.form`
  padding-top: ${gutter(2)};
  margin-bottom: ${gutter(4)};
  transition: ${props => props.theme.transitions.all};
`

export const Legend = styled.legend`
  margin-bottom: ${gutter(1.5)};
  font-weight: 500;
  line-height: 1.25;
  color: ${props => props.theme.palette.grayscale.delta};
`

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
`

export const FilterRow = styled.div`
  margin: 0;
  padding: ${gutter(1)} 0;
  width: 100%;
  max-width: 340px;
  background: ${props => props.theme.palette.base.white};
  border: 2px solid ${props => props.theme.palette.grayscale.bravo};
  border-radius: ${props => props.theme.borderRadius};
  transition: ${props => props.theme.transitions.all};

  ${media.above('small')`
    padding: ${gutter(1.5)} 0;
  `};
`

export const StyledFacilityFilter = styled(FacilityFilter)`
  display: inline-flex;
  align-items: center;
  width: calc(33% - ${gutter(2)});
  margin: 0 ${gutter(1)};
`
