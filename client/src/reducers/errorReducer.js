export default function errorReducer(state = {messages: {}, hasNewErrors: false}, action) {
  switch (action.type) {
    case 'HANDLE_ERROR':
      return {
        messages: action.payload,
        hasNewErrors: true
      }
    case 'CLEAR_ERRORS':
      return {
        messages: {},
        hasNewErrors: false
      }
    default:
      return state
  }
}