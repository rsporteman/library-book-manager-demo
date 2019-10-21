import {Component} from '@angular/core';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {BookHttpService} from '../book-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookFormService} from '../book-form/book-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent extends ShowComponent {
  constructor(service: BookHttpService,
              route: ActivatedRoute,
              formService: BookFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
