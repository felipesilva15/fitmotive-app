import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Workout } from '../api/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private readonly baseUrl = environment.baseUrlApi + '/workout';

  constructor(private http: HttpClient) { }

  create(data: Workout): Observable<Workout> {
    return this.http.post<Workout>(`${this.baseUrl}`, data);
  }

  update(data: Workout, id: number): Observable<Workout> {
    return this.http.put<Workout>(`${this.baseUrl}/${id}`, data);
  }

  get (id: number): Observable<Workout> {
    return this.http.get<Workout>(`${this.baseUrl}/${id}`);
  }

  list (): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}`);
  }

  delete (id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
