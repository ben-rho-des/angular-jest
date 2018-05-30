import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css']
})
export class SteponeComponent {

  @Output() valid = new EventEmitter<boolean>();
  model = {name: '', type: ''};

  constructor() { }

  public submit(value) {
    const valid = (value.name !== '' && value.type !== '');
    this.valid.emit(valid);
  }
}
