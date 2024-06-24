import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = 5;

  constructor() {}

  getData() {
    return new Promise((resolve, reject) => {
      let nb = Math.trunc(Math.random() * 20) + 1;
      console.log(nb);

      setTimeout(() => {
        if (nb < 10) resolve(`Data valide`);
        else reject(new Error('Nombre superieur à 10'));
      }, 2000);
    });
  }

  getCount() {
    return this.count;
  }
  increment() {
    this.count++;
  }
  decrement() {
    return this.count--;
  }
  reset(newCount) {
    this.count = newCount;
  }
}
