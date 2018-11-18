import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../../constants/constants';
import { RegisterUser } from '../../models/user/registerUser';
import { Cache } from '../../models/cache/cache'; 
import { Header } from '../../providers/header/header'; 
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private cache : Cache;
  private header : Header;
  constructor(public http: HttpClient, public constants : Constants, cache : Cache, header : Header) {
    this.cache = cache;
    this.header = header;
  }
  
  public isUserAuthorized = () : Observable<any> =>{
    return this.http.get(this.constants.isAuthenticatedUrl, {withCredentials:true, headers: this.header.getHeader(), observe: "body"});
  }

  public registerUser = (registerUser : RegisterUser) : Observable<any> => {
    return this.http.post(this.constants.registrationUserUrl, registerUser);
  }

  public loginUser = (loginUser : RegisterUser) : Observable<any> => {
    let auth = this.loginAndPasswordToHash(loginUser);
    this.cache.setAuthToken(auth);
    let headers  = new HttpHeaders().set("Authorization", auth).set("Content-type" ,"application/json").set("Accept", "*/*");
    return this.http.get(this.constants.loginUserUrl, {headers : headers,observe:"response"});
  } 

  private loginAndPasswordToHash = (loginUser : RegisterUser) : string => {
    return "Basic " + btoa(loginUser.Email + ":" + loginUser.Password);
  }
  

}
