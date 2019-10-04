import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Post} from '../app/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  anonymousUrl ='http://168.172.185.162:1313/anonymous';
  categoryUrl = 'http://168.172.185.162:1313/category';
  recognizedUrl ='http://168.172.185.162:1313/recognized';
  AdminLogInUrl = 'http://168.172.185.162:1313/admin';
  /* 
  anonymousUrl ='http://168.172.187.65:1313/anonymous';
  categoryUrl = 'http://168.172.187.65:1313/category';
  recognizedUrl ='http://168.172.187.65:1313/recognized';
  AdminLogInUrl = 'http://168.172.187.65:1313/admin';
  */

  constructor(private http:HttpClient) { }

  public PostAnonymous(user)
  {
    return this.http.post<any>(this.anonymousUrl,user, {});
  }

  public getCategory()
  {
    return this.http.get<any>(this.categoryUrl);
  }
  public getRecognized()
  {
    return this.http.get<any>(this.recognizedUrl);
  }

  public PostRecognized(user)
  {
    return this.http.post<any>(this.recognizedUrl, user, {});
  }
  public getAdminLogIn(user)
  {
    return this.http.post<any>(this.AdminLogInUrl,user, {});
  }

  

 
}
