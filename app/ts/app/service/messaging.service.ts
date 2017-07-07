import { Injectable } from '@angular/core';

@Injectable()
export class MessagingService {
  // messages = `A new message has arrived!!!`
  messageList = [
    { id: '001', content: `A new band is performing at the Radio City` },
    { id: '002', content: `Ticket for S. Carpenter is on sale now` },
    { id: '003', content: `Chris Strapelton is coming to NYC` },
    { id: '004', content: `U2 is touring Europe in 2018` }
  ]
  update(id: string, content: string) {
    this.messageList = this.messageList.map(m => m.id === id ?  {id, content} : m)
  }
  constructor() { }
}
