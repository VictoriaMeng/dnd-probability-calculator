const userReducer = (state = {loading: false, users: []}, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return {
        loading: false,
        users: action.users
      }
    default:
      return state
  }
}

export default userReducer