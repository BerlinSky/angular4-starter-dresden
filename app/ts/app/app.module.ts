import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleFormComponent } from './single-form/single-form.component';

import { MessagingService } from './service/messaging.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SingleFormComponent
  ],
  providers: [MessagingService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
