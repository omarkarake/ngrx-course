// import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';

// export const increment = createAction(
//   '[Counter] Increment',
//   props<{ value: number }>()
// );
// export const decrement = createAction(
//   '[Counter] Decrement',
//   props<{ value: number }>()
// );

export const INCREMENT  = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
  constructor(public value: number) {}
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
  constructor(public value: number) {}
}

export type CounterActions = IncrementAction | DecrementAction; 