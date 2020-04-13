import { Directive, OnDestroy, Input, ElementRef, Renderer2, HostListener, OnInit  } from "@angular/core";

@Directive({
    selector: "[vioxFullWindowHeight], vioxFullWindowHeight"
  })
  export class VioxFullWindowHeightDirective implements OnDestroy, OnInit {

    @Input("useMinHeight") useMinHeight: boolean;

    constructor(private _element: ElementRef, private  _renderer: Renderer2){   
    }

    ngOnInit(){
        this._renderer.setStyle(this._element.nativeElement, this.useMinHeight ? "min-height" :"height",`${window.innerHeight}px`)
    }

    @HostListener('window:resize', ['$event']) onResize($event){
        this._renderer.setStyle(this._element.nativeElement,this.useMinHeight ? "min-height" :"height",`${window.innerHeight}px`)
    }
    

    public ngOnDestroy(){
    }

  }