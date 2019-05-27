import React from 'react'

import { Svg } from './index.styled'

const Logo = ({ ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" {...props}>
    <path
      fill="#00AEEF"
      fillRule="nonzero"
      d="M35.97 30.516L42.1 39H29.84l6.13-8.484zm18.168 6.946C55.373 36.3 56 34.5 56 32.1c0-2.507-.64-4.38-1.898-5.57-1.684-1.587-3.986-1.498-4.015-1.495L21 25v14h5.14l8.582-11.88.278.203V27h2v.277l.216-.158L45.8 39h3.974c.022 0 2.626.1 4.326-1.538h.038zM72 36c0 19.882-16.118 36-36 36S0 55.9 0 36 16.1 0 36 0c19.882 0 36 16.1 36 36zM60 48h-7.702l-4.334-6h1.962c1.018 0 3.954-.2 6.24-2.327 1.885-1.754 2.902-4.357 2.902-7.658 0-3.366-1.018-5.933-2.902-7.71C53.523 21.8 50.1 22 50 22H12v3h6v14h-6v3h11.974l-4.334 6H12v3h20v-3h-8.66l4.334-6h16.588l4.335 6H40v3h20v-3z"
    />
  </Svg>
)

export default Logo
