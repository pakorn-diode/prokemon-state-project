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
import { NgxSlickJsModule } from "ngx-slickjs";
import { LightgalleryModule } from 'lightgallery/angular/13';



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
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs:
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss:
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" // if you are set null, this css won't load
      }
    }),
    LightgalleryModule,
    RouterModule.forChild(PageRouting.routes())
  ]
})
export class PageModule { }
