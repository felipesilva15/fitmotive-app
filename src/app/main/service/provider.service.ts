import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Provider } from '../api/provider';
import { Patient } from '../api/patient';
import { AuthService } from './auth.service';
import { Charge } from '../api/charge';
import { FinancialTransaction } from '../api/financial-transaction';
import { BankStatement } from '../api/bank-statement';
import { Activities } from '../api/activities';
import { Workout } from '../api/workout';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private readonly baseUrl = environment.baseUrlApi + '/provider';

  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data: Provider): Observable<Provider> {
    return this.http.post<Provider>(`${this.baseUrl}`, data);
  }

  get(id: number): Observable<Provider> {
    return this.http.get<Provider>(`${this.baseUrl}/${id}`);
  }

  list(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.baseUrl}`);
  }

  listPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/${this.authService.provider_id}/patients`);
  }

  listCharges(): Observable<Charge[]> {
    return this.http.get<Charge[]>(`${this.baseUrl}/${this.authService.provider_id}/charges`);
  }

  listFinancialTransactions(): Observable<BankStatement> {
    return this.http.get<BankStatement>(`${this.baseUrl}/${this.authService.provider_id}/financial_transactions`);
  }

  listWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}/${this.authService.provider_id}/workouts`);
  }

  logs(): Observable<Activities> {
    return this.http.get<Activities>(`${this.baseUrl}/${this.authService.provider_id}/logs`)
  }
}
