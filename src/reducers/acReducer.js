export default function acReducer(state = [], action) {
  switch (action.type) {
    case 'CALCULATE_AC_HIT_CHANCE':
      // Chance to Hit = ((21–(AC–ATTK)/20)*100
     
      const hitChance = ((21-(action.formData.target-action.formData.modifier))/20)*100
      const chanceObject = {hitChance: `${hitChance}%`}
     
      return [...state, chanceObject]
    
    default:
      return state
  }
}