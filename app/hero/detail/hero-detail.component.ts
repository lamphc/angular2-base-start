/**
 * Created by lamph on 2017/1/4.
 */
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero/detail/hero-detail.component.html',
    styleUrls:['app/hero/detail/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    @Input()
    heroc: Hero;

    constructor( private heroService: HeroService,
                 private route: ActivatedRoute,
                 private location: Location)
    {}

    ngOnInit():void {
        console.log(this.route.params)
        this.route.params
            .switchMap((params:Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.heroc = hero);
    }

    save(): void {
        this.heroService.update(this.heroc)
            .then(() => this.goBack());
    }


    goBack() {
        this.location.back();
    }



}