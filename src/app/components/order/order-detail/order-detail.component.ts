import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order.type';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent implements OnInit {
  orderId: any = null;
  order: any = Observable<Order | null>;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));
    this.order = this.orderService.get(this.orderId).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
