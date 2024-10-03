import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HeaderComponent } from './header/header.component';
import customersDatas from '../customerData.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  customers = customersDatas;
  title = 'CRM2i';
  mail1 = 'f.lacaste@veolia.fr';
  mail2 = 'guiadra@enedis.fr';
  mail3 = 'hulk@marvel.com';
}
