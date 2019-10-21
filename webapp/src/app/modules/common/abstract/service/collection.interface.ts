import {SearchParams} from '../../../../interfaces/search-params.interface';
import {Observable} from 'rxjs';

export interface CollectionInterface {
  collection(searchParams: SearchParams): Observable<{ data: Array<any>, meta: any }>;
}
