import types from './types'

const INITIAL_STATE = {
  test: false,
}
const profileReducer = (state: Object = INITIAL_STATE, action: Object): Object => {
  switch (action.type) {
    case types.GREETING: {
      return {
        ...state,
        test: true,
      }
    }

    default:
      return state
  }
}

export default profileReducer
