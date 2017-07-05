import { Injectable } from '@angular/core';

@Injectable()
export class MessagingService {
  // messages = `A new message has arrived!!!`
  messageList = [
    `A new band is performing at the Radio City`,
    `Ticket for S. Carpenter is on sale now`,
    `Chris Strapelton is coming to NYC`,
    `U2 is touring Europe in 2018`,
  ]
  constructor() { }
}
