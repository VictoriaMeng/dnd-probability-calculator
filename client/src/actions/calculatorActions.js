export const ACHitChance = formData => {
  return function(dispatch) {
    dispatch({type: 'POSTING_HIT_CHANCE'})
    return fetch(`http://localhost:3000/users/${sessionStorage.getItem('id')}/to_hit_chances`, {
      method: 'POST',
      body: JSON.stringify({hit_chance: formData}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(respJSON => {
      debugger;
      dispatch({type: 'POST_HIT_CHANCE_SUCCESS', payload: respJSON})
    })
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