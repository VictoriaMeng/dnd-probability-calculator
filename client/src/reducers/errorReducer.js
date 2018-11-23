export default function errorReducer(state = {}, action) {
  switch (action.type) {
    case 'HANDLE_ERROR':
      return action.payload
    case 'CLEAR_ERRORS':
      return {}
    default:
      return state
  }
}