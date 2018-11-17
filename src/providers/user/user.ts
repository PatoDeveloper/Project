import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../constants/constants';
import { Observable } from 'rxjs/Observable';
import { Header } from '../header/header';


@Injectable()
export class UserProvider {

  private header : Header;

  constructor(public http: HttpClient, public constants : Constants, header : Header) {
    this.header = header;
  }

  public get = () : Observable<any> => {
    return this.http.get(this.constants.getUserUrl, {headers: this.header.getHeader()} );
  }

}
