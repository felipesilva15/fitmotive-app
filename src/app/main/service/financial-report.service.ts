import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Defaulter } from '../api/defaulter';
import { Observable } from 'rxjs';
import { FinancialDashboard } from '../api/financial-dashboard';

@Injectable({
  providedIn: 'root'
})
export class FinancialReportService {
  private readonly baseUrl = environment.baseUrlApi + '/reports/financial';

  constructor(private http: HttpClient) { }

  listDefaulters(): Observable<Defaulter[]> {
    return this.http.get<Defaulter[]>(`${this.baseUrl}/defaulters`);
  }

  listDashboard(): Observable<FinancialDashboard> {
    return this.http.get<FinancialDashboard>(`${this.baseUrl}/dashboard`);
  }
}
