import {Component, Input} from '@angular/core'

@Component({
    selector: 'my-form',
    template: `
        <div class="col-md-12">
            <form class="form-inline">
                <div class="form-group">
                    <label for="userName">Username</label>
                    <input #userName type="text" class="form-control" id="userName" placeholder="trungk18" />
                </div>
                <button (click)="addUser(userName);" class="btn btn-primary">Add</button>
            </form>
        </div>        
    `
})

export class FormComponent{
    @Input()
    addUser: void;
}