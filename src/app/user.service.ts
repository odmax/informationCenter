import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  anonymousUrl = 'https://icenter.herokuapp.com/anonymous/GetAll';
  categoryUrl = 'https://icenter.herokuapp.com/';
  recognizedUrl = 'https://icenter.herokuapp.com/recognized/GetAll';
  complaintsUrl = 'https://icenter.herokuapp.com/recognized/complain/2';
  complimentsUrl = 'https://icenter.herokuapp.com/recognized/compliment/1';
  suggestionUrl = 'https://icenter.herokuapp.com/recognized/suggestion/3';
  anonyComplainUrl = 'https://icenter.herokuapp.com/anonymous/complain/2';
  anonyComplimentUrl = 'https://icenter.herokuapp.com/anonymous/compliment/1';
  anonySuggestionUrl = 'https://icenter.herokuapp.com/anonymous/suggestion/3';
  AdminLogInUrl = 'https://icenter.herokuapp.com/admin';
  LogInUrl = 'https://icenter.herokuapp.com/login';
  anonymousPost = 'https://icenter.herokuapp.com/anonymous';
  recognisePost = 'https://icenter.herokuapp.com/recognized';
  getAllFeedBAck = 'https://icenter.herokuapp.com/feedback/GetAll';
  postFeedBack = 'https://icenter.herokuapp.com/feedback';
  emailUrl= 'https://icenter.herokuapp.com/recognized/sendMail';
  isLoggedIn = false;






  constructor(private http: HttpClient) { 
  }

  public PostAnonymous(user) {
    return this.http.post<any>(this.anonymousPost, user, {});
  }
  public postemail(user)
  {
    console.log(user)
    return this.http.post<any>(this.emailUrl,user,{});
  }

  public getAdmin()
  {
    return this.http.get<any>(this.AdminLogInUrl);
  }
  public getCategory() {
    return this.http.get<any>(this.categoryUrl + 'category');
  }

  public PostRecognized(user) {
    return this.http.post<any>(this.recognisePost, user, {});
  }

  public AdminLogIn(username, password) {
    // console.log(user)
    return this.http.post<any>(this.LogInUrl, {username, password});
  }

  public getRecognized() {
    return this.http.get<any>(this.recognizedUrl);
  }

  public getAnonymous() {
    return this.http.get<any>(this.anonymousUrl);
  }

  public getRecogComplaint() {
    return this.http.get<any>(this.complaintsUrl);
  }
  public getRecogCompliment() {
    return this.http.get<any>(this.complimentsUrl);
  }

  public getRecogSuggestion() {
    return this.http.get<any>(this.suggestionUrl);
  }

  public getAnonymComplaint() {
    return this.http.get<any>(this.anonyComplainUrl);
  }
  public getAnonymCompliment() {
    return this.http.get<any>(this.anonyComplimentUrl);
  }

  public getAnonymSuggestion() {
    return this.http.get<any>(this.anonySuggestionUrl);
  }
  public PostFeedback(user) {
    // console.log("Annomas ",user)
    return this.http.post<any>(this.postFeedBack, user, {});
  }

  public GetFeedBack() {
    return this.http.get<any>(this.getAllFeedBAck);
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.LogInUrl, { username, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }

            return user;
        }));
}

  
}

