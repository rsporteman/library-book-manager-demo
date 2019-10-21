import {OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpService} from './service/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyMessageService} from '../notify-message/notify-message.service.ts.service';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {FormService} from './form.service';

export abstract class AbstractComponent implements OnInit {
  abstract successMessage: string;
  slug: string;
  form: FormGroup;
  id: number;
  errors = {};

  protected constructor(protected service: HttpService,
                        protected route: ActivatedRoute,
                        protected formService: FormService,
                        protected location: Location,
                        protected router: Router,
                        protected notifyMessage: NotifyMessageService) {
    this.form = this.formService.make();
    this.slug = service.slug;
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.refresh();
  }

  refresh() {
    this.service.show(this.id).subscribe(
      response => {
        this.formService.hydrate(response, this.form);
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.getService()
      .subscribe((input) => {
        this.formService.reset(this.form);
        this.notifyMessage.success(this.successMessage);
        try {
          this.router.navigate(['/' + this.slug + '/' + input.id]);
        } catch (e) {
          this.router.navigate(['/' + this.slug]);
        }
      }, responseError => {
        this.errors = responseError.error.errors;
      });
  }

  goBack() {
    this.location.back();
  }

  goToEdit() {
    if (this.id) {
      return this.router.navigate(['/' + this.slug + '/edit/' + this.id]);
    }
    console.log('Não há id');
  }

  goToDelete() {
    if (this.id) {
      return this.router.navigate(['/' + this.slug + '/delete/' + this.id]);
    }
    console.log('Não há id');
  }

  showErrors() {
    return Object.keys(this.errors).length !== 0;
  }

  abstract getService(): Observable<any>;
}
