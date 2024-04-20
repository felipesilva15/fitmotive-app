import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../api/token';
import { User } from '../api/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.baseUrlApi;
  private readonly tokenPropertyName = 'access_token';
  private readonly loggedUserPropertyName = 'logged_user'

  constructor(private http: HttpClient) { }

  // retorna o cookie de autenticação
  get token (): string {
    return localStorage.getItem(this.tokenPropertyName) ?? '';
  }

  login (user: User): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/login`, user)
      .pipe(
        tap((res: any) => {
          localStorage.setItem(this.tokenPropertyName, res.access_token);
        })
      );
  }

  logout (): Observable<void> {
    return this.http.post(`${this.baseUrl}/logout`, {})
      .pipe(
        tap((res: any) => {
          localStorage.removeItem(this.tokenPropertyName);
        })
      );
  }
}
