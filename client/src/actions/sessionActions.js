import { saveUserId, userIdSaved, clearStorage } from '../helpers/storageHelpers'
import { handleResponse } from '../helpers/fetchHelpers'

export const checkLogin = () => {
  if (userIdSaved()) {
    return {type: 'LOGGED_IN'}
  } else {
    return {type: 'LOGGED_OUT'}
  }
}

export const login = (formData) => {
  return function(dispatch) {
    dispatch({type: 'LOGIN_REQUEST'})
    return fetch('http://localhost:3000/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({user: formData})
    })
    .then(handleResponse)
    .then(respJSON => {
      saveUserId(respJSON)
      dispatch({type: 'LOGGED_IN', payload: respJSON})
    })
    .catch(error => dispatch({type: 'HANDLE_ERROR', payload: error}))
  }
}

export const logout = () => {
  return function(dispatch) {
    clearStorage();
    dispatch({type: 'LOGGED_OUT'})
  }
}
