import { Injectable } from '@angular/core';
import { HttpProxyService } from '../http/http-proxy.service';

export interface IResourceService{
     read(uriParams?:Map<string,any>, queryParams?:Map<string,any>, options?:any);
}


export class ResourceService implements IResourceService{

    private url:string;
    private httpProxyService:HttpProxyService;

    constructor(httpClient:any, host: string, resource: string){    
        console.log("test resource service");
        this.url = host + resource;
        this.httpProxyService = httpClient;
    }

    public read(uriParams?:Map<string,any>, queryParams?:Map<string,any>, options?:any){
        return this.httpProxyService.get(this.url,uriParams,options);
    }

    // public create(uriParams:Map<string,any>, queryParams:Map<string,any>, options?:any){  
    //     return this.httpProxyService.post(this.url,uriParams,options);
    // }

    // public update(uriParams:Map<string,any>, queryParams:Map<string,any>, options?:any){
    //     return this.httpProxyService.put(this.url,uriParams,options);
    // }

    // public delete(){

    // }

    private buildURL(){

    }

}