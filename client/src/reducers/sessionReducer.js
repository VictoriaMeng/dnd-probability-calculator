export default function sessionReducer(state = {isLoggedIn: false}) {
  switch (action.type) {
    case 'LOGGED_IN':
      return {isLoggedIn: true}
    default:
      return state
  }
}