import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidationMessage} from '../../validation-message/validation-message';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css'],
})
export class FieldErrorComponent {

  @Input()
  field: FormControl;
  @Input()
  label: string;
  @Input()
  messages;

  get errorKey() {
    return Object.keys(this.errors);
  }

  get errors() {
    return this.field.errors;
  }

  showError() {
    return this.field.invalid && (this.field.dirty || this.field.touched);
  }

  getMessage(error) {
    // console.log(error);
    // console.log(this.messages);
    const replaceTokens = [this.label];
    if (this.messages && this.messages.hasOwnProperty(error)) {
      if (Array.isArray(this.messages[error])) {
        replaceTokens.concat(this.messages[error]);
      } else {
        replaceTokens.push(this.messages[error]);
      }
    }
    return ValidationMessage.getMessage(error, replaceTokens);
  }

}
