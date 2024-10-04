import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/customer.type';
import { CustomerService } from '../customer/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent implements OnInit {
  customerId: any = null;
  customer: any = Observable<Customer | null>;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.customer = this.customerService.get(this.customerId).subscribe({
      next: (data) => {
        this.customer = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
