import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/Product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDivider, MatProgressSpinnerModule, MatRadioModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  fetching = true;
  product: Product | null = null;
  productId: string | null = null;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId');

      console.log(localStorage.getItem('currentProduct'));
      this.product = JSON.parse(localStorage.getItem('currentProduct') || '{}');
      console.log(this.product);
      console.log(`Loading product ${this.productId}...`);

      if(this.productId!=this.product?.id){ 
        localStorage.removeItem('currentProduct');
        this.product = null;
        this.router.navigate(['/products', this.productId]);
      }
    }, error => {
      console.log(error);
    });
  }

}
