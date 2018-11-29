import { userIdSaved } from '../helpers/storageHelpers'

export const checkLogin = () => {
  if (userIdSaved()) {
    return {type: 'LOGGED_IN'}
  } else {
    return {type: 'LOGGED_OUT'}
  }
}