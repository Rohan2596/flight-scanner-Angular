import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScannerServiceService {
  baseurl = "https://testglobalapi.ecuworldwide.com/";

  constructor(private http:HttpClient) { }

  public getCodes(url:any):any{
    return this.http.get(this.baseurl+url);
  }


 
  public getSchedule(url:any,from:any,to:any):any{
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('to', to);

    return this.http.get(this.baseurl+url,{params:params});
  }

}
