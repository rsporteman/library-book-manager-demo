import {FormBuilder, FormGroup} from '@angular/forms';
import {FieldsOptions} from './fields-options';
import {Model} from './model';

export abstract class FormService {
  constructor(protected formBuilder: FormBuilder) {
  }

  abstract fieldOptions(): FieldsOptions;

  abstract hydrate(model: Model, form: FormGroup);

  abstract make();

  abstract reset(form: FormGroup);
}
