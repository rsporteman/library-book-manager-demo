import {Observable} from 'rxjs';

export interface ShowInterface {
  show(id: number): Observable<any>;
}
