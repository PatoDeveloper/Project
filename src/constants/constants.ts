import { Injectable } from '@angular/core';


@Injectable()
export class Constants {
    public isAuthenticatedUrl : string = "http://localhost:8100/api/authentication/isauthenticated.json";
    public registrationUserUrl : string = "http://localhost:8100/api/user.json";
    public loginUserUrl : string = "http://localhost:8100/api/authentication/authentication.json";
    public getUserUrl : string = "http://localhost:8100/api/user.json";
    public getAllProjectsUrl : string = "http://localhost:8100/api/projects.json";
    public getAllItemsByProjectUrl : string = "http://localhost:8100/api/projects/projectId/items.json";
    public inserNewItemUrl : string = "http://localhost:8100/api/items.json";
    public deleteItemUrl : string = "http://localhost:8100/api/items/itemId.json";
    public getProjectByIdUrl : string = "http://localhost:8100/api/projects/projectId.json";


}