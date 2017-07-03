import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleFormComponent } from './single-form/single-form.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SingleFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
