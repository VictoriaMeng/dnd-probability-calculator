import { handleResponse } from '../helpers/actionHelpers'

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
        sessionStorage.setItem("id", respJSON.id)
        dispatch({type: 'LOGGED_IN', payload: respJSON})
      })
      .catch(error => dispatch({type: 'HANDLE_ERROR', payload: error}))
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
      sessionStorage.setItem("id", respJSON.id)
      dispatch({type: 'LOGGED_IN', payload: respJSON})
    })
    .catch(error => dispatch({type: 'HANDLE_ERROR', payload: error}))
  }
}

export const logout = () => {
  return function(dispatch) {
    sessionStorage.clear();
    dispatch({type: 'LOGGED_OUT'})
  }
}

export const fetchUserData = () => {
  return dispatch({type: 'LOADING_USER'})

}