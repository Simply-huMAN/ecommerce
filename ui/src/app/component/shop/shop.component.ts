import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/Product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule , MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  fetching = true;
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {}

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
      }
    );
  }
}
