import { Component } from '@angular/core';
import { Product } from '../../class/Product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: Product[] = [];

  constructor(){
    this.products = [
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS"),
      new Product("Laptop 13 Inch", "This is a gaming laptop", 88500, 12, "ELECTRONICS")
    ];

  }
}
