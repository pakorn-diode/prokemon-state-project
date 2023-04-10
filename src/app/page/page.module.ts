import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { ElementPageComponent } from './element-page/element-page.component';
import { RouterModule } from '@angular/router';
import { PageRouting } from './page.routing';


@NgModule({
  declarations: [
    HomePageComponent,
    ElementPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PageRouting.routes())
  ]
})
export class PageModule { }
