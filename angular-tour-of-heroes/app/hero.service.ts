import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';  // URL to web api
    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES)
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
    }

    getUser(): Promise<any> {
        return this.http.get('https://api.github.com/users/trungk18').toPromise().then(response => response.json()).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}   