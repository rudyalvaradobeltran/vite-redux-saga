import { FIND_USERS_SAGA } from '../Types'

export const findUsers = () => {
  return { type: FIND_USERS_SAGA }
}