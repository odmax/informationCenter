import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // anonymousUrl ='http://192.168.137.1:8080/anonymous/GetAll';
  // categoryUrl = 'http://192.168.137.1:8080/category';
  // recognizedUrl ='http://192.168.137.1:8080/recognized/GetAll';
  // complaintsUrl ='http://192.168.137.1:8080/recognized/complain/2';
  // complimentsUrl='http://192.168.137.1:8080/recognized/compliment/1';
  // suggestionUrl='http://192.168.137.1:8080/recognized/suggestion/3';
  // anonyComplainUrl ='http://192.168.137.1:8080/anonymous/complain/2';
  // anonyComplimentUrl='http://192.168.137.1:8080/anonymous/compliment/1';
  // anonySuggestionUrl ='http://192.168.137.1:8080/anonymous/suggestion/3';
  // AdminLogInUrl = 'http://192.168.137.1:8080/admin';
  // anonymousPost ='http://192.168.137.1:8080/anonymous';
  // recognisePost = 'http://192.168.137.1:8080/recognized';

  anonymousUrl ='http://168.172.188.119:8080/anonymous/GetAll';
  categoryUrl = 'http://168.172.188.119:8080/';
  recognizedUrl ='http://168.172.188.119:8080/recognized/GetAll';
  complaintsUrl ='http://168.172.188.119:8080/recognized/complain/2';
  complimentsUrl='http://168.172.188.119:8080/recognized/compliment/1';
  suggestionUrl='http://168.172.188.119:8080/recognized/suggestion/3';
  anonyComplainUrl ='http://168.172.188.119:8080/anonymous/complain/2';
  anonyComplimentUrl='http://168.172.188.119:8080/anonymous/compliment/1';
  anonySuggestionUrl ='http://168.172.188.119:8080/anonymous/suggestion/3';
  AdminLogInUrl = 'http://168.172.188.119:8080/admin';
 LogInUrl = 'http://168.172.188.119:8080/login';
  anonymousPost ='http://168.172.188.119:8080/anonymous';
  recognisePost = 'http://168.172.188.119:8080/recognized';
  getAllFeedBAck= 'http://168.172.188.119:8080/feedback/GetAll';
  postFeedBack = 'http://168.172.188.119:8080/feedback';
  
 

  
  

  constructor(private http:HttpClient) { }

  public PostAnonymous(user)
  {
    return this.http.post<any>(this.anonymousPost,user, {});
  }

  public getCategory()
  {
    return this.http.get<any>(this.categoryUrl + 'category');
  }

  public PostRecognized(user)
  {
    return this.http.post<any>(this.recognisePost, user, {});
  }

  public AdminLogIn(user)
  {
    
    return this.http.post<any>(this.LogInUrl, user);
  }

  public getRecognized()
  {
    return this.http.get<any>(this.recognizedUrl);
  }
 
public getAnonymous()
{
  return this.http.get<any>(this.anonymousUrl);
}

public getRecogComplaint()
{
  return this.http.get<any>(this.complaintsUrl);
}
public getRecogCompliment()
{
  return this.http.get<any>(this.complimentsUrl);
}
 
public getRecogSuggestion()
{
  return this.http.get<any>(this.suggestionUrl);
}

public getAnonymComplaint()
{
  return this.http.get<any>(this.anonyComplainUrl);
}
public getAnonymCompliment()
{
  return this.http.get<any>(this.anonyComplimentUrl);
}
 
public getAnonymSuggestion()
{
  return this.http.get<any>(this.anonySuggestionUrl);
}
public PostFeedback(user)
  {
    // console.log("Annomas ",user)
    return this.http.post<any>(this.postFeedBack,user, {});
  }

  public GetFeedBack()
  {
    return this.http.get<any>(this.getAllFeedBAck);
  }

  // public sendMail(user)
  // {
  //   return this.http.post<any>(this.emailUrl, user);
  // }

}

