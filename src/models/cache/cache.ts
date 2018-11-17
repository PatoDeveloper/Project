import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class Cache {
    private authTokenKey = "authTokenKey";
    private authToken : string = "";

    constructor(private storage: Storage) {
        this.storage.get(this.authTokenKey).then((value)=>{
          if(value){
            this.authToken = JSON.parse(value);
          }else 
          {
              this.authToken = "";
          }
        })
      }
    
    setAuthToken = (token: string) : void => {
        this.storage.set(this.authTokenKey, JSON.stringify(token));
    }

    getAuthToken = () : string => {
        return this.authToken;
    } 
}