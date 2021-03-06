import { CounterState } from './states'
import Action from '../actions/interfaces/Action'
import { COUNTER_TYPES } from '../actions/counter.action'

let initialState: CounterState = {
  value: 0
}

export default function(state: CounterState = initialState, action: Action<any>) {
  switch (action.type) {
    case COUNTER_TYPES.INCREMENT:
      return {
        ...state,
        value: ++state.value
      }
    case COUNTER_TYPES.DECREMENT:
      return {
        ...state,
        value: --state.value
      }
    default:
      return state
  }
}
