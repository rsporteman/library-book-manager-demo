import {Injectable} from '@angular/core';
import {CollectionInterface} from './collection.interface';
import {DestroyInterface} from './destroy.interface';
import {EditInterface} from './edit.interface';
import {InsertInterface} from './insert.interface';
import {ShowInterface} from './show.interface';
import {Observable} from 'rxjs';
import {SearchParams} from '../../../../interfaces/search-params.interface';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {SearchParamsBuilder} from '../../search-params-builder/search-params-builder.class';

@Injectable({
  providedIn: 'root'
})

export abstract class HttpService implements CollectionInterface,
  DestroyInterface,
  EditInterface,
  InsertInterface,
  ShowInterface {

  slug = '';

  constructor(protected http: HttpClient) {
  }

  collection(searchParams: SearchParams): Observable<{ data: Array<any>, meta: any }> {
    const sParams = new SearchParamsBuilder(searchParams).makeObject();
    const params = new HttpParams((<any> sParams));
    return this.http.get<{ data: Array<any>, meta: any }>
    (this.getUrl(), {params});
  }

  destroy(id: number): Observable<any> {
    return this.http.delete
    (`${this.getUrl(id)}`);
  }

  insert(data: any): Observable<any> {
    return this.http.post<{ data: any }>(this.getUrl(), data).pipe(
      map(response => response.data)
    );
  }

  edit(id: number, data: any): Observable<any> {
    return this.http.put<{ data: any }>(`${this.getUrl(id)}`, data).pipe(
      map(response => response.data)
    );
  }

  show(id: number): Observable<any> {
    return this.http.get<{ data: any }>
    (`${this.getUrl(id)}`).pipe(
      map(response => response.data)
    );
  }

  protected getUrl(id: number = null): string {
    const url = `${environment.api.url}/${this.slug}`;
    if (id) {
      return url + '/' + id;
    }
    return url;
  }
}
