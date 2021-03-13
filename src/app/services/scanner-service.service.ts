import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders().set( 'Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Headers', '*')
};
@Injectable({
  providedIn: 'root'
})
export class ScannerServiceService {
  baseurl = "https://testglobalapi.ecuworldwide.com/";

  constructor(private http:HttpClient) { }

  public getCountryCodes(url:any):any{
    return this.http.get(this.baseurl+url);
  }

  public getUnCodes(url:any):any{
    return this.http.get(this.baseurl+url);
  }

  // public getSchedule(url:any,from:any,to:any):any{
  // }

}
