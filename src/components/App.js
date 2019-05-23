import React from 'react'

import FilterForm from "./organisms/FilterForm"
import FilteredHotelGrid from './containers/FilteredHotelGrid'

const App = () => (
  <React.Fragment>
    <FilterForm />
    <FilteredHotelGrid />
  </React.Fragment>
)

export default App
