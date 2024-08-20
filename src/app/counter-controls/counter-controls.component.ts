import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { DecrementAction, IncrementAction } from '../store/counter.actions';
import { decrement } from '../store/counter.actions';
import { increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ value: 2 }));
    // this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    this.store.dispatch(decrement({ value: 2 }));
    // this.store.dispatch(new DecrementAction(2));
  }
}
