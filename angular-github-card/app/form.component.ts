import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'my-form',
    template: `
        <div class="col-md-12">
            <form class="form-inline">
                <div class="form-group">
                    <label for="userName">Username</label>
                    <input #userName type="text" class="form-control" id="userName" placeholder="trungk18" />
                </div>
                <button (click)="onInputClick($event, userName.value);" class="btn btn-primary">Add</button>
            </form>
        </div>        
    `
})

export class FormComponent {
    @Output() inputClick: EventEmitter<any> = new EventEmitter<any>()

    onInputClick($event: KeyboardEvent, userName: string): void {   
        $event.preventDefault()     
        this.inputClick.emit({            
            login: userName
        })
    }
}