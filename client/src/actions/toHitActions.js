import { handleResponse } from '../helpers/fetchHelpers'
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