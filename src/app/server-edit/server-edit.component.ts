import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerEditComponent implements OnInit {
  serverElements: any = [];
  serverName: any = '';
  serverContent: any = '';
  @Output() onServerAdded = new EventEmitter<any>;
  @Output() onBluePrintServerAdded = new EventEmitter<any>;
  constructor() { }

  ngOnInit() {
  }
  connect() {
    // this.serverElements.push({
    //   serverName: this.serverName,
    //   serverContent: this.serverContent
    // })
    this.onServerAdded.emit({
      type : 'server',
      serverName : this.serverName,
      serverContent : this.serverContent
    });
  }
  bluePrintServer() {
    this.onBluePrintServerAdded.emit({
      type: 'bluePrint',
      serverName: this.serverName,
      serverContent: this.serverContent
    })
  }
}
