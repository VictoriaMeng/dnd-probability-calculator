const userReducer = (state = {loading: false, users: []}, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      debugger;
      return {
        loading: false,
        users: action.payload
      }
    default:
      return state
  }
}

export default userReducer