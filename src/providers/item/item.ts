import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../constants/constants';
import { Header } from '../header/header';
import { Observable } from 'rxjs/Observable';
import { Item } from 'ionic-angular';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemProvider {

  constructor(public http: HttpClient, public constants : Constants,public headers : Header) {
    console.log('Hello ProjectProvider Provider');
  }

  public getAllItemsByProjectId = (projectId : number) : Observable<any> => {
    let url : string = this.constants.getAllItemsByProjectUrl;
    url = url.replace("projectId", projectId.toString());
    return this.http.get(url, {headers : this.headers.getHeader(), withCredentials : true});
  } 

  public createNewItem = (issue : string, projectId: number) : Observable<any> => {
    let ItemObject = {Content:issue, ProjectId : projectId};
    return this.http.post(this.constants.inserNewItemUrl, ItemObject, {headers:this.headers.getHeader(),withCredentials:true});
  }

  public createNewFullItem = (item:Item) : Observable<any> => {
    return this.http.post(this.constants.inserNewItemUrl, item, {headers:this.headers.getHeader(),withCredentials:true});
  } 

  public deleteItem = (itemId : number) : Observable<any> => {
    let url : string = this.constants.deleteItemUrl;
    url = url.replace("itemId", itemId.toString());
    return this.http.delete(url, {headers : this.headers.getHeader(), withCredentials : true});
  }

}
