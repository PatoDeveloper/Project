import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../../constants/constants';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, public constants : Constants) {
    console.log('AuthProvider Provider Start ...');
    this.isUserAuthorized().subscribe((response) => { console.log(response)});
  }

  public isUserAuthorized = () : Observable<any> =>{
    return this.http.get(this.constants.isAuthenticatedUrl);
  }


}
