import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';

let routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'counter', component: CounterComponent },
];

export const ROUTING = RouterModule.forRoot(routes, { useHash: true });
