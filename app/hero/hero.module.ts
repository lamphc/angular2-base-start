/**
 * Created by lamph on 2017/1/4.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';


import { HeroService } from './hero.service';

import { HeroDashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './list/hero-list.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroSearchComponent } from './search/hero-search.component';



// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from '../in-memory-data.service';

@NgModule({
    imports:[CommonModule, FormsModule, RouterModule, HttpModule],
    declarations:[HeroDashboardComponent, HeroListComponent, HeroDetailComponent, HeroSearchComponent],
    providers:[HeroService]
})

export class HeroModule {}