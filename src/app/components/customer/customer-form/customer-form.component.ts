import id from '@angular/common/locales/id';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../customer/customer.type';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit {

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
  }
  addCustomer(customer: Customer): void {
    this.customerService.add(customer);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
