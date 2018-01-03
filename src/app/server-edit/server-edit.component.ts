import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';

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

  @ViewChild('serverNameInput') serverNameInputValue: any ;
  @ViewChild('serverContentInput') serverContentInputValue: any ;
  constructor() { }

  ngOnInit() {
  }
  connect(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    // this.serverElements.push({
    //   serverName: this.serverName,
    //   serverContent: this.serverContent
    // })
    console.log(nameInput);
    this.onServerAdded.emit({
      type : 'server',
      serverName : nameInput.value,
      serverContent : contentInput.value
    });
  }
  bluePrintServer() {
    this.onBluePrintServerAdded.emit({
      type: 'bluePrint',
      serverName: this.serverNameInputValue.nativeElement.value,
      serverContent: this.serverContentInputValue.nativeElement.value
    })
  }
}
