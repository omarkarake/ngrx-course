import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}

// how this should have been written in older versions of Angular
// @Injectable()
// export class CounterEffects {
//   @Effect({ dispatch: false }) // by importing this Effect from @ngrx/effects
//   saveCount = this.actions$.pipe(
//         ofType(increment, decrement),
//         tap((action) => {
//           console.log(action);
//           localStorage.setItem('count', action.value.toString());
//         })
//       )
//   constructor(private actions$: Actions) {}
// }
