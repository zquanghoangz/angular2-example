import { Component } from '@angular/core'

@Component({
    selector: 'loop-back',
    template: `
    <input #box (keyup.enter)="onKey(box.value)" (blur)="values=box.value">
    <p>{{values}}</p>
  `
})
export class LoopbackComponent {
    values: string = ''
    onKey(value): void {
        this.values += value + '|';
    }
}