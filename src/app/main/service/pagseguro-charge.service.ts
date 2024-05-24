import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Charge } from '../api/charge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagseguroChargeService {
  private readonly baseUrl = environment.baseUrlApi + '/pagseguro/charge';

  constructor(private http: HttpClient) { }

  checkStatus(id: number): Observable<Charge> {
    return this.http.patch<Charge>(`${this.baseUrl}/${id}/check-status`, {});
  }
}
