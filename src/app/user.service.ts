import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

//   anonymousUrl ='http://168.172.185.162:8080/anonymous';
//   categoryUrl = 'http://168.172.185.162:8080/category';
//   recognizedUrl ='http://168.172.185.162:8080/recognized/GetAll';
//   complaintsUrl ='http://168.172.185.162:8080/recognized/complaint';
//   complimentsUrl='http://168.172.185.162:8080/recognized/compliment';
//   suggestionUrl=' http://168.172.185.162:8080/recognized/suggestion';
//   anonyComplainUrl ='http://168.172.185.162:8080/anonymous/complaint';
//   anonyComplimentUrl='http://168.172.185.162:8080/anonymous/compliment';
//  anonySuggestionUrl ='http://168.172.185.162:8080/anonymous/suggestion';
//   AdminLogInUrl = 'http://168.172.185.162:8080/admin';

anonymousUrl ='http://localhost:8080/anonymous';
  categoryUrl = 'http://localhost:8080/category';
  recognizedUrl ='http://localhost:8080/recognized/GetAll';
  complaintsUrl ='http://localhost:8080/recognized/complain/2';
  complimentsUrl='http://localhost:8080/recognized/compliment/1';
  suggestionUrl='http://localhost:8080/recognized/suggestion/3';
  anonyComplainUrl ='http://localhost:8080/anonymous/complain/2';
  anonyComplimentUrl='http://localhost:8080/anonymous/compliment/1';
 anonySuggestionUrl ='http://localhost:8080/anonymous/suggestion/3';
  AdminLogInUrl = 'http://localhost:8080/admin';
  


  

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


}

