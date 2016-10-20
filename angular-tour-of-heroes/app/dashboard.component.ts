import { Component, OnInit } from '@angular/core'
import { Hero } from './hero'
import { HeroService } from './hero.service'

import {Router} from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    styleUrls: ['dashboard.component.css'],
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Array<Hero>;
    constructor(private heroService: HeroService, private router: Router){}

    ngOnInit():void {
        this.heroService.getHeroes()
            .then(response => this.heroes = response);
            
        this.heroService.getUser().then(response => console.log(response))
    }
    
    goToDetail(hero: Hero): void{ 
        let link = ['detail', hero.id]
        this.router.navigate(link)
    }
}
