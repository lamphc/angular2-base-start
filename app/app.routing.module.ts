import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { AboutRoutes } from './about/about.routes';

import { TodoRoutes } from './todo/todo.routes';
import { HeroRoutes } from './hero/hero.routes';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'hero/dashboard',
        pathMatch: 'full'
    },
  ...AboutRoutes,
  ...TodoRoutes,
  ...HeroRoutes
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}