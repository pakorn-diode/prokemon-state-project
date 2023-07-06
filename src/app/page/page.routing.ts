import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ElementPageComponent } from './element-page/element-page.component';
import { EventComponent } from './event/event.component';
import { MemberComponent } from './member/member.component';
import { CollectionsComponent } from './collections/collections.component';
import { ContentHomePageComponent } from './content-home-page/content-home-page.component';

export class PageRouting {
    public static routes(): Routes {
        return [
            { 
                path: '',
                component: HomePageComponent,
                children:[
                    {
                        path:'',
                        component:ContentHomePageComponent
                    },
                    {
                        path:'events',
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