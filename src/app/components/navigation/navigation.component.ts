import { Component, OnInit } from '@angular/core';
import { environment as conf } from "../../../environments/environment";
import { ResourceFactory } from "../../common/services/resource-factory/resource-factory.serive";


@Component({
    selector: 'app-nav',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{ 

    public profile:any;
    private profileService: any;
    public sideNavOpen:boolean = false;

    constructor(private resourceFactiory: ResourceFactory){
        this.profileService = this.resourceFactiory.getRescouceService(conf.contentResource.HOST, conf.contentResource.PROFILE);
        this.profile = new Object();
    }

    ngOnInit(){
        this.profileService.read().subscribe((profile:[])=>{
            this.profile = profile.pop();
            console.log(this.profile);
        })
    }

    public toggleSideNav(){
        this.sideNavOpen = !this.sideNavOpen;
    }
    
}