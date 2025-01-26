import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule, MatInputModule, FormsModule, MatCard, MatCardTitle, MatButtonModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(){
    // call an API to authenticate the user
    console.log(this.loginForm.value);

    if(this.loginForm.valid){
      this.authService.authenticateUser(this.loginForm.value).subscribe(
        (response) => {
          console.log(`Logged in: ${response}`);
          const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/dashboard';
          console.log(this.router.routerState.snapshot.root.queryParams['returnUrl']);
          console.log(`Redirecting to ${returnUrl}`);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate([returnUrl]).then(success => {
            console.log(`Navigation success: ${success}`);
            if(!success){
              console.log(`Navigation failed`);
              this.router.navigate(['/dashboard']);
            }
          }
          );
        },
        (error) => {
          console.log(`Error:`);
          console.log(error);
          alert('Invalid credentials');
        }
      );
    } 
  }
}
