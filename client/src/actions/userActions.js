export const fetchUsers = () => {
  return function(dispatch) {
    dispatch({type: LOADING_USERS})
    return fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(respJSON => {
        dispatch({type: 'FETCH_USERS', payload: respJSON})
      })
  }
}