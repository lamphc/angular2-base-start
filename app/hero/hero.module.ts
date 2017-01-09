/**
 * Created by lamph on 2017/1/4.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';


import { HeroService } from './hero.service';

import { HeroDashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './list/hero-list.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroSearchComponent } from './search/hero-search.component';
import {QuestionService} from "./reactive-control/question.service";

import {DynamicFormComponent} from "./reactive-control/dynamic-component/dynamic-form.component";
import {DynamicFormQuestionComponent} from "./reactive-control/dynamic-component/df-component/dynamic-form-question";

@NgModule({
    imports:[CommonModule, FormsModule, RouterModule, HttpModule, ReactiveFormsModule],
    declarations:[HeroDashboardComponent, HeroListComponent, HeroDetailComponent, HeroSearchComponent, DynamicFormComponent, DynamicFormQuestionComponent],
    providers:[HeroService, QuestionService]
})

export class HeroModule {}