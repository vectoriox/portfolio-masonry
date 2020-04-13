import { Component, OnInit } from '@angular/core';
import { ResourceFactory } from "../../common/services/resource-factory/resource-factory.serive";
import { IResourceService } from "../../common/services/resource-service/resource.service";
import { environment as conf } from "../../../environments/environment";

@Component({
    selector:'about-me',
    templateUrl: './about-me.component.html',
    styleUrls:['./about-me.component.scss'],
  
})
export class AboutMeComponent{

    private profileServcie:IResourceService;
    public profile;

    constructor(private resourceFactiory: ResourceFactory){
        this.profileServcie = this.resourceFactiory.getRescouceService(conf.contentResource.HOST, conf.contentResource.PROFILE);
        this.profile = new Object();    
    }
    
    ngOnInit(){
        this.profileServcie.read().subscribe((profile)=>{
            this.profile = profile.pop();
            console.log(profile);
        })
    }

}