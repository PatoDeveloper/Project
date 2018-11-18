import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../constants/constants';
import { AuthProvider } from '../auth/auth';
import { Header } from '../header/header';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectProvider {

  constructor(public http: HttpClient, public constants : Constants,public headers : Header) {
    console.log('Hello ProjectProvider Provider');
  }

  getAllProjects = () : Observable<any> => {
    return this.http.get(this.constants.getAllProjectsUrl, {headers : this.headers.getHeader(), withCredentials : true});
  } 

}
