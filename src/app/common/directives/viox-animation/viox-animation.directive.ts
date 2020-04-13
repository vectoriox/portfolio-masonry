import { Directive, OnDestroy, AfterViewInit, ElementRef, Input, OnInit, Renderer2, HostListener  } from "@angular/core";
import { AnimationBuilder, style, animate, AnimationPlayer } from '@angular/animations';
import { VioxAnimationStyles } from "./viox-animation-styles";
@Directive({
    selector: "[vioxAnimate], vioxAnimate"
  })
  export class VioxAnimationDirective implements OnDestroy, AfterViewInit {
    
    @Input("animationDelay") animationDelay: string;
    @Input("animationIn") animationIn: string;
    @Input("animationOut") animationOut: string;

    public animation:AnimationPlayer;
    public isAnimationPlayed= false;
    private _elTop:number;

    constructor(private _element: ElementRef, private _animationBuilder:AnimationBuilder, private  _renderer: Renderer2){
        this._renderer.setStyle(_element.nativeElement,'opacity', '0');
    }

    public ngOnInit(){
        this.animation = this.makeAnimation();
    }

    public  ngAfterViewInit(){
          setTimeout(()=>{
            this._elTop = this._element.nativeElement.offsetTop;
            console.log("Element Top: " + this._elTop);
            if(this.isVisable()){
              this.animation.play();
              this.isAnimationPlayed = true;
            }
          },0)
    }

    public makeAnimation():AnimationPlayer{
        let animateStyle = this.animationIn || "fade-up";
        let animation = VioxAnimationStyles[animateStyle](this.animationDelay);
          const myAnimation = this._animationBuilder.build(animation)
        return myAnimation.create(this._element.nativeElement);  

    }

    @HostListener('window:scroll', ['$event']) onScrollEvent($event){
       if(this.isVisable() && !this.isAnimationPlayed){
         this.animation.play();
         this.isAnimationPlayed = true;
       }
    }
    
    public isVisable(){
      console.log(this._elTop >= window.pageYOffset && this._elTop <= window.pageYOffset + window.innerHeight);
      return this._elTop >= window.pageYOffset && this._elTop <= window.pageYOffset + window.innerHeight;
    }

    public ngOnDestroy(){

    }

  }