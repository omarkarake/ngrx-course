import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';
const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, state => state - 1)
);

// other alternative way of creating reducer function
// export function counterReducer(state = initialState) {
//   return state;
// }
