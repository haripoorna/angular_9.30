import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BodyComponent implements OnInit {
  

  serverElements : any = []
  constructor() {

    this.serverElements = [{
      type: 'server',
      serverName: 'dummy server',
      serverContent: 'dummy server content'
    }]
   }

  ngOnInit() {
  }
  addServer(event){
    this.serverElements.push(event);
  }
  addBluePrint(event){
    this.serverElements.push(event);
  }
}
