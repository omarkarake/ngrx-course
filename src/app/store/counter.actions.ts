import { createAction, props } from '@ngrx/store';
// import { Action } from '@ngrx/store';

export const INCREMENT  = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

export const increment = createAction(
  INCREMENT,
  props<{ value: number }>()
);

export const decrement = createAction(
  DECREMENT,
  props<{ value: number }>()
);


// export class IncrementAction implements Action {
//   readonly type = INCREMENT;
//   constructor(public value: number) {}
// }

// export class DecrementAction implements Action {
//   readonly type = DECREMENT;
//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction | DecrementAction; 