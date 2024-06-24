import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CounterComponent, LoginComponent],
  imports: [BrowserModule, ROUTING],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
