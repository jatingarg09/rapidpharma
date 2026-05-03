import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Product, products } from '../../data/products';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgClass } from '@angular/common';
import { MatOption } from '@angular/material/core';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
        ]),
        trigger('listAnimation', [
            transition('* => *', [
                style({ opacity: 0 }),
                animate('300ms ease-in', style({ opacity: 1 })),
            ]),
        ]),
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms ease-in', style({ opacity: 1 })),
            ]),
            transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
        ]),
    ],
    standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatLabel,
        MatSelect,
        NgFor,
        MatOption,
        MatInput,
        MatIcon,
        MatSuffix,
        NgClass,
        RouterLink,
    ],
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  pagedProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  pageSize = 12; // Changed from 8 to 12
  searchText = '';
  errorMessage: string = '';
  currentPage = 0;
  totalPages = 1;
  pageNumbers: number[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    try {
      this.products = products;
      this.categories = ['All', ...new Set(products.map(p => p.category))];
      this.filteredProducts = [...this.products];
      this.filterProducts();
    } catch (error) {
      this.errorMessage = 'Error loading products';
      console.error('Error:', error);
    }
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts =
      category === 'All'
        ? this.products
        : this.products.filter((p) => p.category === category);
    this.updatePagedProducts();
  }

  onSearchChange() {
    // searchText is already bound, just ensure it's lowercase for the filter
    this.searchText = this.searchText ? this.searchText.toLowerCase().trim() : '';
    this.filterProducts();
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;
      const matchesSearch =
        !this.searchText ||
        (product.name?.toLowerCase() || '').includes(this.searchText) ||
        (product.composition?.toLowerCase() || '').includes(this.searchText);
      return matchesCategory && matchesSearch;
    });
    this.currentPage = 0; // Reset page when filtering
    const startIndex = this.currentPage * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(
      startIndex,
      startIndex + this.pageSize,
    );
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    this.updatePagedProducts();
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.updatePagedProducts();
  }

  private updatePagedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(
      startIndex,
      startIndex + this.pageSize,
    );
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i);
  }

  goToProduct(product: Product) {
    this.router.navigate(['/products', product.slug]);
  }

  getVisiblePages(): number[] {
    const totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    if (this.currentPage === 0) {
      return [0, 1, 2];
    }

    if (this.currentPage === totalPages - 1) {
      return [totalPages - 3, totalPages - 2, totalPages - 1];
    }

    return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
  }
}
