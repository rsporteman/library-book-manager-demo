import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {BookHttpService} from '../book-http.service';
import {BookFormService} from '../book-form/book-form.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent extends EditComponent {
  successMessage = 'Livro editado com sucesso.';

  constructor(service: BookHttpService,
              route: ActivatedRoute,
              formService: BookFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
