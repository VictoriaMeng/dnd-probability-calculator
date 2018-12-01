import { handleResponse } from '../helpers/actionHelpers'
import { userId } from '../helpers/storageHelpers'

export const hitChance = formData => {
  return function(dispatch) {
    dispatch({type: 'POSTING_HIT_CHANCE'})
    return fetch(`http://localhost:3000/users/${userId()}/to_hit_chances`, {
      method: 'POST',
      body: JSON.stringify({hit_chance: formData}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(handleResponse)
    .then(respJSON => {
      dispatch({type: 'POST_HIT_CHANCE_SUCCESS', payload: respJSON})
    })
    .catch(error => dispatch({type: 'HANDLE_ERROR', payload: error}))
  }
}

// export const fetchHitChances = () => {
//   return function(dispatch) {
//     dispatch({type: 'LOADING_HIT_CHANCE'})
//     return fetch(`http://localhost:3000/users/${userId()}/to_hit_chances`, {
//       method: 'GET'
//     })
//     .then(handleResponse)
//     .then(respJSON => {
//       dispatch({type: 'LOAD_HIT_CHANCES', payload: respJSON})
//     })
//     .catch(error => dispatch({type: 'HANDLE_ERROR', payload: error}))
//   }
// }

// export const fetchDamage = () => {
//   return function(dispatch) {
//     dispatch({type: 'LOADING_DAMAGE'})
//     return fetch(`http://localhost:3000/users/${userId()}/damage_calculations`, {
//       method: 'GET'
//     })
//     .then(handleResponse)
//     .then(respJSON => {
//       dispatch({type: 'LOAD_DAMAGE', payload: respJSON})
//     })
//     .catch(error => dispatch({type: 'HANDLE_ERROR', payload: error}))
//   }
// }

export const damage = formData => {
  return function(dispatch) {
    dispatch({type: 'POSTING_DAMAGE'})
    return fetch(`http://localhost:3000/users/${userId()}/damage_calculations`, {
      method: 'POST',
      body: JSON.stringify({damage: formData}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(handleResponse)
    .then(respJSON => {
      dispatch({type: 'POST_DAMAGE_SUCCESS', payload: respJSON})
    })
    .catch(error => dispatch({type: 'HANDLE_ERROR', payload: error}))
  }
}