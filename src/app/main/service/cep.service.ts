import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddressDTO } from '../api/address-dto';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private readonly baseUrl = environment.baseUrlApi;

  constructor(private http: HttpClient) { }

  getAddresByCep(cep: string): Observable<AddressDTO> {
    return this.http.get<AddressDTO>(`${this.baseUrl}/cep/${cep}`);
  }
}
