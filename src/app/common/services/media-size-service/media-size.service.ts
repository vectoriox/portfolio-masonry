import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';



function _window() : any {
    // return the global native browser window object
    return window;
 }

export enum MediaSizeType {
    NO_SIZE = 0,
    XS = 1,
    SM = 2,
    MD = 3,
    LG = 4
}

export  class MediaSizeQuieris{
    public static xs = "(max-width:  767px)";
    public static sm = "(min-width:  768px) and (max-width: 991px)";
    public static md = "(min-width:  992px) and (max-width: 1199px)";
    public static lg = "(min-width : 1200px)" ;
 } 



export class MediaSizeIndicator{
  public xs:boolean =false;// extra-small
  public sm:boolean =false;// small
  public md:boolean =false;// medium
  public lg:boolean =false;// large

}
export class MediaMatcherItem {
    query:any;
    mediaSizeType:MediaSizeType;
    

    constructor(query:any ,mediaSizeType:MediaSizeType){
      this.query = query;
      this.mediaSizeType = mediaSizeType;
    }
}

@Injectable()
export class MediaNotoficationSerivce{


    private mediaNotificationSubject; 
    private window;
    private currentMediaSize:any;
    private isInitilized:boolean = false;
    mediaSizeMatcher:Array<MediaMatcherItem>;
    
    constructor(){
        this.mediaNotificationSubject = new Subject<any>();
        this.window = _window();
    }

    public registerMediaNotification(func:Function):void {
        if(!this.isInitilized){
            this.init();
        }
        this.mediaNotificationSubject.subscribe({
            next: (val)=>{
                func(val);
            }
        });
        this.mediaNotificationSubject.next(this.currentMediaSize);
    }

    private init():void {
        this.mediaSizeMatcher = new Array<MediaMatcherItem>();
        this.mediaSizeMatcher[MediaSizeType.XS] = new MediaMatcherItem(this.window.matchMedia(MediaSizeQuieris.xs) ,MediaSizeType.XS);
        this.mediaSizeMatcher[MediaSizeType.SM] = new MediaMatcherItem(this.window.matchMedia(MediaSizeQuieris.sm) ,MediaSizeType.SM);
        this.mediaSizeMatcher[MediaSizeType.MD] = new MediaMatcherItem(this.window.matchMedia(MediaSizeQuieris.md) ,MediaSizeType.MD);
        this.mediaSizeMatcher[MediaSizeType.LG] = new MediaMatcherItem(this.window.matchMedia(MediaSizeQuieris.lg) ,MediaSizeType.LG);

        this.mediaSizeMatcher[MediaSizeType.XS].query.addListener(this.onChangeMediaHandler.bind(this, this.mediaSizeMatcher[MediaSizeType.XS]));
        this.mediaSizeMatcher[MediaSizeType.SM].query.addListener(this.onChangeMediaHandler.bind(this, this.mediaSizeMatcher[MediaSizeType.SM]));
        this.mediaSizeMatcher[MediaSizeType.MD].query.addListener(this.onChangeMediaHandler.bind(this,this.mediaSizeMatcher[MediaSizeType.MD]));
        this.mediaSizeMatcher[MediaSizeType.LG].query.addListener(this.onChangeMediaHandler.bind(this, this.mediaSizeMatcher[MediaSizeType.LG]));

        for(let i = 1; i < this.mediaSizeMatcher.length ; i++){
            if (this.mediaSizeMatcher[i].query.matches){
                this.currentMediaSize = this.mediaSizeMatcher[i];
            }
        };
        
       
    }

    public getMediaSize(){
        return this.currentMediaSize;
    }

    private onChangeMediaHandler(mediaSizeInfo){
        console.log(mediaSizeInfo);
        if (mediaSizeInfo.query.matches){
            this.currentMediaSize = mediaSizeInfo;
            this.mediaNotificationSubject.next(mediaSizeInfo);
        }
    }

} 