import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/abstract/formComponent';
import {CategoryHttpService} from '../../category/category-http.service';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent extends FormComponent implements OnInit {
  items = [];
  protected selectFormControlName: string;

  constructor(protected changeRef: ChangeDetectorRef,
              private selectService: CategoryHttpService) {
    super(changeRef);
    this.selectFormControlName = 'category_id';
  }

  ngOnInit(): void {
    this.selectService.collection({
      page: 1,
      sort: name,
    }).subscribe(response => {
      this.items = response.data;
    });
    console.log(this.form.get('description'));
  }

  changeSelect(event){
    console.log(event);
  }
}
