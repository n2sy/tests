import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tests';

  compute(x: number) {
    if (x > 0) return 10;
    return x + 1;
  }
}
