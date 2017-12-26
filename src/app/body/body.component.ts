import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BodyComponent implements OnInit {
  
  serverElements: any = [];
  serverName : any = '';
  serverContent: any = '';
  constructor() { }

  ngOnInit() {
  }
  connect(){
    this.serverElements.push({
      serverName: this.serverName,
      serverContent: this.serverContent
    })
  }
  bluePrintServer(){
    
  }

}
