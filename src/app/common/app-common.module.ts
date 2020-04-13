import { ImageLoaderService } from "./services/image-loader.servcies";
import { MediaNotoficationSerivce } from "./services/media-size-service/media-size.service";
import { AppLoader } from "./components/loader/loader.component"
import { VioxAnimationDirective } from "./directives/viox-animation/viox-animation.directive";
import { VioxFullWindowHeightDirective } from "./directives/viox-full-window-height/viox-full-window-height.directive";
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppLoader,
    VioxAnimationDirective,
    VioxFullWindowHeightDirective
  ],
  imports: [
  ],
  providers: [ ImageLoaderService, MediaNotoficationSerivce ],
  exports:[
    AppLoader,
    VioxAnimationDirective,
    VioxFullWindowHeightDirective
  ]
})
export class AppCommonModule { }
