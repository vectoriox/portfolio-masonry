import { Injectable } from '@angular/core';
import { Observable, Subscriber, forkJoin } from 'rxjs';
import { concatMap, take, map, mergeMap, merge } from 'rxjs/operators';


@Injectable()
export class ImageLoaderService {

  public loadImages(imagesSrc: string[]){
    return forkJoin(imagesSrc.map(imageSrc=>{ return this.loadImage(imageSrc)}))
  } 


  public loadImage(imageSrc: string): Observable<any> {
    return new Observable((sebcriber)=>{
        var img = new Image();
        img.src = imageSrc;
        img.onload = ()=>{
            sebcriber.next(img);
            sebcriber.complete();    
        }
    }) 
  }


}