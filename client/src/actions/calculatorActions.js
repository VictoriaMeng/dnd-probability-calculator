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
      dispatch({type: 'POST_HIT_CHANCE_SUCCESS', payload: respJSON})
    })
  }
}

export const fetchHitChances = () => {
  return function(dispatch) {
    dispatch({type: 'LOADING_HIT_CHANCE'})
    return fetch(`http://localhost:3000/users/${sessionStorage.getItem('id')}/to_hit_chances`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(respJSON => {
      dispatch({type: 'LOAD_HIT_CHANCES', payload: respJSON})
    })
  }
}

export const fetchDamage = () => {
  return function(dispatch) {
    dispatch({type: 'LOADING_DAMAGE'})
    return fetch(`http://localhost:3000/users/${sessionStorage.getItem('id')}/damage_calculations`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(respJSON => {
      dispatch({type: 'LOAD_DAMAGE', payload: respJSON})
    })
  }
}

export const damage = formData => {
  return function(dispatch) {
    dispatch({type: 'POSTING_DAMAGE'})
    return fetch(`http://localhost:3000/users/${sessionStorage.getItem('id')}/damage_calculations`, {
      method: 'POST',
      body: JSON.stringify({damage: formData}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(respJSON => {
      dispatch({type: 'POST_DAMAGE_SUCCESS', payload: respJSON})
    })
  }
}