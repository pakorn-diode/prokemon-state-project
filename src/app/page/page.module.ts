import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { ElementPageComponent } from './element-page/element-page.component';
import { RouterModule } from '@angular/router';
import { PageRouting } from './page.routing';
import { AsideNavComponent } from '../components/aside-nav/aside-nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { NewsComponent } from './news/news.component';
import { NgxTypedJsModule } from 'ngx-typed-js';


@NgModule({
  declarations: [
    HomePageComponent,
    ElementPageComponent,
    AsideNavComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    RouterModule.forChild(PageRouting.routes())
  ]
})
export class PageModule { }
