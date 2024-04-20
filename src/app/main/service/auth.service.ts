import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../api/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.baseUrlApi;
  private readonly cookieName = 'logged_user';

  constructor(private http: HttpClient) { }

  // retorna o cookie de autenticação
  get token (): string {
    return localStorage.getItem(this.cookieName) ?? '';
  }

  // Obtém o valor de um cookie
  private getCookie (cookieName: string): string {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieFullName = `${cookieName}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieFullName) == 0) {
        return c.substring(cookieFullName.length, c.length);
      }
    }

    return '';
  }

  login (user: any): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/login`, user)
      .pipe(
        tap((res: any) => {
          localStorage.setItem(this.cookieName, res.access_token);
        })
      );
  }

  logout (): Observable<void> {
    return this.http.post(`${this.baseUrl}/logout`, {})
      .pipe(
        tap((res: any) => {
          localStorage.removeItem(this.cookieName);
        })
      );
  }
}
