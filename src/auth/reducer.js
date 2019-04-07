import { REGISTER_REQUESTED, REGISTER_SUCCESS, REGISTER_FAIL } from './constants'

const INITIAL_STATE = {
    user: {},
    isLoading: false,
    hasErrors: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REGISTER_REQUESTED:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoading: false,
                hasErrors: false
            }
        case REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
                hasErrors: true
            }
        default:
            return state
    }
}