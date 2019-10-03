import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Post} from '../app/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  anonymousUrl ='http://192.168.137.1:1313/anonymous';
  categoryUrl = 'http://192.168.137.1:1313/category';
  recognizedUrl ='http://192.168.137.1:1313/recognized';
  AdminLogInUrl = 'http://192.168.137.1:1313/admin';

  

  constructor(private http:HttpClient) { }

  public PostAnonymous(user)
  {
    return this.http.post<any>(this.anonymousUrl,user, {});
  }

  public getCategory()
  {
    return this.http.get<any>(this.categoryUrl);
  }

  public PostRecognized(user)
  {
    return this.http.post<any>(this.recognizedUrl, user, {});
  }
  public getAdminLogIn()
  {
    return this.http.get<any>(this.AdminLogInUrl);
  }

  public getAnnonymous()
  {
    return this.http.get<any>(this.anonymousUrl);
  }

  

 
}

