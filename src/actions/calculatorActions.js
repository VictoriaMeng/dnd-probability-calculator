export const toHitChance = formData => {
  return {
    type: 'CALCULATE_TO_HIT_CHANCE',
    formData
  }
}

export const damageCalc = formData => {
  return {
    type: 'CALCULATE_DAMAGE',
    formData
  }
}