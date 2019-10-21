import {Component} from '@angular/core';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {CategoryHttpService} from '../category-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryFormService} from '../category-form/category-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.css']
})
export class CategoryShowComponent extends ShowComponent {
  constructor(service: CategoryHttpService,
              route: ActivatedRoute,
              formService: CategoryFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
