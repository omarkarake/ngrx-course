import { Action, createReducer, on } from '@ngrx/store';
import { CounterActions, DECREMENT, DecrementAction, INCREMENT, IncrementAction } from './counter.actions';
// import { decrement, increment } from './counter.actions';
const initialState = 0;
// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => state + action.value),
//   on(decrement, (state, action) => state - action.value)
// );

// other alternative way of creating reducer function
// if we have ts strict mode enabled, we need to use the below code for piping action
export function counterReducer(state = initialState, action: CounterActions | Action) {
  if (action.type === INCREMENT) {
    return state + (action as IncrementAction).value;
  } else if (action.type === DECREMENT) {
    return state - (action as DecrementAction).value;
  } else {
    return state;
  }
}
