import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../../class/User';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatInputModule, FormsModule, CommonModule, MatCardModule, MatIcon, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  logUser: any | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log(`ProfileComponent initialized`);
    const userDetails = this.authService.getUserDetails();
    try {
      this.user = JSON.parse(userDetails) as User;
      this.user = JSON.parse(this.user.toString());
      console.log(`Logged user details fetched`);
      console.log(this.user);
    } catch (error) {
      console.error('Error parsing user details:', error);
    }
    // console.log(this.authService.getUserDetails());
    // this.user = JSON.parse(this.authService.getUserDetails()) as User;
    // console.log(this.user);
    // console.log(`Logged user details fetched`);
    // console.log(this.user.username);
  }

}
