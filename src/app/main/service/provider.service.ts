import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Provider } from '../api/provider';
import { Patient } from '../api/patient';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private readonly baseUrl = environment.baseUrlApi + '/provider';

  constructor(private http: HttpClient, private authService: AuthService) { }

  get (id: number): Observable<Provider> {
    return this.http.get<Provider>(`${this.baseUrl}/${id}`);
  }

  list (): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.baseUrl}`);
  }

  listPatients (): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/${this.authService.provider_id}/patients`);
  }
}
