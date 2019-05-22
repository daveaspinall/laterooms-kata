const initialState = {
  hotels: {
    entities: {
      hotel1: {
        id: 'hotel1',
        name: 'hotelone',
        starRating: 5,
        facilities: ['car park', 'pool'],
      },
      hotel2: {
        id: 'hotel2',
        name: 'hoteltwo',
        starRating: 3,
        facilities: ['car park', 'gym'],
      },
      hotel3: {
        id: 'hotel3',
        name: 'hotelthree',
        starRating: 3,
        facilities: [],
      },
    },
    visibleById: ['hotel1', 'hotel2', 'hotel3'],
  },
  filters: {
    facilities: [],
  },
}

export default initialState
