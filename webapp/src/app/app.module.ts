import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Select2Module} from 'ng2-select2';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './modules/common/bootstrap/navbar/navbar.component';
import {CardErrorComponent} from './modules/common/bootstrap/card-error/card-error.component';
import {ListErrorComponent} from './modules/common/bootstrap/list-error/list-error.component';
import {FieldErrorComponent} from './modules/common/bootstrap/field-error/field-error.component';
import {SearchComponent} from './modules/common/search/search.component';
import {BookFormComponent} from './modules/book/book-form/book-form.component';
import {BookDestroyComponent} from './modules/book/book-destroy/book-destroy.component';
import {BookInsertComponent} from './modules/book/book-insert/book-insert.component';
import {BookEditComponent} from './modules/book/book-edit/book-edit.component';
import {BookShowComponent} from './modules/book/book-show/book-show.component';
import {BookTableComponent} from './modules/book/book-table/book-table.component';
import {CategoryDestroyComponent} from './modules/category/category-destroy/category-destroy.component';
import {CategoryEditComponent} from './modules/category/category-edit/category-edit.component';
import {CategoryFormComponent} from './modules/category/category-form/category-form.component';
import {CategoryInsertComponent} from './modules/category/category-insert/category-insert.component';
import {CategoryShowComponent} from './modules/category/category-show/category-show.component';
import {CategoryTableComponent} from './modules/category/category-table/category-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    CardErrorComponent,
    ListErrorComponent,
    FieldErrorComponent,
    NavbarComponent,
    SearchComponent,
    BookDestroyComponent,
    BookEditComponent,
    BookFormComponent,
    BookInsertComponent,
    BookShowComponent,
    BookTableComponent,
    CategoryDestroyComponent,
    CategoryEditComponent,
    CategoryFormComponent,
    CategoryInsertComponent,
    CategoryShowComponent,
    CategoryTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Select2Module,
    BrowserAnimationsModule,
    NgSelectModule,
  ],
  exports: [AppComponent, CardErrorComponent, FieldErrorComponent],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
