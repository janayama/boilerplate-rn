import types from './types'

const INITIAL_STATE = {
  greeted: false,
}
const homeReducer = (state: Object = INITIAL_STATE, action: Object): Object => {
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
