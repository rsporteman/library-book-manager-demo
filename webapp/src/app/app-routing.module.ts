import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryDestroyComponent} from './modules/category/category-destroy/category-destroy.component';
import {CategoryEditComponent} from './modules/category/category-edit/category-edit.component';
import {CategoryShowComponent} from './modules/category/category-show/category-show.component';
import {CategoryInsertComponent} from './modules/category/category-insert/category-insert.component';
import {CategoryTableComponent} from './modules/category/category-table/category-table.component';
import {BookDestroyComponent} from './modules/book/book-destroy/book-destroy.component';
import {BookEditComponent} from './modules/book/book-edit/book-edit.component';
import {BookShowComponent} from './modules/book/book-show/book-show.component';
import {BookInsertComponent} from './modules/book/book-insert/book-insert.component';
import {BookTableComponent} from './modules/book/book-table/book-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full'
  },
  // *******************************
  {
    path: 'book',
    component: BookTableComponent,
  },
  {
    path: 'book/new',
    component: BookInsertComponent,
  },
  {
    path: 'book/:id',
    component: BookShowComponent,
  },
  {
    path: 'book/edit/:id',
    component: BookEditComponent,
  },
  {
    path: 'book/delete/:id',
    component: BookDestroyComponent,
  },
  // *******************************
  {
    path: 'category',
    component: CategoryTableComponent,
  },
  {
    path: 'category/new',
    component: CategoryInsertComponent,
  },
  {
    path: 'category/:id',
    component: CategoryShowComponent,
  },
  {
    path: 'category/edit/:id',
    component: CategoryEditComponent,
  },
  {
    path: 'category/delete/:id',
    component: CategoryDestroyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
