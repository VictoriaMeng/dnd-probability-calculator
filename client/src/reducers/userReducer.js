const userReducer = (state = {loading: false, data: []}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      debugger;
      return {
        loading: false,
        isLoggedIn: true,
        data: action.payload
      }
    default:
      return state
  }
}

export default userReducer