import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = "http://localhost:8005/customers";

  constructor(private http: HttpClient) { }

  getList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  get(id: string): Observable<Customer | null> {
    if (!id) return of(null);
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  add(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

}
