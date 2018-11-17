export const ACHitChance = formData => {
  return function(dispatch) {
    dispatch({type: 'POSTING_HIT_CHANCE'})
    return fetch(`http://localhost:3000/users`)
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

// export const postHitChance = formData => {
//   return function(dispatch) {
//     dispatch({type: 'POSTING_HIT_CHANCE'})
//   }
// }