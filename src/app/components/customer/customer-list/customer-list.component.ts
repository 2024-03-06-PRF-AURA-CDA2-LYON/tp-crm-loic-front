import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.type';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers$: any = Observable<Customer[]>;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customers$ = this.customerService.getList().subscribe({
      next: (data) => {
        this.customers$ = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
