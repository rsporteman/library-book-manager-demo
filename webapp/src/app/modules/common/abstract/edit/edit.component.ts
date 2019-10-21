import {AbstractComponent} from '../abstract.component';
import {Observable} from 'rxjs';

export abstract class EditComponent extends AbstractComponent {
  getService(): Observable<any> {
    return this.service.edit(this.id, this.form.value);
  }

  resetForm() {
  }
}
