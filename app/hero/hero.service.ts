/**
 * Created by lamph on 2017/1/4.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Hero } from './hero.model';

import 'rxjs/add/operator/toPromise';


@Injectable()

export class HeroService {
    // URL to web api
    private apiBase = 'http://localhost:8600/';
    private heroesListUrl = this.apiBase+'hero/list';
    private updateHeroUrl = this.apiBase+'hero/update';
    private createHeroUrl = this.apiBase+'hero/create';
    private deleteHeroUrl = this.apiBase+'hero/delete';


    constructor(private http:Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesListUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.createHeroUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }


    private headers = new Headers({'Content-Type': 'application/json'});
    update(hero: Hero): Promise<Hero> {
        const url = `${this.updateHeroUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.deleteHeroUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



}