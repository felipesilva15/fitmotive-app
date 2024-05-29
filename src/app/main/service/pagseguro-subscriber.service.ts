import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Charge } from '../api/charge';
import { PagseguroSubscription } from '../api/pagseguro-subscription';

@Injectable({
  providedIn: 'root'
})
export class PagseguroSubscriberService {
  private readonly baseUrl = environment.baseUrlApi + '/pagseguro/subscriber';

  constructor(private http: HttpClient) { }

  subscription(id: number): Observable<PagseguroSubscription> {
    return this.http.get<PagseguroSubscription>(`${this.baseUrl}/${id}/subscription`);
  }
}
