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
    return this.http.post('http://localhost:8080/users/authenticate', userCredentials, {responseType: 'text'}).pipe(
      (response) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userDetails', JSON.stringify(response));
        console.log(`Fetching logged user details...`);
        console.log(response);
        console.log(localStorage);
        console.log(`User details: ${JSON.stringify(response)}`);
        return response;
      }
    );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUserDetails(): any {
    return localStorage.getItem('userDetails');
  }

  logout(){
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }
}
