import { css } from 'styled-components'
import responsiveType from '../../../styles/tools/responsiveType'
import fontSmoothing from '../../../styles/tools/fontSmoothing'

const fontScale = {
  h1: [24, 34],
  h2: [22, 28],
  h3: [20, 24],
  h4: [18, 20],
  h5: [16, 16],
  h6: [14, 14],
}

const fontSize = ({ level }) =>
  responsiveType({
    minFontSize: fontScale[`h${level}`][0],
    maxFontSize: fontScale[`h${level}`][1],
  })

export const styles = css`
  ${fontSmoothing}
  margin-top: 0;
  ${fontSize}
  line-height: 1.5;
  font-weight: 700;
  color: ${props => props.theme.palette.base.alpha};
`
