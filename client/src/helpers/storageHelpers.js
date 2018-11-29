export const userIdSaved = () => {
  return sessionStorage.hasOwnProperty('id')
}

export const saveUserId = (respJSON) => {
  sessionStorage.setItem('id', respJSON.id)
}

export const clearStorage = () => {
  sessionStorage.clear()
}