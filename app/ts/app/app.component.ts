import { Component } from '@angular/core';

import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular4 Dresden';

  constructor(private Messaging: MessagingService) {}
 }
