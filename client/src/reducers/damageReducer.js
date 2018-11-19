export default function damageReducer(state = [], action) {
  switch (action.type) {
    case 'POST_DAMAGE_SUCCESS':
      debugger;
      return [...state, action.payload]

    default:
      return state
  }
}