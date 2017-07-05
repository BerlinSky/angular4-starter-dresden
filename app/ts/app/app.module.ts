import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleFormComponent } from './single-form/single-form.component';
import { FormsModule } from '@angular/forms';

import { MessagingService } from './service/messaging.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SingleFormComponent
  ],
  // providers: [MessagingService],
  providers: [
      { provide: 'Messaging', useClass: MessagingService },
      { provide: 'jsonService', 'useValue': 'http://localhost:4000/' }
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
