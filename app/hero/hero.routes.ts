/**
 * Created by lamph on 2017/1/4.
 */
import { Route } from '@angular/router';

import { HeroDashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroListComponent } from './list/hero-list.component';

export const HeroRoutes: Route[] = [
    {
        path:'hero/dashboard',
        component:HeroDashboardComponent
    },
    {
        path:'hero/list',
        component:HeroListComponent
    },
    {
        path:'hero/detail/:id',
        component:HeroDetailComponent
    }
]