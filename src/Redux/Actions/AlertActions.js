import { SET_ALERT } from '../Types'

export const setAlertAction = (string) => {
  return { type: SET_ALERT, payload: string }
}