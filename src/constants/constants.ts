import { Injectable } from '@angular/core';


@Injectable()
export class Constants {
    baseUrl :string  = "http://192.168.0.2:8100";




    public isAuthenticatedUrl : string =  this.baseUrl+"/api/authentication/isauthenticated.json";
    public registrationUserUrl : string = this.baseUrl+"/api/user.json";
    public loginUserUrl : string = this.baseUrl+"/api/authentication/authentication.json";
    public getUserUrl : string = this.baseUrl+"/api/user.json";
    public getAllProjectsUrl : string = this.baseUrl+"/api/projects.json";
    public getAllItemsByProjectUrl : string = this.baseUrl+"/api/projects/projectId/items.json";
    public inserNewItemUrl : string = this.baseUrl+"/api/items.json";
    public deleteItemUrl : string = this.baseUrl+"/api/items/itemId.json";
    public getProjectByIdUrl : string = this.baseUrl+"/api/projects/projectId.json";




}