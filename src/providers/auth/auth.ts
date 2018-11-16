import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('AuthProvider Provider Start ...');
    this.isUserAuthorized().subscribe((response) => { console.log(response)});
  }

  public isUserAuthorized = () : Observable<any> =>{
    return this.http.get("http://localhost:8100/api/authentication/isauthenticated.json");
  }


}
