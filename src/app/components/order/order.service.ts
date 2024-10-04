import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order.type';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = "http://localhost:8005/orders";

  constructor(private http: HttpClient) { }

  getList(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  get(id: string): Observable<Order | null> {
    if (!id) return of(null);
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }
}
