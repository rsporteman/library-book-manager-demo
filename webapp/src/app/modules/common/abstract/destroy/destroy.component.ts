import {AbstractComponent} from '../abstract.component';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../notify-message/notify-message.service.ts.service';
import {HttpService} from '../service/http.service';
import {FormService} from '../form.service';

export abstract class DestroyComponent extends AbstractComponent {

  protected constructor(protected service: HttpService,
                        protected route: ActivatedRoute,
                        protected formService: FormService,
                        protected location: Location,
                        protected router: Router,
                        protected notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
    this.form.disable();
  }

  getService(): Observable<any> {
    return this.service.destroy(this.id);
  }
}
