import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";



@Injectable()
export class DataService{

    message:object[]=[];
    private messageSource=new BehaviorSubject<object[]>([]);

    currentMessage =this.messageSource.asObservable();

    constructor(){}

    changeMessage(message:object[]){
        this.messageSource.next(message);
    }
}