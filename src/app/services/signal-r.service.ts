import { Injectable } from '@angular/core';
declare const $;
@Injectable()
export class SignalRService {
  public connection = $.connection;
  public signalURL: string = 'http://localhost:24480/signalr';
  constructor() { }
  setHub(hubName: string, signalURL: string = null): SignalRModel {
        this.connection.hub.url = signalURL || this.signalURL;
        return this.connection[hubName] || null;
    }

    get getConnection(): any {
        return this.connection.hub.start();
    }

    onDisconnection(): void {
        this.connection.hub.stop();
    }
}
  export class SignalRModel {
    client: any;
    connection: any;
    hubName: string;
    server: any;
    state: any;
}
