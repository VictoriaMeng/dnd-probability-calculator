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
  debugger;
  return function(dispatch) {
    dispatch({type: 'POSTING_USER'});
    debugger;
    return fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(respJSON => {
        dispatch({type: 'FETCH_USER', payload: respJSON})
      })
  }
}