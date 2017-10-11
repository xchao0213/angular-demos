import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DebounceClickDirective } from './debounce-click.directive'

@NgModule({
  declarations: [
    AppComponent,
    DebounceClickDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
