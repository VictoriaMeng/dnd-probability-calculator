export const fetchUser = (id) => {
  return function(dispatch) {
    dispatch({type: 'LOADING_USER'});
    return fetch(`http://localhost:3000/users/${id}`)
      .then(resp => resp.json())
      .then(respJSON => {
        dispatch({type: 'FETCH_USER', payload: respJSON})
      })
  }
}

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
        dispatch({type: 'FETCH_USER', payload: respJSON})
      })
  }
}