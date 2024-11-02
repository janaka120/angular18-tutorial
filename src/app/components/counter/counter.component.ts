import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
    count = signal(0);

    addCounter () {
      this.count.set(this.count() + 1);
    }

    minusCounter() {
      this.count.update((val) => val - 1);
    }
}
