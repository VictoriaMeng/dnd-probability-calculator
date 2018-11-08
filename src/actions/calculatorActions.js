export const toHitChance = formData => {
  return {
    type: 'CALCULATE_TO_HIT_CHANCE',
    formData
  }
}

export const damage = formData => {
  return {
    type: 'CALCULATE_DAMAGE',
    formData
  }
}