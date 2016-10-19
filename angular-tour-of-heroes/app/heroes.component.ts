import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    styleUrls: ['heroes.component.css'],
    templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService, private router: Router) {

    }
    heroes: Hero[]
    private selectedHero: Hero
    getHeroes(): void {
        this.heroService.getHeroes().then(response => this.heroes = response);
    }

    onSelectHero(hero: Hero): void {
        this.selectedHero = hero
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    goToDetail(): void {
        let link = ['detail', this.selectedHero.id]
        this.router.navigate(link)
    }
}
