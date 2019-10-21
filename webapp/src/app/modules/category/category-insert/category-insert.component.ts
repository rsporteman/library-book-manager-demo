import {Component} from '@angular/core';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {CategoryHttpService} from '../category-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryFormService} from '../category-form/category-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.css']
})
export class CategoryInsertComponent extends InsertComponent {
  successMessage = 'Categoria criada com sucesso.';

  constructor(service: CategoryHttpService,
              route: ActivatedRoute,
              formService: CategoryFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
