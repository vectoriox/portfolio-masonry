import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import * as AppResponse from './model/base-response.model';


@Injectable()
export class HttpProxyService{

    constructor(private httpClient: HttpClient){

    }

    get(url:string, queryParams?: any, options?: any){  
         return this.httpClient.get(url);
    }

    // post(url: string, any, queryParams?: any, options?: any){
    // }

    // put(url: string, queryParams?: any, data?:any, options?: any){
    // }

    // delete(url: string, queryParams?: any, options?: any){
    // }

}