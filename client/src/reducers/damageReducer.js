export default function damageReducer(state = {
  newPost: false,
  data: []
}, action) {
  switch (action.type) {
    case 'POST_DAMAGE_SUCCESS':
      return {
        data: [...state.data, action.payload],
        newPost: true
      }
    
    case 'LOAD_DAMAGE':
      return {
        data: action.payload,
        newPost: false
      }

    default:
      return state
  }
}