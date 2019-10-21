import {Component} from '@angular/core';
import {CategoryHttpService} from '../category-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryFormService} from '../category-form/category-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-category-destroy',
  templateUrl: './category-destroy.component.html',
  styleUrls: ['./category-destroy.component.css']
})
export class CategoryDestroyComponent extends DestroyComponent {
  successMessage = 'Categoria desativada com sucesso.';

  constructor(service: CategoryHttpService,
              route: ActivatedRoute,
              formService: CategoryFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
