import { connect } from 'react-redux'
import HotelGrid from '../../organisms/HotelGrid'

const hotels = [
  {
    name: 'hotelone',
    starRating: 5,
    facilities: ['car park', 'pool'],
  },
  {
    name: 'hoteltwo',
    starRating: 3,
    facilities: ['car park', 'gym'],
  },
  {
    name: 'hotelthree',
    starRating: 3,
    facilities: [],
  },
]

const getVisibleHotels = filters => {
  if (filters.facilities.length > 0) {
    return hotels.filter(hotel =>
      filters.facilities.every(filter => hotel.facilities.includes(filter))
    )
  }

  return hotels
}

const mapStateToProps = state => ({
  hotels: getVisibleHotels(state.filters),
})

export default connect(mapStateToProps)(HotelGrid)
