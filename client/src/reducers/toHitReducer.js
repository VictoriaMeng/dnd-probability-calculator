export default function toHitReducer(state = {
  newPost: false,
  data: []
}, action) {
  switch (action.type) {
    case 'POST_HIT_CHANCE_SUCCESS': 
      debugger;     
      return {
        data: [...state.data, action.payload],
        newPost: true
      }
    
    case 'LOAD_HIT_CHANCES':
      debugger;
      return {
        data: action.payload,
        newPost: false
      }

    case 'CALCULATE_SAVING_THROW_CHANCE':

      const DC = action.formData.target
      const statMod = action.formData.modifier

      const failureChance = (1-((21-(DC-statMod))/20))
    
      const failureChanceObject = { 
        stat: action.formData.stat,
        target: DC,
        modifier: statMod,
        chance: failureChance,
        chanceText: `${failureChance * 100}%`
      }

      return [...state, failureChanceObject]

    default:
      return state
  }
}