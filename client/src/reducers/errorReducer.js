export default function errorReducer(state = {}, action) {
  switch (action.type) {
    case 'HANDLE_ERROR':
      return action.payload
    default:
      return state
  }
}