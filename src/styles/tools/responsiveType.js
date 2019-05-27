const unit = str => (Number.isNaN(str) ? str.substr(str.length - 2) : 'px')

export default ({
  minFontSize,
  maxFontSize,
  minScreenSize = 420,
  maxScreenSize = 1280,
}) => {
  const u1 = unit(minFontSize)
  const u2 = unit(maxFontSize)
  const u3 = unit(minScreenSize)
  const u4 = unit(maxScreenSize)

  if (u1 === u2 && u1 === u3 && u1 === u4) {
    const units = u1
    const styles = {
      fontSize: `${minFontSize}${units}`,
    }

    if (minScreenSize !== maxScreenSize) {
      styles[`@media only screen and (min-width: ${minScreenSize}${units})`] = {
        fontSize: `calc(${parseInt(minFontSize, 10)}${units} + ${parseInt(
          maxFontSize,
          10
        ) -
          parseInt(
            minFontSize,
            10
          )} * ((100vw - ${minScreenSize}${units}) / ${parseInt(
          maxScreenSize,
          10
        ) - parseInt(minScreenSize, 10)}))`,
      }
    }

    styles[`@media only screen and (min-width: ${maxScreenSize}${units})`] = {
      fontSize: `${maxFontSize}${units}`,
    }

    return styles
  }

  throw new Error(
    'Detected mixed units. Please use the same units for all parameters.'
  )
}
