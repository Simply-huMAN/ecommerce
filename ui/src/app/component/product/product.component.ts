import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/Product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule , MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatDivider, MatFormFieldModule, MatOptionModule, MatSelectModule, CarouselComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  fetching = true;
  product: Product | null = null;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      if(productId){
        console.log(`Loading product ${productId}...`)
        this.fetchProduct(productId);
      }
    }, error => {
      console.log(error);
    });
  }

  fetchProduct(productId: string){
    this.httpClient.get('http://localhost:8080/products/' + productId)
      .subscribe((response) => {
        console.log(response);
        this.product = response as Product;
        this.fetching = false;
      }, error => {
        console.log(error);
        this.fetching = false;
      }
    );
  }
}
