import {Component} from '@angular/core';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {BookHttpService} from '../book-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookFormService} from '../book-form/book-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.css']
})
export class BookInsertComponent extends InsertComponent {
  successMessage = 'Livro cadastrado com sucesso.';

  constructor(service: BookHttpService,
              route: ActivatedRoute,
              formService: BookFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
