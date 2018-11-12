export const fetchUser = (id) => {
  return function(dispatch) {
    dispatch({type: LOADING_USER})
    return fetch(`http://localhost:3000/user/${id}`)
      .then(resp => resp.json())
      .then(respJSON => {
        dispatch({type: 'FETCH_USER', payload: respJSON})
      })
  }
}