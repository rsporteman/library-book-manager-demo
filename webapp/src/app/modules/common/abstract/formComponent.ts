import {ChangeDetectorRef, Input, OnChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormService} from './form.service';

export abstract class FormComponent implements OnChanges {

  @Input() form: FormGroup;
  @Input() formService: FormService;

  constructor(protected changeRef: ChangeDetectorRef) {
  }

  ngOnChanges(): void {
    this.changeRef.detectChanges();
  }

  get fieldOptions(): any {
    return this.formService.fieldOptions();
  }
}
