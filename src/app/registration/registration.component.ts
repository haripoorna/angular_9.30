import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService} from '../_services/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {

  countriesList: any;

  constructor(private commonSvc: CommonService) {
       }

  ngOnInit() {
    this.commonSvc.getCountriesList().subscribe((data:any) => {
      console.log(data);
      this.countriesList = data;
    })
  }
  submit(){
    
  }

}
