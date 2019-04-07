import { REGISTER_REQUESTED, REGISTER_SUCCESS, REGISTER_FAIL } from './constants'

export const populateUserData = (apiResponse) => ({
    type: REGISTER_SUCCESS,
    data: apiResponse
})