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
      .then(resp => resp.json())
      .then(respJSON => {
        sessionStorage.setItem("id", respJSON.id)
        dispatch({type: 'FETCH_USER', payload: respJSON})
      })
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
      .then(resp => resp.json())
      .then(respJSON => {
        sessionStorage.setItem("id", respJSON.id)
        dispatch({type: 'FETCH_USER', payload: respJSON})
      })
  }
}

export const logout = () => {
  sessionStorage.clear();
}