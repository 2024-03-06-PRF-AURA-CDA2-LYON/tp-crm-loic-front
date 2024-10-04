import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerListComponent, HeaderComponent, CustomerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRM2i';

}
