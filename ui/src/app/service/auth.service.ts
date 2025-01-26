import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  authenticateUser(userCredentials: any): Observable<any> {
    return this.http.post('http://localhost:8080/users/authenticate', userCredentials, {responseType: 'text'});
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(){
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }
}
