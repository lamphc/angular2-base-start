/**
 * Created by lamph on 2017/1/4.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import {QuestionService} from "../reactive-control/question.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/hero/dashboard/dashboard.component.html',
    styleUrls:['app/hero/dashboard/dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit{

    heroes: Hero[];

    questions: any[];

    constructor(private heroService:HeroService,private dynamicService: QuestionService) {

    }

    ngOnInit():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,4));

        //dynamic control dataLoad
        this.questions = this.dynamicService.getQuestions()
    }
}