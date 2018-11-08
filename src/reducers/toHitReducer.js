export default function toHitReducer(state = [], action) {
  switch (action.type) {
    case 'CALCULATE_TO_HIT_CHANCE':
      // Chance to Hit = ((21–(TargetValue–Modifier)/20)*100
     
      const target = action.formData.target
      const modifier = action.formData.modifier

      const hitChance = ((21-(target-modifier))/20)*100
      
      const chanceObject = { 
        stat: action.formData.stat,
        target: target,
        modifier: modifier,
        hitChance: `${hitChance}%`
      }
      
      return [...state, chanceObject]
    
    default:
      return state
  }
}