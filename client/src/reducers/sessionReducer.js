export default function sessionReducer(state = {isLoggedIn: false}, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return {isLoggedIn: true}
    default:
      return {isLoggedIn: false}
  }
}