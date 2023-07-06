import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { HomePageComponent } from './home-page/home-page.component';
import { ElementPageComponent } from './element-page/element-page.component';
import { RouterModule } from '@angular/router';
import { PageRouting } from './page.routing';
import { AsideNavComponent } from '../components/aside-nav/aside-nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CollectionsComponent } from './collections/collections.component';
import { EventComponent } from './event/event.component';
import { MemberComponent } from './member/member.component';
import { ContentHomePageComponent } from './content-home-page/content-home-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSlickJsModule } from "ngx-slickjs";



@NgModule({
  declarations: [
    HomePageComponent,
    ElementPageComponent,
    AsideNavComponent,
    HeaderComponent,
    FooterComponent,
    EventComponent,
    MemberComponent,
    CollectionsComponent,
    ContentHomePageComponent,
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    ScrollingModule,
    SlickCarouselModule,
    RouterModule.forChild(PageRouting.routes())
  ]
})
export class PageModule { }
