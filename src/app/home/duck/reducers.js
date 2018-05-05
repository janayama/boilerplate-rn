import types from './types'

const INITIAL_STATE = {
  greeted: false,
}
const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GREETING: {
      return {
        ...state,
        greeted: true,
      }
    }

    default:
      return state
  }
}

export default homeReducer
