import { Component, OnInit } from '@angular/core';
import { ImageLoaderService } from "../../common/services/image-loader.servcies";
import { ResourceFactory } from "../../common/services/resource-factory/resource-factory.serive";
import { environment as conf } from "../../../environments/environment";
import { MediaNotoficationSerivce } from "../../common/services/media-size-service/media-size.service";


@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss'],

})
export class HomeComponent implements OnInit{

    public options = {};
    public collection =<any>[];
    public collectionItem:any;
    public isVisible = false;
    public isArtboardsVisible = false;
    public modalContentStyle = {"min-height":"700px"};
    private galleryService:any;
    private artistInfoService:any;
    public artistInfo:{};
    public isSmallScreen:boolean;

    constructor(private resourceFactiory: ResourceFactory, private _imageLoaderService: ImageLoaderService, private _mediaNotification:MediaNotoficationSerivce){
        this.galleryService = this.resourceFactiory.getRescouceService(conf.contentResource.HOST, conf.contentResource.GALLERY);
    }

    ngOnInit(){

        this.options= {
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
            percentPosition: true,
            horizontalOrder: true,
            resize:true
          } 

            this.galleryService.read().subscribe((galleryItems:[])=>{
                galleryItems.forEach((item:any)=>{
                        this._imageLoaderService.loadImage(item.tizer.src).subscribe(()=>{
                        this.collection.push(item);  
                    })
                })
            })

            this._mediaNotification.registerMediaNotification((mediaInfo)=>{
                console.log(mediaInfo);
                if(mediaInfo.mediaSizeType === 1){
                    this.isSmallScreen = true;
                }else{
                    this.isSmallScreen = false
                }
            })
    }

    openGalleryItem(item){
        this.collectionItem = item;
        this.isVisible  = true;
        this.loadImages(item.artboards.map((item)=>{ return item.src}));
    }

    closeItemGallery(){
        this.isVisible = false;
        this.isArtboardsVisible = false;
    }

    loadImages(images){
        this._imageLoaderService.loadImages(images).subscribe((images)=>{
            console.log("loaded.....")
            console.log(images);
            setTimeout(()=>{
                this.isArtboardsVisible = true;
            },500)
            
        })
    }

    layoutComplete(items:any){
        console.log("layout completed !!!");
    }
}  