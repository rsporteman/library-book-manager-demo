import {Observable} from 'rxjs';

export interface InsertInterface {
  insert(data: any): Observable<any>;
}
