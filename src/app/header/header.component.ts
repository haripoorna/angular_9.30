import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {navPills} from '../models/headerInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  navPills: Array<any>;
  pageName: any = 'home';
  constructor(){ 
    this.navPills = navPills;
  }

  ngOnInit() {
  }
  
  loadPage(name:any){
    this.pageName = name;
    console.log(this.pageName);
  }

}
