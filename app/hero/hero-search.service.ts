/**
 * Created by lamph on 2017/1/5.
 */
import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Hero}           from './hero.model';
@Injectable()
export class HeroSearchService {
    constructor(private http: Http) {
    }
    private apiBase = 'http://localhost:8600/';
    private heroesSearchUrl = this.apiBase+'hero/search';
    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`${this.heroesSearchUrl}/?name=${term}`)
            .map((r: Response) => r.json().data as Hero[]);
    }
}
