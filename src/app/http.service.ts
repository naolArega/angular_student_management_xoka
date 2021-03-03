import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private _refreshData$ = new Subject<void>();
  get refreshData$() {
    return this._refreshData$;
  }

  getObjects(type: string) {
    return this.http.get(`http://api.studentangularxoka.io:8080/${type}`);
  }
  getObject(type: string, id: string) {
    return this.http.get(`http://api.studentangularxoka.io:8080/${type}/${id}`);
  }
  createObject(type: string, newObject: object): Observable<HttpService> {
    return this.http.post<HttpService>(`http://api.studentangularxoka.io:8080/${type}`, newObject)
      .pipe(
        tap(() => {
          this._refreshData$.next();
        })
      );
  }
  updateObject(type: string, id: string, newObject: object): Observable<HttpService> {
    return this.http.patch<HttpService>(`http://api.studentangularxoka.io:8080/${type}/${id}`, newObject)
      .pipe(
        tap(() => {
          this._refreshData$.next();
        })
      );
  }
  deleteObject(type: string, id: string): Observable<HttpService> {
    return this.http.delete<HttpService>(`http://api.studentangularxoka.io:8080/${type}/${id}`)
      .pipe(
        tap(() => {
          this._refreshData$.next();
        })
      );
  }
}
