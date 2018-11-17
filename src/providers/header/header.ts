import { Injectable } from "@angular/core";
import { Cache } from '../../models/cache/cache';
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class Header {
    private cache : Cache;
    constructor(cache : Cache) {
        this.cache = cache;
    }
    
    getHeader = () : HttpHeaders => {
        return new HttpHeaders()
        .set("Authorization", this.cache.getAuthToken())
        .set("Content-type" ,"application/json")
        .set("Accept", "*/*");
    }
}