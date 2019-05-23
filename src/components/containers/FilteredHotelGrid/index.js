import { connect } from 'react-redux'
import HotelGrid from '../../organisms/HotelGrid'

const getVisibleHotels = hotels => {
  // filter hotels where visible flag === true
  // console.log(hotels, 'state.hotels')
  return hotels
}

const mapStateToProps = state => ({
  hotels: getVisibleHotels(state.hotels),
})

export default connect(mapStateToProps)(HotelGrid)
