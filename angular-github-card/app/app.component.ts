import { Component } from '@angular/core'
@Component({
    selector: 'my-app',
    template: `
        <my-form [addUser]="addMoreUser"></my-form>                
        <my-card *ngFor="let login of logins" [login]="login"></my-card>                
    `
})

export class AppComponent {
    logins: Array<string> = ['trungk18']

    addMoreUser($event: MouseEvent, userName: string): void {
        $event.preventDefault();
        this.logins.concat(userName);
    }
}