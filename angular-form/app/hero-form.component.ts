import { Component } from '@angular/core'
import { Hero } from './hero'

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})

export class HeroFormComponent {
    active = true;
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    
    onSubmit() { this.submitted = true; }
}