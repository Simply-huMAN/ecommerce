import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MatSidenavModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
  isOpen: boolean = false;

  constructor(private router: Router){}

  toggleDrawer(){
    console.log(`toggleDrawer before-state: ${this.isOpen}`);
    this.isOpen = !this.isOpen;
    console.log(`toggleDrawer after-state: ${this.isOpen}\n\n`);

    // const header_section = document.getElementsByClassName('header-section')[0];
    // console.log(`Header section height: ${header_section.clientHeight}`);
  }

  isActive(route: string): boolean{
    return this.router.url.startsWith(route);
  }
}
