import { handleResponse } from '../helpers/fetchHelpers'
import { userId } from '../helpers/storageHelpers'

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