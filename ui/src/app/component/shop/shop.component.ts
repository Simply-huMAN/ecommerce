import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/Product';
import { ProductFilter } from '../../class/ProductFilter';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule , MatCardModule, MatButtonModule, MatProgressSpinnerModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatSliderModule, MatAccordion, MatExpansionModule, MatIconModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  fetching = true;
  error = false;
  products: Product[] = [];
  productFilter: FormGroup = this.fb.group({
    category: '',
    minPrice: 1000,
    maxPrice: 1000000,
    rating: 0
  });
  categories: string[] = [
    "ALL",
    "ELECTRONICS",
    "FASHION",
    "HOME APPLIANCES",
    "BOOKS",
    "SPORTS",
    "TOYS",
    "BEAUTY",
    "HEALTH",
    "GROCERY",
    "AUTOMOTIVE"
  ];
  selectedCategory: string = '';

  constructor(private httpClient: HttpClient,  private fb: FormBuilder) {}

  ngOnInit() {
    console.log(`Loading products...`)
    this.fetchProducts();
    console.log(this.products);
  }

  fetchProducts(){
    this.httpClient.get('http://localhost:8080/products')
      .subscribe((response) => {
        console.log(response);
        this.products = response as Product[];
        this.fetching = false;
        console.log(this.products);
      }, error => {
        console.log(error);
        this.fetching = false;
        this.error = true;
      }
    );
  }

  applyFilter(){
    console.log(this.productFilter.value);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
