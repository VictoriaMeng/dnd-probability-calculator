export default function damageReducer(state = [], action) {
  switch (action.type) {
    case 'POST_DAMAGE_SUCCESS':
      return [...state, action.payload]
    
    case 'LOAD_DAMAGE':
      return action.payload

    default:
      return state
  }
}