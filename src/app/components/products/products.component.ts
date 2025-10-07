import { Component } from '@angular/core';
import { Product, products } from '../../data/products';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),

    // Optional: stagger effect for all cards
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate(
              '500ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProductsComponent {
   products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  constructor(private router: Router) {}

  ngOnInit() {
    this.products = products;
    this.categories = ['All', ...new Set(products.map(p => p.category))];
    this.filteredProducts = this.products;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = category === 'All'
      ? this.products
      : this.products.filter(p => p.category === category);
  }

   goToProduct(product: Product) {
    this.router.navigate(['/product', product.slug]);
  }
}
