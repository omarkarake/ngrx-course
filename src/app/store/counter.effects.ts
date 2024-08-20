import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        tap((action) => {
          console.log(action);
          localStorage.setItem('count', action.value.toString());
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions) {}
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
