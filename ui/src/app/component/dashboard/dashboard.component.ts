import { Component, ViewChild, TemplateRef } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isOpen: boolean = false;

  toggleDrawer(){
    console.log(`toggleDrawer before-state: ${this.isOpen}`);
    this.isOpen = !this.isOpen;
    console.log(`toggleDrawer after-state: ${this.isOpen}\n\n`);
  }
}
