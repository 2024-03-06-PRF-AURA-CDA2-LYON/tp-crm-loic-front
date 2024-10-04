import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../order.service';
import { Order } from '../order.type';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {
  orders$: any = Observable<Order[]>;

  constructor(private orderService: OrderService) {
  }
  ngOnInit(): void {
    this.orders$ = this.orderService.getList().subscribe({
      next: (data) => {
        this.orders$ = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


}
