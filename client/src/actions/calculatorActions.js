export const ACHitChance = formData => {
  return {
    type: 'CALCULATE_AC_HIT_CHANCE',
    formData
  }
}

export const savingThrowChance = formData => {
  return {
    type: 'CALCULATE_SAVING_THROW_CHANCE',
    formData
  }
}

export const damage = formData => {
  return {
    type: 'CALCULATE_DAMAGE',
    formData
  }
}