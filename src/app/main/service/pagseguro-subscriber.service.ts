import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagseguroSubscription } from '../api/pagseguro-subscription';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagseguroSubscriberService {
  private readonly baseUrl = environment.baseUrlApi + '/pagseguro/subscriber';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getSubscription(): Observable<PagseguroSubscription> {
    return this.http.get<PagseguroSubscription>(`${this.baseUrl}/${this.authService.user_id}/subscription`);
  }
}
