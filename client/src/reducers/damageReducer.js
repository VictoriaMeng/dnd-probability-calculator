export default function damageReducer(state = [], action) {
  switch (action.type) {
    case 'CALCULATE_DAMAGE':
      const dieCount = action.formData.dieCount
      const dieValue = action.formData.dieValue

      const damageRange = `${dieCount}-${dieCount * dieValue}`
      const averageDamage = (dieValue + 1) / 2 * dieCount
      const die = `${dieCount}d${dieValue}`

      const newCalc = { die: die, damageRange: damageRange, averageDamage: averageDamage }

      return [...state, newCalc]

    default:
      return state
  }
}