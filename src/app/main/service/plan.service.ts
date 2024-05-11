import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plan } from '../api/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private readonly baseUrl = environment.baseUrlApi + '/plan';

  constructor(private http: HttpClient) { }

  list(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.baseUrl}`);
  }
}
