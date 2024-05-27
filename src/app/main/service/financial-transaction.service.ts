import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancialTransactionService {
  private readonly baseUrl = environment.baseUrlApi + '/financial_transaction';

  constructor(private http: HttpClient) { }

  withdraw(amount: number): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/withdraw`, { amount: amount});
  }
}
