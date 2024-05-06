import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../api/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly baseUrl = environment.baseUrlApi + '/dashboard';

  constructor(private http: HttpClient) { }

  list(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${this.baseUrl}`);
  }
}
