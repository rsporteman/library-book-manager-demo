import {AbstractComponent} from '../abstract.component';
import {OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class CollectionComponent extends AbstractComponent implements OnInit {

  abstract sortColumn: { column: string, sort: string };
  successMessage = '';
  collection: Array<any> = [];
  pagination = {
    page: 1,
    totalItems: 0,
    itemsPerPage: 15,
  };
  searchText: string;

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getService().subscribe(response => {
      this.collection = response.data;
      this.pagination.totalItems = response.meta.total;
      this.pagination.itemsPerPage = response.meta.per_page;
    });
  }

  pageChanged(page) {
    this.pagination.page = page;
    this.refresh();
  }

  search(search) {
    this.searchText = search;
    this.refresh();
  }

  sort() {
    this.refresh();
  }

  getService(): Observable<any> {
    return this.service.collection({
      page: this.pagination.page,
      sort: this.sortColumn.column === '' ? null : this.sortColumn,
      search: this.searchText
    });
  }
}
