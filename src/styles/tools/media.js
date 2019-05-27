import { css } from 'styled-components'

const sizes = {
  xxsmall: 375,
  xsmall: 480,
  small: 660,
  medium: 768,
  large: 960,
  xlarge: 1024,
  xxlarge: 1280,
  xxxlarge: 1800,
}

const getSizeFromBreakpoint = (breakpointValue, breakpoints = {}) => {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue]
  }
  if (parseInt(breakpointValue, 10)) {
    return breakpointValue
  }
  console.error('No valid breakpoint or size specified for media.')
  return '0'
}

/**
 * Media query generator
 * @param {Object} breakpoints - Map labels to breakpoint sizes
 * @return {Object} - Media generators for each breakpoint
 */
const generateMedia = (breakpoints = sizes) => {
  const below = breakpoint => (...args) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints) -
        1}px) {
      ${css(...args)}
    }
  `

  const above = breakpoint => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}px) {
      ${css(...args)}
    }
  `

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint,
        breakpoints
      )}px) and (max-width: ${getSizeFromBreakpoint(
        secondBreakpoint,
        breakpoints
      ) - 1}px) {
      ${css(...args)}
    }
  `

  return Object.assign({
    below,
    above,
    between,
  })
}

/**
 * Media object with default breakpoints
 * @return {object} - Media generators for each size
 */
export default generateMedia()
