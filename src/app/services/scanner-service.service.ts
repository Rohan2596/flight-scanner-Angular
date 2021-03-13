import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public getSchedule(url:any,from:any,to:any):any{
    return this.http.get(this.baseurl+url);
  }

}
