import {Observable} from 'rxjs';

export interface DestroyInterface {
  destroy(id: number): Observable<any>;
}

