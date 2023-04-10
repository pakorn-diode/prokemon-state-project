import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ElementPageComponent } from './element-page/element-page.component';

export class PageRouting {
    public static routes(): Routes {
        return [
            { 
                path: '',
                component: HomePageComponent,
                children: [
                    {
                        path: 'element',
                        component: ElementPageComponent
                        // loadComponent: () => import('./element-page/element-page.component').then((c) => c.ElementPageComponent)
                    },
                ]
            },
        ];
    }
}