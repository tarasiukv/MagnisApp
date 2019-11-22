import { Injectable } from '@angular/core';
declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  constructor() {
    this.pusher = new Pusher('<61bcc07e68d8c6aa55c8>', {
          cluster: 'eu',
          encrypted: true,
        });
  }
  pusher;
      public init(channel) {
        return this.pusher.subscribe(channel);
      }
}
