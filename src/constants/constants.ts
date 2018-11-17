import { Injectable } from '@angular/core';


@Injectable()
export class Constants {
    public isAuthenticatedUrl : string = "http://localhost:8100/api/authentication/isauthenticated.json";
    public registrationUserUrl : string = "http://localhost:8100/api/user.json";
    public loginUserUrl : string = "http://localhost:8100/api/authentication/authentication.json";

}