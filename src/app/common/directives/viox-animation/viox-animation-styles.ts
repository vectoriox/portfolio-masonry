import { AnimationBuilder, style, animate, keyframes } from '@angular/animations';

/**********  Entries Animations ********************/

export const VioxAnimationStyles: any = {}

VioxAnimationStyles["fade-up"] = (delay)=>{
    return [style({ opacity: 0, transform: "translate3d(0,30px,0)"}),
    animate(`1.9s ${delay} cubic-bezier(.175,.885,.32,1.275)`, style({ opacity: 1, transform: "translateZ(0)" }))]
}

VioxAnimationStyles["flip-left"] = (delay)=>{
    return [style({
        opacity: 0,
        transform: "perspective(2500px) rotateY(-100deg)"
    }),
    animate(`1s ${delay} cubic-bezier(.175,.885,.32,1.275)`, style({ opacity: 1, transform: "perspective(2500px) rotateY(0)" }))]
}

VioxAnimationStyles["flip-up"] = (delay)=>{
    return [style({
        opacity: 0,
        transform: "perspective(2500px) rotateX(-100deg)"
    }),
    animate(`1s ${delay} cubic-bezier(.175,.885,.32,1.275)`, style({ opacity: 1, transform: "perspective(2500px) rotateY(0)" }))]
}

VioxAnimationStyles["zoom-in-up"] = (delay)=>{
    return [style({
        opacity: 0,
        transform: "translate3d(0,100px,0) scale(.6)"
    }),
    animate(`1s ${delay} cubic-bezier(.175,.885,.32,1.275)`, style({ opacity: 1, transform: "translateZ(0) scale(1)" }))]
}