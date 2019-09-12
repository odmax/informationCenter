import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Post} from '../app/Post';
import { Observable } from 'rxjs';

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

  post(opost:Post): Observable<any>{
    return this.http.post("https://jsonplaceholder.typicode.com/posts", opost)
  }
}
