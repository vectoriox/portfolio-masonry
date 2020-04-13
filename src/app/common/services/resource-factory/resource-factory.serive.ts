import { Injectable } from '@angular/core';
import { HttpProxyService } from '../http/http-proxy.service';
import { ResourceService } from '../resource-service/resource.service';



@Injectable()
export class ResourceFactory{

    private resourcesServices: Map<string, any>;

    constructor(private httpProxyService: HttpProxyService){
        this.resourcesServices = new Map<string, any>();
    }

    getRescouceService(host: string, resource:string){  
           if(this.resourcesServices[`${host}${resource}`]){
               return this.resourcesServices[`${host}${resource}`]
           }else{
               let service = new ResourceService(this.httpProxyService, host, resource);
               this.resourcesServices[`${host}${resource}`] = service;
               return service;
           }
    }

}