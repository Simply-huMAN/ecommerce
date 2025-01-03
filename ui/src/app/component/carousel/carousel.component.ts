import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIcon],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() images: string[] = [];
  currentIndex: number = 0;

  // constructor() {
  //   this.currentIndex = 0;
  // }

  goToPreviousImage(index: number){
    if(index>0) this.currentIndex--;
    else this.currentIndex = this.images.length - 1;
  }

  goToNextImage(index: number){
    if(index<this.images.length-1) this.currentIndex++;
    else this.currentIndex  = 0;
  }

}
