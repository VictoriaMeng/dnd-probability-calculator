const userReducer = (state = {loading: false, users: []}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      debugger;
      return {
        loading: false,
        users: [action.payload]
      }
    default:
      return state
  }
}

export default userReducer