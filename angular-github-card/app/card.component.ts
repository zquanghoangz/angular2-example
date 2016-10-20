import { Component, Input, OnInit } from '@angular/core'
import { GithubService } from './github.service'

@Component({
    selector: 'my-card',
    template: `
        <div class="col-md-3">
            <div class="card">
                <img class="card-img-top img-fluid" src="{{card.avatar_url}}" alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title">{{card.login}}</h4>
                    <p class="card-text">{{card.bio}}</p>
                    <p class="card-text"><a href="">{{card.blog}}</a></p>
                </div>
            </div>
        </div>        
    `
})

export class CardComponent implements OnInit {
    @Input()
    login: string;

    card: any = {};
    constructor(private githubService: GithubService) {

    }

    ngOnInit(): void {
        this.githubService.getUser(this.login).then(response => { this.card = response; console.log(response) })
    }
}