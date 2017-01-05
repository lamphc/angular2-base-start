/**
 * Created by lamph on 2017/1/4.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';


@Component({
    // moduleId:module.id,
    selector:'hero-list',
    templateUrl:'app/hero/list/hero-list.component.html',
    styleUrls:['app/hero/list/hero-list.component.css']

})

export class HeroListComponent implements OnInit{

    constructor(private heroService:HeroService, private router:Router) {}

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }


    title = 'Tour of Heroes';
    heroes;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

    gotoDetail(): void {
        this.router.navigate(['/hero/detail', this.selectedHero.id]);
    }
}