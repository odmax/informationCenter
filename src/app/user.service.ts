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

<<<<<<< HEAD
  anonymousUrl ='http://localhost:8080/anonymous/GetAll';
  categoryUrl = 'http://localhost:8080/';
  recognizedUrl ='http://localhost:8080/recognized/GetAll';
  complaintsUrl ='http://localhost:8080/recognized/complain/2';
  complimentsUrl='http://localhost:8080/recognized/compliment/1';
  suggestionUrl='http://localhost:8080/recognized/suggestion/3';
  anonyComplainUrl ='http://localhost:8080/anonymous/complain/2';
  anonyComplimentUrl='http://localhost:8080/anonymous/compliment/1';
  anonySuggestionUrl ='http://localhost:8080/anonymous/suggestion/3';
  AdminLogInUrl = 'http://localhost:8080/admin';
  anonymousPost ='http://localhost:8080/anonymous';
  recognisePost = 'http://localhost:8080/recognized';
  getAllFeedBAck= 'http://localhost:8080/feedback/GetAll';
  getFeedBackComplain = 'http://localhost:8080/feedback/complain/2';
  getFeedBackSuggestion = 'http://localhost:8080/feedback/suggestion/3';
  postFeedBack = 'http://localhost:8080/feedback';
  postFeedbackComplain = "";
=======
  anonymousUrl ='http://192.168.137.1:8080/anonymous/GetAll';
  categoryUrl = 'http://192.168.137.1:8080/category';
  recognizedUrl ='http://192.168.137.1:8080/recognized/GetAll';
  complaintsUrl ='http://192.168.137.1:8080/recognized/complain/2';
  complimentsUrl='http://192.168.137.1:8080/recognized/compliment/1';
  suggestionUrl='http://192.168.137.1:8080/recognized/suggestion/3';
  anonyComplainUrl ='http://192.168.137.1:8080/anonymous/complain/2';
  anonyComplimentUrl='http://192.168.137.1:8080/anonymous/compliment/1';
  anonySuggestionUrl ='http://192.168.137.1:8080/anonymous/suggestion/3';
  AdminLogInUrl = 'http://192.168.137.1:8080/admin';
  anonymousPost ='http://192.168.137.1:8080/anonymous';
  recognisePost = 'http://192.168.137.1:8080/recognized';
>>>>>>> origin/Nonhlanhla

  
  

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

  public getAdminLogIn()
  {
    return this.http.get<any>(this.AdminLogInUrl);
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
    return this.http.post<any>(this.postFeedBack,user, {});
  }


}

