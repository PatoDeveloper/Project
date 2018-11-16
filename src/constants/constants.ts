import { Injectable } from '@angular/core';


@Injectable()
export class Constants {
    public  baseUrl : string = "http://localhost:8100";
    public  isAuthenticatedUrl : string = "http://localhost:8100/api/authentication/isauthenticated.json";
}