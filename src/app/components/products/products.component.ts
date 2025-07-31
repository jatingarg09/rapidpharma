import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Paracetamol', description: 'Pain reliever and fever reducer' },
    { name: 'Amoxicillin', description: 'Antibiotic for bacterial infections' },
    { name: 'Cetirizine', description: 'Allergy relief tablet' },
  ];
}
