import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs';

@Injectable()
export  class CommonService {
    constructor(private httpClient: HttpClient) {
    }
    getCountriesList(): Observable<any> {
        return this.httpClient.get('https://restcountries.eu/rest/v2/all')
        .map((res: any) =>{
            console.log(res);
            return res;
        })
    }
}


// npm install -g @angular-cli/latest