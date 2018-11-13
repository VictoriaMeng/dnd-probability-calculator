const userReducer = (state = {loading: false, users: []}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        loading: false,
        user: [action.payload]
      }
    default:
      return state
  }
}

export default userReducer