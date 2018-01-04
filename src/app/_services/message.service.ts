import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class MessageService{
    private subject = new Subject<any>;

    getMessage(message: String){
        return this.subject.next({text : message});
    }
    clearMessage(){
        return this.subject.next();
    }
    sendMessage(): Observable<any>{
          return this.subject.asObservable();
    }
}