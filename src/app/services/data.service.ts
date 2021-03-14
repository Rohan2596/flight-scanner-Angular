import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";



@Injectable()
export class DataService{

    message:object;
    private messageSource=new BehaviorSubject<object>(new Object());

    currentMessage =this.messageSource.asObservable();

    constructor(){}

    changeMessage(message:object){
        this.messageSource.next(message);
    }
}