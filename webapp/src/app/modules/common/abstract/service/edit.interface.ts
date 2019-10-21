import {Observable} from 'rxjs';

export interface EditInterface {
  edit(id: number, data: any): Observable<any>;
}
