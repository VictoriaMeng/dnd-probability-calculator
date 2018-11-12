export default function toHitReducer(state = [], action) {
  switch (action.type) {
    case 'CALCULATE_AC_HIT_CHANCE':
      // Chance to Hit = ((21–(TargetValue–Modifier)/20)*100

      const AC = action.formData.target
      const atkMod = action.formData.modifier

      const hitChance = ((21-(AC-atkMod))/20)
      
      const hitChanceObject = { 
        stat: action.formData.stat,
        target: AC,
        modifier: atkMod,
        chance: hitChance,
        chanceText: `${hitChance * 100}%`
      }
      
      return [...state, hitChanceObject]

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