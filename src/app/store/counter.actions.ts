import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);
export const decrement = createAction(
  '[counter] decrement',
  props<{ value: number }>()
);
