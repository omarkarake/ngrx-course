import { createReducer } from '@ngrx/store';
const initialState = 0;
// export const counterReducer = createReducer(initialState);

// other alternative way of creating reducer function
export function counterReducer(state = initialState) {
  return state;
}
