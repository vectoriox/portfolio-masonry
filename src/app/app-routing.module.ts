import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutMeComponent } from './components/about-me/about-me.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'aboutMe', component: AboutMeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes , {useHash:true})  
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
