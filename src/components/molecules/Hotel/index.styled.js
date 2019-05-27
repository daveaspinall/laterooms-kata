import styled from 'styled-components'
import gutter from '../../../styles/tools/gutter'
import media from '../../../styles/tools/media'

import Heading from '../../atoms/Heading'
import StarRating from '../../atoms/StarRating'
import Facilities from '../../atoms/Facilities'

export const Card = styled.article`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  backface-visibility: hidden;
  transform: translateZ(0);
`

export const Link = styled.a`
  position: relative;
  display: block;
  height: 100%;
  box-sizing: border-box;
  color: ${props => props.theme.palette.grayscale.delta};
  border: 2px solid ${props => props.theme.palette.grayscale.alpha};
  background: ${props => props.theme.palette.base.white};
  border-radius: 6px;
  transition: ${props => props.theme.transitions.all};
  overflow: hidden;

  &:hover {
    color: inherit;
    cursor: pointer;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  }
`

export const Media = styled.div`
  position: relative;
  width: 100%;
  padding-top: calc(100% * 175 / 300);
  overflow: hidden;
  background: ${props => props.theme.palette.grayscale.bravo};
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Details = styled.div`
  padding: ${gutter(1.5)} ${gutter(1.5)} ${gutter(2)};
`

export const StyledHeading = styled(Heading)`
  && {
    display: block;
    margin-bottom: 6px;
    font-weight: 400;
    line-height: 1.4;
    text-transform: capitalize;
    transition: ${props => props.theme.transitions.all};
  }

  ${media.above('medium')`
    font-size: 24px;
  `}

  ${/* sc-selector */ Link}:hover & {
    color: ${props => props.theme.palette.base.alphaDark};
  }
`

export const StyledStarRating = styled(StarRating)`
  margin-bottom: ${gutter(2)};
`

export const StyledFacilities = styled(Facilities)`
  font-size: 14px;
`
