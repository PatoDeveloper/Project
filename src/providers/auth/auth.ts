import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../../constants/constants';
import { User } from '../../models/user/user';
import { RegisterUser } from '../../models/user/registerUser';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, public constants : Constants) {
    console.log('AuthProvider Provider Start ...');

    let user = new RegisterUser();
    user.Email = "testovaciUser@seznam.cz";
    user.Password = "hesloheslo";
    user.FullName = "Testovaci user";
  }
  

  public isUserAuthorized = () : Observable<any> =>{
    return this.http.get(this.constants.isAuthenticatedUrl);
  }

  public registerUser = (registerUser : RegisterUser) : Observable<any> => {
    return this.http.post(this.constants.registrationUserUrl, registerUser);
    
  }

  public loginUser = (loginUser : RegisterUser) : Observable<any> => {
    let auth = this.loginAndPasswordToHash(loginUser);
    let headers: HttpHeaders = new HttpHeaders()
      .set("Authorization", auth)
      .set("Content-type" ,"application/json")
      .set("Accept", "*/*");
    return this.http.get(this.constants.loginUserUrl, {headers : headers,observe:"response"});
  } 

  private loginAndPasswordToHash = (loginUser : RegisterUser) : string => {
    return "Basic " + btoa(loginUser.Email + ":" + loginUser.Password);
  }
  

}
