import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  anonymousUrl ='http://localhost:1313/anonymous';

  constructor(private http:HttpClient) { }

  public getAnonymous(user)
  {
    return this.http.post<any>(this.anonymousUrl,user);
  }
}
