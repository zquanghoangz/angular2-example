import { Component } from '@angular/core'
@Component({
    selector: 'my-app',
    template: `
        <my-form (inputClick)="onInputClick($event)"></my-form>                
        <my-card *ngFor="let login of logins" [login]="login"></my-card>                
    `
})

export class AppComponent {
    logins: Array<string> = ['trungk18']

    onInputClick(obj: any): void {                
        this.logins.push(obj.login)
    }
}