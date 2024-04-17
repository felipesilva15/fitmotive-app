import { User } from './../api/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = environment.baseUrlApi + '/user';

  constructor(private http: HttpClient) { }

  getUser (id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
      .pipe(
        tap(console.log)
      );
  }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`)
      .pipe(
        tap(console.log)
      );
  }
}
