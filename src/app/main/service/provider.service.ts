import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Provider } from '../api/provider';
import { Patient } from '../api/patient';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private readonly baseUrl = environment.baseUrlApi + '/provider';

  constructor(private http: HttpClient) { }

  get (id: number): Observable<Provider> {
    return this.http.get<Provider>(`${this.baseUrl}/${id}`)
      .pipe(
        tap(console.log)
      );
  }

  list (): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.baseUrl}`)
      .pipe(
        tap(console.log)
      );
  }

  listPatients (id: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/${id}/patients`)
      .pipe(
        tap(console.log)
      );
  }
}
