import {Injectable} from '@angular/core';
import {FormService} from '../../common/abstract/form.service';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      name: {
        id: 'name',
        label: 'Nome',
        placeholder: 'Digite a Categoria',
        minlength: 3,
        maxlength: 255
      },
      description: {
        id: 'description',
        label: 'Descrição',
        placeholder: 'Digite uma descrição curta para a categoria',
        minlength: 3,
        maxlength: 255
      },
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.name);
    form.get('description').setValue(model.description);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      name: [null, [
        Validators.required,
        Validators.minLength(o.name.minlength),
        Validators.maxLength(o.name.maxlength)
      ]],
      description: [null, [
        Validators.required,
        Validators.minLength(o.description.minlength),
        Validators.maxLength(o.description.maxlength)
      ]]
    });
  }

  reset(form) {
    form.get('name').setValue(null);
    form.get('description').setValue(null);
    return form;
  }
}
