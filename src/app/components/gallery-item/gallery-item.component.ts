import { Component, Input } from "@angular/core";
import { ImageLoaderService } from "../../common/services/image-loader.servcies";

@Component({
    selector:"app-gallery-item",
    templateUrl: "./gallery-item.component.html",
    styleUrls:["./gallery-item.component.scss"]
})
export class GalleryItemComponent{

    public isVisible = false;
    public isGalleryVisible = false;
    public modalContentStyle = {height:"0"};
    @Input() collection:any;
    public effect = 'scrollx';
    constructor(private _imageLoaderService: ImageLoaderService){}

    public openItemGallery(){
        this.isVisible= true;
        this._imageLoaderService.loadImages(this.collection.gallery).subscribe((images)=>{
            console.log("loaded.....")
            console.log(images);
            let modalHeight = this.calculateModalHeight(images[0]);
            this.modalContentStyle.height = modalHeight +"px";
            setTimeout(()=>{
                this.isGalleryVisible = true;
            },500)
            
        })
    }
    public closeItemGallery(){
        this.isVisible= false;
        this.isGalleryVisible = false;
    }
    private calculateModalHeight(img){
        if(img.width >= 1200){
            return img.height*(1200/img.width);
        }
    }
}