import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ElementPageComponent } from './element-page/element-page.component';
import { EventComponent } from './event/event.component';
import { MemberComponent } from './member/member.component';
import { CollectionsComponent } from './collections/collections.component';

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
                    }
                ]
            },
            {
                path: 'elemental',
                component: ElementPageComponent
                // loadComponent: () => import('./element-page/element-page.component').then((c) => c.ElementPageComponent)
            },
            {
                path:'event',
                component:EventComponent
            },
            {
                path:'collections',
                component:CollectionsComponent
            },
            {
                path:'member',
                component:MemberComponent
            }
        ];
    }
}