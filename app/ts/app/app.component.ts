import { Component, Inject } from '@angular/core';

// import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular4 Dresden';
  onUpdate(id: string, content: string) {
    this.Messaging.update(id, content);
  }
  // constructor(private Messaging: MessagingService) {}
  constructor(
    @Inject('Messaging') private Messaging: any,
    @Inject('jsonService') private jsonService: any,
  ){}
 }
