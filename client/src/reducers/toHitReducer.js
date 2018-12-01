export default function toHitReducer(state = {
  newPost: false,
  data: []
}, action) {
  switch (action.type) {
    case 'POST_HIT_CHANCE_SUCCESS':      
      return {
        data: [...state.data, action.payload],
        newPost: true
      }
    
    case 'LOAD_HIT_CHANCES':
      return {
        data: action.payload,
        newPost: false
      }

    default:
      return state
  }
}