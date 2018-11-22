export default function errorReducer(state = [], action) {
  switch (action.type) {
    case 'HANDLE_ERROR':
      const errors = Object.entries(action.payload).map(e => 
      `${e[0].charAt(0).toUpperCase() + e[0].slice(1)} ${e[1]}`)
      return errors
    default:
      return state
  }
}