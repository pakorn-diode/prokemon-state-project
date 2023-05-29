import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ElementPageComponent } from './element-page/element-page.component';
import { NewsComponent } from './news/news.component';

export class PageRouting {
    public static routes(): Routes {
        return [
            { 
                path: '',
                component: HomePageComponent,
                children:[
                    {
                        path:'element',
                        component:ElementPageComponent
                    },
                    {
                        path:'news',
                        component:NewsComponent
                    }
                ]
            },
            {
                path: 'elemental',
                component: ElementPageComponent
                // loadComponent: () => import('./element-page/element-page.component').then((c) => c.ElementPageComponent)
            },
        ];
    }
}