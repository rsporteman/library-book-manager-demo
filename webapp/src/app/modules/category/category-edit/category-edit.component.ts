import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CategoryHttpService} from '../category-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {CategoryFormService} from '../category-form/category-form.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent extends EditComponent {
  successMessage = 'Categoria editada com sucesso.';

  constructor(service: CategoryHttpService,
              route: ActivatedRoute,
              formService: CategoryFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
