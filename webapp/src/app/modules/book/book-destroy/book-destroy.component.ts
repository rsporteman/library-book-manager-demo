import {Component} from '@angular/core';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {BookHttpService} from '../book-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookFormService} from '../book-form/book-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-book-destroy',
  templateUrl: './book-destroy.component.html',
  styleUrls: ['./book-destroy.component.css']
})
export class BookDestroyComponent extends DestroyComponent {
  successMessage = 'Livro apagado com sucesso.';

  constructor(service: BookHttpService,
              route: ActivatedRoute,
              formService: BookFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
