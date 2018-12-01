export default function errorReducer(state = {messages: {}}, action) {
  switch (action.type) {
    case 'HANDLE_ERROR':
      return {
        messages: action.payload,
      }
    case 'CLEAR_ERRORS':
      return {
        messages: {},
      }
    default:
      return state
  }
}