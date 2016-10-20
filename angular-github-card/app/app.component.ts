import {Component} from '@angular/core'
@Component({
    selector: 'my-app',
    template: `
        <my-form [addUser]="addMoreUser"></my-form>
        <div *ngFor="let login of logins">
            <my-card [login]="login"></my-card>
        </div>        
    `
})

export class AppComponent {
    logins: Array<string> = ['trungk18']

    addMoreUser(userName: string):void { 
        this.logins.concat(userName);
    }
}