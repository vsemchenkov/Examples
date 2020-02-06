import { NgModule } from '@angular/core';
import {Routes, RouterModule, RouteConfigLoadStart} from '@angular/router';
import {RenderComponent} from "./render/render.component";


const routes: Routes = [
  { path: 'search/:name/:type', component: RenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
