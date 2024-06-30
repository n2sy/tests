import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  data;
  constructor(public countSer: CounterService) {}

  ngOnInit() {
    this.countSer
      .getData()
      .then((response) => {
        this.data = response;
      })
      .catch((err) => {
        this.data = err.toString();
      });
  }
}
