export const checkLogin = () => {
  if (sessionStorage.hasOwnProperty('id')) {
    return {type: 'LOGGED_IN'}
  } else {
    return {type: 'LOGGED_OUT'}
  }
}