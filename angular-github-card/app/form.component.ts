import { Component, Input } from '@angular/core'

@Component({
    selector: 'my-form',
    template: `
        <div class="col-md-12">
            <form class="form-inline">
                <div class="form-group">
                    <label for="userName">Username</label>
                    <input #userName type="text" class="form-control" id="userName" placeholder="trungk18" />
                </div>
                <button (click)="addUser($event, userName.value);" class="btn btn-primary">Add</button>
            </form>
        </div>        
        <input (keyup)="onKey($event)" />
        {{value}}
    `
})

export class FormComponent {
    @Input()
    addUser: void;

    value = '';

    onKey($event: KeyboardEvent): void {
        this.value += (<HTMLInputElement>$event.target).value + ' | '
    }   
}