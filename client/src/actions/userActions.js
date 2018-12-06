import { handleResponse } from '../helpers/fetchHelpers'
import { saveUserId } from '../helpers/storageHelpers'

export const createUser = (formData) => {
  return function(dispatch) {
    dispatch({type: 'POSTING_USER'});
    return fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({user: formData}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(handleResponse)
      .then(respJSON => {
        saveUserId(respJSON)
        dispatch({type: 'LOGGED_IN', payload: respJSON})
      })
      .catch(error => dispatch({type: 'HANDLE_ERROR', payload: error}))
  }
}

export const fetchUserData = () => {
  return function(dispatch) {
    dispatch({type: 'LOADING_USER'})
    return fetch(`http://localhost:3000/users/${sessionStorage.getItem('id')}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      METHOD: 'GET'
    })
    .then(handleResponse)
    .then(respJSON => {
      dispatch({type: 'LOAD_HIT_CHANCES', payload: respJSON.to_hit_chances})
      dispatch({type: 'LOAD_DAMAGE', payload: respJSON.damage_calculations})
    })
  }
}