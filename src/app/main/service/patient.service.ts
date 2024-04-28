import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../api/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly baseUrl = environment.baseUrlApi + '/patient';

  constructor(private http: HttpClient) { }

  create(data: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.baseUrl}`, data);
  }

  get (id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/${id}`);
  }

  list (): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}`);
  }

  delete (id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
