const userReducer = (state = {loading: false, data: []}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}

export default userReducer