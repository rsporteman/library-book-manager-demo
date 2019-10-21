import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {FormService} from '../../common/abstract/form.service';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      isbn: {
        id: 'isbn',
        label: 'ISBN',
        placeholder: 'Digite o código ISBN do livro.',
        minlength: 1,
        maxlength: 240
      },
      title: {
        id: 'title',
        label: 'Título',
        placeholder: 'Digite o título do livro.',
        minlength: 1,
        maxlength: 240
      },
      author: {
        id: 'author',
        label: 'Autor',
        placeholder: 'Digite o autor do livro.',
        minlength: 1,
        maxlength: 240
      },
      description: {
        id: 'description',
        label: 'Descrição',
        placeholder: 'Digite a descrição do livro.',
        minlength: 3,
        maxlength: 5000
      },
      category_id: {
        id: 'category_id',
        label: 'Categoria',
        min: 1,
        max: 9999
      },
    };
  }

  hydrate(model, form) {
    form.get('isbn').setValue(model.isbn);
    form.get('title').setValue(model.title);
    form.get('author').setValue(model.author);
    form.get('description').setValue(model.description);
    form.get('category_id').setValue(model.category.id);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      isbn: [null, [
        Validators.required,
        Validators.minLength(o.isbn.minlength),
        Validators.maxLength(o.isbn.maxlength)
      ]],
      title: [null, [
        Validators.required,
        Validators.minLength(o.title.minlength),
        Validators.maxLength(o.title.maxlength)
      ]],
      author: [null, [
        Validators.required,
        Validators.minLength(o.author.minlength),
        Validators.maxLength(o.author.maxlength)
      ]],
      description: [null, [
        Validators.required,
        Validators.minLength(o.description.minlength),
        Validators.maxLength(o.description.maxlength)
      ]],
      category_id: [null, [
        Validators.required,
        Validators.min(o.category_id.min),
      ]]
    });
  }

  reset(form) {
    form.get('title').setValue(null);
    form.get('author').setValue(null);
    form.get('description').setValue(null);
    form.get('category_id').setValue(null);
    return form;
  }
}
